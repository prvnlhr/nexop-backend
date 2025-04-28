import { RequestHandler } from "express";
import { createResponse } from "../../utils/apiResponseUtils";
import prisma from "../../db/prisma";
import { Variant, VariantImage } from "../../generated/prisma";

// Explicit type for variant with included relations
interface ExtendedVariant extends Variant {
  images: VariantImage[];
  attributes: {
    attribute: { name: string };
    option: { value: string };
    createdAt: Date;
    attributeId: number;
    variantId: number;
    optionId: number;
  }[];
}

interface CheckoutItem {
  id: string;
  productId: number;
  variantId?: number;
  quantity: number;
  price: number;
  productName: string;
  variantName?: string;
  image?: string;
  attributes?: Array<{
    attributeName: string;
    optionValue: string;
  }>;
}

interface UserDetails {
  id: string;
  fullname: string;
  email: string;
  phone?: string;
  address?: string;
}

interface CheckoutResponse {
  items: CheckoutItem[];
  user: UserDetails;
  subtotal: number;
  deliveryCharge: number;
  total: number;
}

export const getCheckoutDetails: RequestHandler = async (req, res) => {
  try {
    const { userId } = req.params;
    console.log(" userId:", userId);
    const { type, product_id, variant_id } = req.query;
    console.log(" type:", type);

    if (!userId) {
      return createResponse(res, 400, null, "User ID is required");
    }

    // Get user details with their default address
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        addresses: {
          // take: 1,
          orderBy: { createdAt: "desc" },
        },
      },
    });

    if (!user) {
      return createResponse(res, 404, null, "User not found");
    }

    let items: CheckoutItem[] = [];
    let subtotal = 0;

    if (type === "single") {
      if (!product_id) {
        return createResponse(
          res,
          400,
          null,
          "Product ID is required for single checkout"
        );
      }

      const productId = parseInt(product_id as string);
      const variantId = variant_id ? parseInt(variant_id as string) : undefined;

      // Query product details
      const product = await prisma.product.findUnique({
        where: { id: productId },
        include: {
          images: {
            where: { isThumbnail: true },
            take: 1,
          },
        },
      });

      if (!product) {
        return createResponse(res, 404, null, "Product not found");
      }

      // Query variant details separately if variantId is provided
      let variant: ExtendedVariant | null = null;
      if (variantId) {
        variant = await prisma.variant.findUnique({
          where: { id: variantId },
          include: {
            images: true,
            attributes: {
              include: {
                attribute: { select: { name: true } },
                option: { select: { value: true } },
              },
            },
          },
        });

        if (!variant || variant.productId !== productId) {
          return createResponse(
            res,
            404,
            null,
            "Variant not found or does not belong to the product"
          );
        }
      }

      const item: CheckoutItem = {
        id: `single-${productId}-${variantId || ""}`,
        productId,
        variantId,
        quantity: 1,
        price: variant?.price || product.basePrice,
        productName: product.name,
        variantName: variant?.name,
        image: variant?.images[0]?.url || product.images[0]?.url,
        attributes: variant?.attributes.map((attr) => ({
          attributeName: attr.attribute.name,
          optionValue: attr.option.value,
        })),
      };

      items = [item];
      subtotal = item.price * item.quantity;
    } else if (type === "cart") {
      const cart = await prisma.cart.findUnique({
        where: { userId },
        include: {
          items: {
            include: {
              product: {
                select: {
                  name: true,
                  images: {
                    where: { isThumbnail: true },
                    take: 1,
                  },
                },
              },
              variant: {
                include: {
                  images: true,
                  attributes: {
                    include: {
                      attribute: { select: { name: true } },
                      option: { select: { value: true } },
                    },
                  },
                },
              },
            },
          },
        },
      });

      if (!cart) {
        return createResponse(res, 404, null, "Cart not found");
      }

      items = cart.items.map((item) => ({
        id: item.id,
        productId: item.productId,
        variantId: item.variantId || undefined,
        quantity: item.quantity,
        price: item.price,
        productName: item.product.name,
        variantName: item.variant?.name,
        image: item.variant?.images[0]?.url || item.product.images[0]?.url,
        attributes: item.variant?.attributes.map((attr) => ({
          attributeName: attr.attribute.name,
          optionValue: attr.option.value,
        })),
      }));

      subtotal = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    } else {
      return createResponse(res, 400, null, "Invalid checkout type");
    }

    const deliveryCharge = 40;
    const total = subtotal + deliveryCharge;

    const userDetails: UserDetails = {
      id: user.id,
      fullname: user.fullname,
      email: user.email,
      phone: user.addresses[0]?.phone,
      address: user.addresses[0]?.address,
    };

    const response: CheckoutResponse = {
      items,
      user: userDetails,
      subtotal,
      deliveryCharge,
      total,
    };

    return createResponse(
      res,
      200,
      response,
      "Checkout details retrieved successfully"
    );
  } catch (error) {
    console.error("Get checkout details error:", error);
    return createResponse(
      res,
      500,
      null,
      error instanceof Error ? error.message : "Internal server error"
    );
  }
};

export const checkoutController = {
  getCheckoutDetails,
};
