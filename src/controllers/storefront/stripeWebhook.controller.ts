import { RequestHandler } from "express";
import Stripe from "stripe";
import prisma from "../../db/prisma";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

interface CheckoutItem {
  id: string;
  productId: number;
  variantId?: number | null;
  quantity: number;
  price: number;
  variantName: string;
  attributes: { attributeName: string; optionValue: string }[];
}

const webhook: RequestHandler = async (req, res) => {
  const sig = req.headers["stripe-signature"] as string;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  try {
    const event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      const { userId, type, product_id, variant_id, address } =
        session.metadata || {};
      const paymentId = session.payment_intent as string;
      const email = session.customer_email!;
      const totalAmount = (session.amount_total || 0) / 100; // Convert cents to INR

      if (!userId || !type || !email || !paymentId) {
        throw new Error("Missing required metadata");
      }

      // Parse address
      const parsedAddress = JSON.parse(address || "{}");

      // Fetch checkout data (for cart type)
      const checkoutData: { total: number; items: CheckoutItem[] } = {
        total: totalAmount,
        items: [],
      };

      if (type === "cart") {
        const cart = await prisma.cart.findUnique({
          where: { userId },
          include: { items: { include: { product: true, variant: true } } },
        });
        if (cart) {
          // Fetch attributes for all variantIds in the cart
          const variantIds = cart.items
            .map((item) => item.variantId)
            .filter((id): id is number => id !== null);
          const variantAttributes = await prisma.variantAttribute.findMany({
            where: { variantId: { in: variantIds } },
            include: { attribute: true, option: true },
          });

          checkoutData.items = cart.items.map((item) => {
            const attributes = item.variantId
              ? variantAttributes
                  .filter((attr) => attr.variantId === item.variantId)
                  .map((attr) => ({
                    attributeName: attr.attribute.name,
                    optionValue: attr.option.value,
                  }))
              : [];
            return {
              id: item.id,
              productId: item.productId,
              variantId: item.variantId,
              quantity: item.quantity,
              price: item.price,
              variantName: item.variant?.name || item.product.name,
              attributes,
            };
          });
          checkoutData.total = cart.items.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
          );
        }
      } else if (type === "single") {
        const variant = await prisma.variant.findUnique({
          where: { id: parseInt(variant_id!) },
          include: {
            product: true,
            attributes: { include: { attribute: true, option: true } },
          },
        });
        if (variant) {
          checkoutData.items = [
            {
              id: "",
              productId: parseInt(product_id!),
              variantId: parseInt(variant_id!),
              quantity: 1,
              price: variant.price,
              variantName: variant.name,
              attributes: variant.attributes.map((attr) => ({
                attributeName: attr.attribute.name,
                optionValue: attr.option.value,
              })),
            },
          ];
        }
      } else {
        throw new Error("Invalid checkout type");
      }

      // Call createOrder logic
      const order = await prisma.$transaction(async (tx) => {
        const newAddress = await tx.address.create({
          data: {
            userId,
            phone: "",
            address: `${parsedAddress.line1}, ${parsedAddress.city}, ${
              parsedAddress.state
            }${
              parsedAddress.postal_code ? `, ${parsedAddress.postal_code}` : ""
            }`,
          },
        });

        let orderItemsData: {
          productId: number;
          variantId?: number;
          quantity: number;
          price: number;
        }[] = [];

        if (type === "single") {
          const productId = parseInt(product_id!);
          const variantId = parseInt(variant_id!);
          const variant = await tx.variant.findUnique({
            where: { id: variantId },
          });

          if (!variant || variant.productId !== productId) {
            throw new Error("Invalid product or variant");
          }

          if (variant.stock < 1) {
            throw new Error("Item out of stock");
          }

          await tx.variant.update({
            where: { id: variantId },
            data: {
              stock: { decrement: 1 },
              status: variant.stock === 1 ? "OUT_OF_STOCK" : "ACTIVE",
            },
          });

          orderItemsData = [
            { productId, variantId, quantity: 1, price: variant.price },
          ];
        } else {
          const cart = await tx.cart.findUnique({
            where: { userId },
            include: { items: { include: { variant: true, product: true } } },
          });

          if (!cart || !cart.items.length) {
            throw new Error("Cart is empty");
          }

          for (const item of cart.items) {
            if (!item.variant || item.variant.stock < item.quantity) {
              throw new Error(`Insufficient stock for ${item.product.name}`);
            }
          }

          for (const item of cart.items) {
            await tx.variant.update({
              where: { id: item.variantId! },
              data: {
                stock: { decrement: item.quantity },
                status:
                  item.variant!.stock === item.quantity
                    ? "OUT_OF_STOCK"
                    : "ACTIVE",
              },
            });
          }

          orderItemsData = cart.items.map((item) => ({
            productId: item.productId,
            variantId: item.variantId ?? undefined, // Convert null to undefined
            quantity: item.quantity,
            price: item.price,
          }));

          await tx.cartItem.deleteMany({ where: { cartId: cart.id } });
        }

        const newOrder = await tx.order.create({
          data: {
            userId,
            addressId: newAddress.id,
            totalAmount: checkoutData.total,
            status: "CONFIRMED",
            paymentId,
          },
        });

        await tx.orderItem.createMany({
          data: orderItemsData.map((item) => ({
            orderId: newOrder.id,
            productId: item.productId,
            variantId: item.variantId,
            quantity: item.quantity,
            price: item.price,
          })),
        });

        return await tx.order.findUnique({
          where: { id: newOrder.id },
          include: {
            items: { include: { product: true, variant: true } },
            address: true,
          },
        });
      });

      console.log("Order created for session:", session.id);
    }

    res.status(200).end();
  } catch (error) {
    console.error("Webhook Error:", error);
    res.status(400).end();
  }
};

export const stripeWebhookController = {
  webhook,
};
