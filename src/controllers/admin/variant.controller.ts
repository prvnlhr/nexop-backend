import { RequestHandler } from "express";
import { createResponse } from "../../utils/apiResponseUtils";
import prisma from "../../db/prisma";

const getProductVariants: RequestHandler = async (req, res) => {
  try {
    const { productId } = req.query;

    // Validate productId
    if (!productId || isNaN(Number(productId))) {
      return createResponse(res, 400, null, "Valid productId is required");
    }

    // Fetch product with category
    const product = await prisma.product.findUnique({
      where: { id: Number(productId) },
      include: {
        category: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    if (!product) {
      return createResponse(res, 404, null, "Product not found");
    }

    // Fetch variants with their attributes, options, and images
    const variantsDb = await prisma.variant.findMany({
      where: { productId: Number(productId) },
      include: {
        attributes: {
          include: {
            attribute: {
              select: {
                id: true,
                name: true,
              },
            },
            option: {
              select: {
                id: true,
                value: true,
              },
            },
          },
        },
        images: {
          orderBy: { order: "asc" },
          select: {
            id: true,
            url: true,
            order: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    // Fetch all attributes and options for the product's category
    const categoryAttributes = await prisma.attribute.findMany({
      where: { categoryId: product.category.id },
      include: {
        options: {
          orderBy: { createdAt: "asc" },
          select: {
            id: true,
            value: true,
          },
        },
      },
      orderBy: { displayOrder: "asc" },
    });

    // Track selected options
    const variantOptions = new Map<number, Set<number>>();
    variantsDb.forEach((variant) => {
      variant.attributes.forEach((attr) => {
        if (!variantOptions.has(attr.attributeId)) {
          variantOptions.set(attr.attributeId, new Set());
        }
        variantOptions.get(attr.attributeId)?.add(attr.optionId);
      });
    });

    // Prepare response data
    const variants = {
      product: {
        id: product.id,
        name: product.name,
        categoryId: product.category.id,
        categoryName: product.category.name,
        basePrice: product.basePrice,
        existingVariantsCount: variantsDb.length,
      },
      attributes: categoryAttributes.map((attr) => ({
        id: attr.id,
        name: attr.name,
        isFilterable: attr.isFilterable,
        displayOrder: attr.displayOrder,
        options: attr.options.map((opt) => ({
          id: opt.id,
          value: opt.value,
          selected: variantOptions.has(attr.id)
            ? variantOptions.get(attr.id)?.has(opt.id) || false
            : false,
        })),
      })),
      variants: variantsDb.map((variant) => ({
        id: variant.id,
        sku: variant.sku,
        price: variant.price,
        stock: variant.stock,
        status: variant.status,
        images: variant.images,
        attributes: variant.attributes.map((attr) => ({
          attributeId: attr.attributeId,
          attributeName: attr.attribute.name,
          optionId: attr.optionId,
          optionValue: attr.option.value,
        })),
      })),
    };

    createResponse(
      res,
      200,
      variants,
      null,
      variantsDb.length > 0
        ? "Variants and attributes retrieved successfully"
        : "Product attributes retrieved successfully"
    );
  } catch (error) {
    console.error("Get Product Variants Error:", error);
    createResponse(
      res,
      500,
      null,
      error instanceof Error ? error.message : "Internal server error"
    );
  }
};

interface CreateVariantRequest {
  productId: number;
  sku: string;
  price: number;
  stock: number;
  status: "ACTIVE" | "INACTIVE" | "OUT_OF_STOCK";
  attributes: {
    attributeId: number;
    optionId: number;
  }[];
  images: {
    url: string;
    order: number;
  }[];
}

const createVariants: RequestHandler = async (req, res) => {
  try {
    // const payload: CreateVariantRequest = req.body;
    // const { productId, sku, price, stock, status, attributes, images } =
    //   payload;

    // // Validate required fields
    // if (
    //   !productId ||
    //   !sku ||
    //   !price ||
    //   !stock ||
    //   !status ||
    //   !attributes ||
    //   !images
    // ) {
    //   return createResponse(res, 400, null, "Missing required fields");
    // }

    // // Check if product exists
    // const productExists = await prisma.product.findUnique({
    //   where: { id: productId },
    // });

    // if (!productExists) {
    //   return createResponse(res, 404, null, "Product not found");
    // }

    // // Check SKU uniqueness
    // const skuExists = await prisma.variant.findUnique({
    //   where: { sku },
    // });

    // if (skuExists) {
    //   return createResponse(res, 400, null, `SKU '${sku}' is already in use`);
    // }

    // // Validate attributes and options
    // const attributeIds = attributes.map((attr) => attr.attributeId);
    // const optionIds = attributes.map((attr) => attr.optionId);

    // const [existingAttributes, existingOptions] = await Promise.all([
    //   prisma.attribute.findMany({
    //     where: { id: { in: attributeIds } },
    //     select: { id: true },
    //   }),
    //   prisma.attributeOption.findMany({
    //     where: { id: { in: optionIds } },
    //     select: { id: true, attributeId: true },
    //   }),
    // ]);

    // // Check for missing attributes
    // if (existingAttributes.length !== attributeIds.length) {
    //   const missingIds = attributeIds.filter(
    //     (id) => !existingAttributes.some((attr) => attr.id === id)
    //   );
    //   return createResponse(
    //     res,
    //     400,
    //     null,
    //     `Attributes with IDs ${missingIds.join(", ")} not found`
    //   );
    // }

    // // Check for missing options
    // if (existingOptions.length !== optionIds.length) {
    //   const missingIds = optionIds.filter(
    //     (id) => !existingOptions.some((opt) => opt.id === id)
    //   );
    //   return createResponse(
    //     res,
    //     400,
    //     null,
    //     `Options with IDs ${missingIds.join(", ")} not found`
    //   );
    // }

    // // Validate option-attribute relationships
    // for (const attr of attributes) {
    //   const option = existingOptions.find((opt) => opt.id === attr.optionId);
    //   if (option && option.attributeId !== attr.attributeId) {
    //     return createResponse(
    //       res,
    //       400,
    //       null,
    //       `Option ID ${attr.optionId} doesn't belong to Attribute ID ${attr.attributeId}`
    //     );
    //   }
    // }

    // // Create variant in transaction
    // const result = await prisma.$transaction(async (tx) => {
    //   // Create variant
    //   const variant = await tx.variant.create({
    //     data: {
    //       sku,
    //       slug,
    //       price,
    //       stock,
    //       status,
    //       productId,
    //     },
    //   });

    //   // Create variant attributes
    //   await tx.variantAttribute.createMany({
    //     data: attributes.map((attr) => ({
    //       variantId: variant.id,
    //       attributeId: attr.attributeId,
    //       optionId: attr.optionId,
    //     })),
    //   });

    //   // Create variant images
    //   await tx.variantImage.createMany({
    //     data: images.map((img) => ({
    //       url: img.url,
    //       order: img.order,
    //       variantId: variant.id,
    //     })),
    //   });

    //   // Return complete variant data
    //   return await tx.variant.findUnique({
    //     where: { id: variant.id },
    //     include: {
    //       attributes: {
    //         include: {
    //           attribute: true,
    //           option: true,
    //         },
    //       },
    //       images: true,
    //     },
    //   });
    // });

    createResponse(
      res,
      201,
      {
        success: true,
        // data: result,
      },
      null,
      "Variant created successfully"
    );
  } catch (error) {
    console.error("Create Variant Error:", error);
    createResponse(
      res,
      500,
      null,
      error instanceof Error ? error.message : "Internal server error"
    );
  }
};

interface UpdateVariantRequest {
  id: number;
  sku: string;
  price: number;
  stock: number;
  status: "ACTIVE" | "INACTIVE" | "OUT_OF_STOCK";
  images: {
    url: string;
    order: number;
  }[];
  productId: number;
}

const updateVariant: RequestHandler = async (req, res) => {
  try {
    const { variantSku } = req.params;
    const payload: UpdateVariantRequest = req.body;
    const { id, sku, price, stock, status, images, productId } = payload;

    // Validate SKU in route params
    if (!variantSku) {
      return createResponse(res, 400, null, "Variant SKU is required");
    }

    // Validate required fields
    if (!id || !sku || !price || !stock || !status || !images || !productId) {
      return createResponse(res, 400, null, "Missing required fields");
    }

    // Validate SKU consistency
    if (sku !== variantSku) {
      return createResponse(
        res,
        400,
        null,
        "SKU in payload does not match route SKU"
      );
    }

    // Check if variant exists
    const variantExists = await prisma.variant.findUnique({
      where: { id, sku },
    });

    if (!variantExists) {
      return createResponse(
        res,
        404,
        null,
        `Variant with SKU ${sku} not found`
      );
    }

    // Check if product exists
    const productExists = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!productExists) {
      return createResponse(
        res,
        404,
        null,
        `Product with ID ${productId} not found`
      );
    }

    // Update variant in transaction
    const result = await prisma.$transaction(async (tx) => {
      // Update variant details
      const variant = await tx.variant.update({
        where: { id, sku },
        data: {
          price,
          stock,
          status,
        },
        include: {
          images: true,
        },
      });

      // Delete existing variant images
      await tx.variantImage.deleteMany({
        where: { variantId: variant.id },
      });

      // Create new variant images
      const variantImages = await tx.variantImage.createMany({
        data: images.map((img) => ({
          url: img.url,
          order: img.order,
          variantId: variant.id,
        })),
      });

      return {
        variant,
        variantImages,
      };
    });

    createResponse(
      res,
      200,
      result,
      null,
      `Variant ${sku} updated successfully`
    );
  } catch (error) {
    console.error(
      `Update Variant Error for SKU ${req.params.variantSku}:`,
      error
    );
    createResponse(
      res,
      500,
      null,
      error instanceof Error ? error.message : "Internal server error"
    );
  }
};

// new controllers ----------

const getProductVariantsData: RequestHandler = async (req, res) => {
  try {
    const { productId } = req.params;

    // Validate productId
    if (!productId || isNaN(Number(productId))) {
      return createResponse(res, 400, null, "Valid productId is required");
    }

    // Fetch product with category
    const product = await prisma.product.findUnique({
      where: { id: Number(productId) },
      select: {
        id: true,
        name: true,
        categoryId: true,
        basePrice: true,
        brand: true,
        description: true,
        category: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    if (!product) {
      return createResponse(res, 404, null, "Product not found");
    }

    // Fetch all attributes and options for the product's category
    const categoryAttributes = await prisma.attribute.findMany({
      where: { categoryId: product.categoryId },
      select: {
        id: true,
        name: true,
        options: {
          select: {
            id: true,
            value: true,
          },
          orderBy: { createdAt: "asc" },
        },
      },
      orderBy: { displayOrder: "asc" },
    });

    // Fetch existing variants with attributes
    const variantsDb = await prisma.variant.findMany({
      where: { productId: Number(productId) },
      select: {
        id: true,
        sku: true,
        slug: true,
        name: true,
        price: true,
        stock: true,
        status: true,
        attributes: {
          select: {
            attributeId: true,
            optionId: true,
            attribute: {
              select: {
                id: true,
                name: true,
              },
            },
            option: {
              select: {
                id: true,
                value: true,
              },
            },
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    // Prepare response data
    const responseData = {
      product: {
        id: product.id,
        name: product.name,
        categoryId: product.category.id,
        categoryName: product.category.name,
        basePrice: product.basePrice,
        brand: product.brand,
        description: product.description,
        existingVariantsCount: variantsDb.length,
      },
      attributes: categoryAttributes.map((attr) => ({
        id: attr.id,
        name: attr.name,
        options: attr.options.map((opt) => ({
          id: opt.id,
          value: opt.value,
          selected: false,
        })),
      })),
      variants: variantsDb.map((variant) => ({
        id: variant.id,
        name: variant.name,
        slug: variant.slug,
        sku: variant.sku,
        price: variant.price,
        stock: variant.stock,
        status: variant.status,
        attributes: variant.attributes.map((attr) => ({
          attributeId: attr.attributeId,
          attributeName: attr.attribute.name,
          optionId: attr.optionId,
          optionValue: attr.option.value,
        })),
      })),
    };

    createResponse(
      res,
      200,
      responseData,
      null,
      variantsDb.length > 0
        ? "Product variant data retrieved successfully"
        : "Product attributes retrieved successfully"
    );
  } catch (error) {
    console.error("Get Product Variants Data Error:", error);
    createResponse(
      res,
      500,
      null,
      error instanceof Error ? error.message : "Internal server error"
    );
  }
};

export const variantController = {
  getProductVariants,
  createVariants,
  updateVariant,
  getProductVariantsData,
};
