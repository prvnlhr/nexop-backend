import { RequestHandler } from "express";
import prisma from "../../db/prisma";
import { createResponse } from "../../utils/apiResponseUtils";

interface CartItemAddRequest {
  userId: string;
  productId: number;
  variantId?: number;
  quantity?: number;
}

interface CartItemUpdateRequest {
  userId: string;
  productId: number;
  variantId?: number;
  newQuantity: number;
}

interface CartItemRemoveRequest {
  userId: string;
  productId: number;
  variantId?: number;
}

export const addToCart: RequestHandler = async (req, res) => {
  try {
    const {
      userId,
      productId,
      variantId,
      quantity = 1,
    }: CartItemAddRequest = req.body;

    // Validate required fields
    if (!userId || !productId) {
      return createResponse(
        res,
        400,
        null,
        "userId and productId are required"
      );
    }

    // Check if product exists
    const product = await prisma.product.findUnique({
      where: { id: productId, status: "PUBLISHED" },
      include: {
        variants: variantId
          ? { where: { id: variantId, status: "ACTIVE" } }
          : false,
      },
    });

    if (!product) {
      return createResponse(res, 404, null, "Product not found or unavailable");
    }

    // Validate variant if provided
    if (variantId && (!product.variants || product.variants.length === 0)) {
      return createResponse(res, 404, null, "Variant not found or unavailable");
    }

    const price = variantId ? product.variants[0].price : product.basePrice;

    // Get or create user's cart
    let cart = await prisma.cart.findUnique({ where: { userId } });

    if (!cart) {
      cart = await prisma.cart.create({ data: { userId } });
    }

    // Check if item already exists in cart
    const existingItem = await prisma.cartItem.findFirst({
      where: {
        cartId: cart.id,
        productId,
        variantId: variantId || null, // Handle null for non-variant items
      },
    });

    let updatedItem;
    if (existingItem) {
      // Update quantity if item exists
      updatedItem = await prisma.cartItem.update({
        where: { id: existingItem.id },
        data: { quantity: existingItem.quantity + quantity },
      });
    } else {
      // Add new item to cart
      updatedItem = await prisma.cartItem.create({
        data: {
          cartId: cart.id,
          productId,
          variantId,
          quantity,
          price,
        },
      });
    }

    return createResponse(res, 200, updatedItem, "Item added to cart");
  } catch (error) {
    console.error("Add to cart error:", error);
    return createResponse(
      res,
      500,
      null,
      error instanceof Error ? error.message : "Internal server error"
    );
  }
};

export const updateCartItem: RequestHandler = async (req, res) => {
  try {
    const { userId, productId, variantId, newQuantity }: CartItemUpdateRequest =
      req.body;

    // Validate input
    if (!userId || !productId || newQuantity === undefined) {
      return createResponse(res, 400, null, "Missing required fields");
    }

    if (newQuantity <= 0) {
      return createResponse(res, 400, null, "Quantity must be positive");
    }

    // Find user's cart
    const cart = await prisma.cart.findUnique({ where: { userId } });
    if (!cart) {
      return createResponse(res, 404, null, "Cart not found");
    }

    // Find the cart item
    const cartItem = await prisma.cartItem.findFirst({
      where: {
        cartId: cart.id,
        productId,
        variantId: variantId || null,
      },
    });

    if (!cartItem) {
      return createResponse(res, 404, null, "Item not found in cart");
    }

    // Update quantity
    const updatedItem = await prisma.cartItem.update({
      where: { id: cartItem.id },
      data: { quantity: newQuantity },
    });

    return createResponse(res, 200, updatedItem, "Cart item updated");
  } catch (error) {
    console.error("Update cart error:", error);
    return createResponse(
      res,
      500,
      null,
      error instanceof Error ? error.message : "Internal server error"
    );
  }
};

export const removeFromCart: RequestHandler = async (req, res) => {
  try {
    const { userId, productId, variantId }: CartItemRemoveRequest = req.body;

    // Validate input
    if (!userId || !productId) {
      return createResponse(
        res,
        400,
        null,
        "userId and productId are required"
      );
    }

    // Find user's cart
    const cart = await prisma.cart.findUnique({ where: { userId } });
    if (!cart) {
      return createResponse(res, 404, null, "Cart not found");
    }

    // Find and delete the cart item
    const cartItem = await prisma.cartItem.findFirst({
      where: {
        cartId: cart.id,
        productId,
        variantId: variantId || null,
      },
    });

    if (!cartItem) {
      return createResponse(res, 404, null, "Item not found in cart");
    }

    await prisma.cartItem.delete({ where: { id: cartItem.id } });

    return createResponse(res, 200, null, "Item removed from cart");
  } catch (error) {
    console.error("Remove from cart error:", error);
    return createResponse(
      res,
      500,
      null,
      error instanceof Error ? error.message : "Internal server error"
    );
  }
};

interface FormattedCartItem {
  id: string;
  productId: number;
  variantId?: number;
  quantity: number;
  price: number;
  productName: string;
  variantName?: string;
  image?: string;
  variantDetails?: {
    name: string;
    price: number;
    images: { url: string }[];
    attributes: {
      attributeId: number;
      optionId: number;
      attributeName?: string;
      optionValue?: string;
    }[];
  };
}

interface FormattedCart {
  id: string;
  items: FormattedCartItem[];
}

export const getCart: RequestHandler = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return createResponse(res, 400, null, "userId is required");
    }

    const cart = await prisma.cart.findUnique({
      where: { userId },
      include: {
        items: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
                basePrice: true,
                images: {
                  where: { isThumbnail: true },
                  take: 1,
                },
              },
            },
            variant: {
              include: {
                images: {
                  orderBy: { order: "asc" },
                  take: 1,
                },
                attributes: {
                  include: {
                    attribute: {
                      select: {
                        name: true,
                      },
                    },
                    option: {
                      select: {
                        value: true,
                      },
                    },
                  },
                },
              },
            },
          },
          orderBy: {
            createdAt: "asc",
          },
        },
      },
    });

    if (!cart) {
      return createResponse(res, 200, { items: [] }, "Cart is empty");
    }

    const formattedCart: FormattedCart = {
      id: cart.id,
      items: await Promise.all(
        cart.items.map(async (item): Promise<FormattedCartItem> => {
          const baseItem = {
            id: item.id,
            productId: item.productId,
            variantId: item.variantId || undefined,
            quantity: item.quantity,
            price: item.price,
            productName: item.product.name,
          };

          if (!item.variant) {
            return {
              ...baseItem,
              image: item.product.images[0]?.url,
            };
          }

          return {
            ...baseItem,
            variantName: item.variant.name,
            image: item.variant.images[0]?.url || item.product.images[0]?.url,
            variantDetails: {
              name: item.variant.name,
              price: item.price,
              images: item.variant.images,
              attributes: item.variant.attributes.map((attr) => ({
                attributeId: attr.attributeId,
                optionId: attr.optionId,
                attributeName: attr.attribute.name,
                optionValue: attr.option.value,
              })),
            },
          };
        })
      ),
    };

    return createResponse(
      res,
      200,
      formattedCart,
      "Cart retrieved successfully"
    );
  } catch (error) {
    console.error("Get cart error:", error);
    return createResponse(
      res,
      500,
      null,
      error instanceof Error ? error.message : "Internal server error"
    );
  }
};
export const cartController = {
  addToCart,
  updateCartItem,
  removeFromCart,
  getCart,
};
