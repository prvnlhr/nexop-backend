import { RequestHandler } from "express";
import { createResponse } from "../../utils/apiResponseUtils";
import prisma from "../../db/prisma";

interface CreateOrderRequest {
  userId: string;
  email: string;
  address: {
    houseBuilding: string;
    roadArea: string;
    city: string;
    state: string;
    postalCode?: string;
  };
  paymentId: string;
  checkoutData: {
    total: number;
    items: {
      id: string;
      productId: number;
      variantId?: number;
      quantity: number;
      price: number;
      image: string;
      variantName: string;
      attributes: { attributeName: string; optionValue: string }[];
    }[];
  };
  queryParams: {
    type: string;
    product_id?: string;
    variant_id?: string;
  };
}

const createOrder: RequestHandler = async (req, res) => {
  try {
    const { userId, email, address, paymentId, checkoutData, queryParams } =
      req.body as CreateOrderRequest;

    // Validate inputs
    if (
      !userId ||
      !email ||
      !address ||
      !paymentId ||
      !checkoutData ||
      !queryParams.type
    ) {
      return createResponse(res, 400, null, "Missing required fields");
    }

    if (!["cart", "single"].includes(queryParams.type)) {
      return createResponse(res, 400, null, "Invalid checkout type");
    }

    // Validate user
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return createResponse(res, 404, null, "User not found");
    }

    // Create address
    const newAddress = await prisma.address.create({
      data: {
        userId,
        phone: "", // Add phone if available in form
        address: `${address.houseBuilding}, ${address.roadArea}, ${
          address.city
        }, ${address.state}${
          address.postalCode ? `, ${address.postalCode}` : ""
        }`,
      },
    });

    // Handle order creation within a transaction
    const order = await prisma.$transaction(async (tx) => {
      let orderItemsData: {
        productId: number;
        variantId?: number;
        quantity: number;
        price: number;
      }[] = [];

      if (queryParams.type === "single") {
        // Validate single product purchase
        if (!queryParams.product_id || !queryParams.variant_id) {
          throw new Error(
            "Product ID and Variant ID are required for single purchase"
          );
        }

        const productId = parseInt(queryParams.product_id);
        const variantId = parseInt(queryParams.variant_id);

        const variant = await tx.variant.findUnique({
          where: { id: variantId },
          include: { product: true },
        });

        if (!variant || variant.productId !== productId) {
          throw new Error("Invalid product or variant");
        }

        if (variant.stock < 1) {
          throw new Error("Item out of stock");
        }

        // Update stock
        await tx.variant.update({
          where: { id: variantId },
          data: {
            stock: { decrement: 1 },
            status: variant.stock === 1 ? "OUT_OF_STOCK" : "ACTIVE",
          },
        });

        orderItemsData = [
          {
            productId,
            variantId,
            quantity: 1,
            price: variant.price,
          },
        ];
      } else {
        // Cart purchase
        const cart = await tx.cart.findUnique({
          where: { userId },
          include: { items: { include: { variant: true, product: true } } },
        });

        if (!cart || !cart.items.length) {
          throw new Error("Cart is empty");
        }

        // Validate stock
        for (const item of cart.items) {
          if (!item.variant || item.variant.stock < item.quantity) {
            throw new Error(`Insufficient stock for ${item.product.name}`);
          }
        }

        // Update stock
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
          variantId: item.variantId!,
          quantity: item.quantity,
          price: item.price,
        }));

        // Clear cart
        await tx.cartItem.deleteMany({ where: { cartId: cart.id } });
      }

      // Create order
      const newOrder = await tx.order.create({
        data: {
          userId,
          addressId: newAddress.id,
          totalAmount: checkoutData.total,
          status: "CONFIRMED",
          paymentId,
        },
      });

      // Create order items
      await tx.orderItem.createMany({
        data: orderItemsData.map((item) => ({
          orderId: newOrder.id,
          productId: item.productId,
          variantId: item.variantId,
          quantity: item.quantity,
          price: item.price,
        })),
      });

      // Fetch complete order
      return await tx.order.findUnique({
        where: { id: newOrder.id },
        include: {
          items: {
            include: {
              product: true,
              variant: true,
            },
          },
          address: true,
        },
      });
    });

    createResponse(
      res,
      201,
      { success: true, data: order },
      null,
      "Order created successfully"
    );
  } catch (error) {
    console.error("Create Order Error:", error);
    createResponse(
      res,
      500,
      null,
      error instanceof Error ? error.message : "Internal server error"
    );
  }
};
const getOrderById: RequestHandler = async (req, res) => {
  try {
    const { orderId } = req.params;

    if (!orderId) {
      return createResponse(res, 400, null, "Order ID is required");
    }

    const order = await prisma.order.findUnique({
      where: { id: orderId },
      include: {
        items: {
          include: {
            product: true,
            variant: true,
          },
        },
        address: true,
        user: true,
      },
    });

    if (!order) {
      return createResponse(res, 404, null, "Order not found");
    }

    createResponse(res, 200, order, null, "Order fetched successfully");
  } catch (error) {
    console.error("Get Order Error:", error);
    createResponse(
      res,
      500,
      null,
      error instanceof Error ? error.message : "Internal server error"
    );
  }
};

export const orderController = {
  createOrder,
  getOrderById,
};
