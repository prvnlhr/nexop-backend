import { RequestHandler } from "express";
import { createResponse } from "../../utils/apiResponseUtils";
import prisma from "../../db/prisma";

// const getProductVariants: RequestHandler = async (req, res) => {
//   try {
//     const { productId } = req.query;

//     // Validate productId
//     if (!productId || isNaN(Number(productId))) {
//       return createResponse(res, 400, null, "Valid productId is required");
//     }

//     // Fetch product
//     const product = await prisma.product.findUnique({
//       where: { id: Number(productId) },
//       include: {
//         category: {
//           select: {
//             id: true,
//           },
//         },
//       },
//     });

//     if (!product) {
//       return createResponse(res, 404, null, "Product not found");
//     }

//     // Fetch variants with attributes and images
//     const variantsDb = await prisma.variant.findMany({
//       where: { productId: Number(productId) },
//       include: {
//         attributes: {
//           include: {
//             attribute: {
//               select: {
//                 id: true,
//                 name: true,
//               },
//             },
//             option: {
//               select: {
//                 id: true,
//                 value: true,
//               },
//             },
//           },
//         },
//         images: {
//           select: {
//             url: true,
//             publicId: true,
//             order: true,
//           },
//         },
//       },
//     });

//     // Fetch attributes and options for the product's category
//     const categoryAttributes = await prisma.attribute.findMany({
//       where: { categoryId: product.category.id },
//       include: {
//         options: {
//           select: {
//             id: true,
//             value: true,
//           },
//         },
//       },
//     });

//     // Track selected options
//     const variantOptions = new Map<number, Set<number>>();
//     variantsDb.forEach((variant) => {
//       variant.attributes.forEach((attr) => {
//         if (!variantOptions.has(attr.attributeId)) {
//           variantOptions.set(attr.attributeId, new Set());
//         }
//         variantOptions.get(attr.attributeId)?.add(attr.optionId);
//       });
//     });

//     // Prepare response data
//     const responseData = {
//       product: {
//         id: product.id,
//         name: product.name,
//         basePrice: product.basePrice,
//       },
//       attributes: categoryAttributes.map((attr) => ({
//         id: attr.id,
//         name: attr.name,
//         options: attr.options.map((opt) => ({
//           id: opt.id,
//           value: opt.value,
//           selected: variantOptions.has(attr.id)
//             ? variantOptions.get(attr.id)?.has(opt.id) || false
//             : false,
//         })),
//       })),
//       variants: variantsDb.map((variant) => ({
//         id: variant.id,
//         name: variant.name,
//         slug: variant.slug,
//         sku: variant.sku,
//         price: variant.price,
//         stock: variant.stock,
//         status: variant.status,
//         attributes: variant.attributes.map((attr) => ({
//           attributeId: attr.attributeId,
//           attributeName: attr.attribute.name,
//           optionId: attr.optionId,
//           optionValue: attr.option.value,
//         })),
//         images: variant.images.map((img) => ({
//           url: img.url,
//           publicId: img.publicId,
//           order: img.order,
//         })),
//       })),
//     };

//     createResponse(
//       res,
//       200,
//       responseData,
//       null,
//       variantsDb.length > 0
//         ? "Variants and attributes retrieved successfully"
//         : "Product attributes retrieved successfully"
//     );
//   } catch (error) {
//     console.error("Get Product Variants Error:", error);
//     createResponse(
//       res,
//       500,
//       null,
//       error instanceof Error ? error.message : "Internal server error"
//     );
//   }
// };

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

// const updateVariant: RequestHandler = async (req, res) => {
//   try {
//     const { variantSku } = req.params;
//     const payload: UpdateVariantRequest = req.body;
//     const { id, sku, price, stock, status, images, productId } = payload;

//     // Validate SKU in route params
//     if (!variantSku) {
//       return createResponse(res, 400, null, "Variant SKU is required");
//     }

//     // Validate required fields
//     if (!id || !sku || !price || !stock || !status || !images || !productId) {
//       return createResponse(res, 400, null, "Missing required fields");
//     }

//     // Validate SKU consistency
//     if (sku !== variantSku) {
//       return createResponse(
//         res,
//         400,
//         null,
//         "SKU in payload does not match route SKU"
//       );
//     }

//     // Check if variant exists
//     const variantExists = await prisma.variant.findUnique({
//       where: { id, sku },
//     });

//     if (!variantExists) {
//       return createResponse(
//         res,
//         404,
//         null,
//         `Variant with SKU ${sku} not found`
//       );
//     }

//     // Check if product exists
//     const productExists = await prisma.product.findUnique({
//       where: { id: productId },
//     });

//     if (!productExists) {
//       return createResponse(
//         res,
//         404,
//         null,
//         `Product with ID ${productId} not found`
//       );
//     }

//     // Update variant in transaction
//     const result = await prisma.$transaction(async (tx) => {
//       // Update variant details
//       const variant = await tx.variant.update({
//         where: { id, sku },
//         data: {
//           price,
//           stock,
//           status,
//         },
//         include: {
//           images: true,
//         },
//       });

//       // Delete existing variant images
//       await tx.variantImage.deleteMany({
//         where: { variantId: variant.id },
//       });

//       // Create new variant images
//       const variantImages = await tx.variantImage.createMany({
//         data: images.map((img) => ({
//           url: img.url,
//           order: img.order,
//           variantId: variant.id,
//         })),
//       });

//       return {
//         variant,
//         variantImages,
//       };
//     });

//     createResponse(
//       res,
//       200,
//       result,
//       null,
//       `Variant ${sku} updated successfully`
//     );
//   } catch (error) {
//     console.error(
//       `Update Variant Error for SKU ${req.params.variantSku}:`,
//       error
//     );
//     createResponse(
//       res,
//       500,
//       null,
//       error instanceof Error ? error.message : "Internal server error"
//     );
//   }
// };

// NEW CONTROLLER FUNCTIONS ----------------------------------------------

interface UpdateVariantPayload {
  id: number;
  name: string;
  slug: string;
  sku: string;
  price: number;
  stock: number;
  status: "ACTIVE" | "INACTIVE" | "OUT_OF_STOCK";
  attributes: { attributeId: number; optionId: number }[];
  images: { url: string; publicId: string; order: number }[];
}

interface CreateVariantPayload {
  productId: number;
  name: string;
  slug: string;
  sku: string;
  price: number;
  stock: number;
  status: "ACTIVE" | "INACTIVE" | "OUT_OF_STOCK";
  attributes: { attributeId: number; optionId: number }[];
  images: { url: string; publicId: string; order: number }[];
}
const createVariants: RequestHandler = async (req, res) => {
  try {
    const {
      productId,
      name,
      slug,
      sku,
      price,
      stock,
      status,
      attributes,
      images,
    } = req.body as CreateVariantPayload;

    // 1. Validate required fields
    if (!productId || !name || !sku || price == null || stock == null) {
      return createResponse(
        res,
        400,
        null,
        "Missing required fields: productId, name, sku, price, or stock"
      );
    }

    // 2. Validate product exists
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });
    if (!product) {
      return createResponse(
        res,
        404,
        null,
        `Product with ID ${productId} not found`
      );
    }

    // 3. Validate attributes
    if (!attributes || attributes.length === 0) {
      return createResponse(
        res,
        400,
        null,
        "At least one attribute is required"
      );
    }
    for (const attr of attributes) {
      const attributeOption = await prisma.attributeOption.findUnique({
        where: { id: attr.optionId },
        include: { attribute: true },
      });
      if (
        !attributeOption ||
        attributeOption.attributeId !== attr.attributeId
      ) {
        return createResponse(
          res,
          400,
          null,
          `Invalid attribute or option ID: ${attr.attributeId}:${attr.optionId}`
        );
      }
    }
    // 4. Check for duplicate SKU or slug
    const existingVariant = await prisma.variant.findFirst({
      where: {
        OR: [{ sku }, { slug }],
      },
    });
    if (existingVariant) {
      return createResponse(
        res,
        409,
        null,
        `Variant with SKU ${sku} or slug ${slug} already exists`
      );
    }
    // 5. Create the variant with attributes and images
    await prisma.variant.create({
      data: {
        productId,
        name,
        slug: slug || name.toLowerCase().replace(/\s+/g, "-"), // Fallback slug
        sku,
        price,
        stock,
        status: status || "ACTIVE",
        attributes: {
          create: attributes.map((attr) => ({
            attributeId: attr.attributeId,
            optionId: attr.optionId,
          })),
        },
        images: {
          create: images.map((img) => ({
            url: img.url,
            publicId: img.publicId,
            order: img.order,
          })),
        },
      },
    });
    return createResponse(res, 201, null, null, "Variant created successfully");
  } catch (error) {
    console.error("Create Variant Error:", error);
    // Handle specific Prisma errors
    if (error instanceof Error && error.message.includes("Unique constraint")) {
      return createResponse(
        res,
        409,
        null,
        "Variant SKU or slug already exists"
      );
    }
    return createResponse(
      res,
      500,
      null,
      error instanceof Error ? error.message : "Internal server error"
    );
  }
};
const getProductVariantsData: RequestHandler = async (req, res) => {
  try {
    const { productId } = req.params;

    // Validate productId
    if (!productId || isNaN(Number(productId))) {
      return createResponse(res, 400, null, "Valid productId is required");
    }

    // Fetch product
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

    // Fetch attributes and options for the product's category
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
        },
      },
    });

    // Fetch variants with attributes and images
    const variantsDb = await prisma.variant.findMany({
      where: { productId: Number(productId) },
      select: {
        id: true,
        name: true,
        slug: true,
        sku: true,
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
        images: {
          select: {
            url: true,
            publicId: true,
            order: true,
          },
        },
      },
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
          selected: variantOptions.has(attr.id)
            ? variantOptions.get(attr.id)?.has(opt.id) || false
            : false,
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
        images: variant.images.map((img) => ({
          url: img.url,
          publicId: img.publicId,
          order: img.order,
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

const updateProductVariants: RequestHandler = async (req, res) => {
  try {
    const payloads = req.body as UpdateVariantPayload[];

    // console.log("payloads:", payloads);

    if (!Array.isArray(payloads) || payloads.length === 0) {
      return createResponse(
        res,
        400,
        null,
        "Payload must be a non-empty array of variant updates"
      );
    }

    const errors: string[] = [];

    for (const payload of payloads) {
      try {
        const {
          id,
          name,
          slug,
          sku,
          price,
          stock,
          status,
          attributes,
          images,
        } = payload;

        // 1. Validate required fields
        if (
          !id ||
          !name ||
          !sku ||
          price == null ||
          stock == null ||
          !status ||
          !attributes ||
          attributes.length === 0
        ) {
          errors.push(
            `Invalid payload for variant ID ${id}: Missing required fields`
          );
          continue;
        }

        // 2. Validate variant exists
        const existingVariant = await prisma.variant.findUnique({
          where: { id },
        });
        if (!existingVariant) {
          errors.push(`Variant with ID ${id} not found`);
          continue;
        }

        // 3. Validate product exists
        const product = await prisma.product.findUnique({
          where: { id: existingVariant.productId },
        });
        if (!product) {
          errors.push(`Product with ID ${existingVariant.productId} not found`);
          continue;
        }

        // 4. Validate attributes
        for (const attr of attributes) {
          const attributeOption = await prisma.attributeOption.findUnique({
            where: { id: attr.optionId },
            include: { attribute: true },
          });
          if (
            !attributeOption ||
            attributeOption.attributeId !== attr.attributeId
          ) {
            errors.push(
              `Invalid attribute or option ID for variant ${sku}: ${attr.attributeId}:${attr.optionId}`
            );
            continue;
          }
        }

        // 5. Check for SKU or slug conflicts (excluding current variant)
        const conflictingVariant = await prisma.variant.findFirst({
          where: {
            OR: [{ sku }, { slug }],
            NOT: { id },
          },
        });
        if (conflictingVariant) {
          errors.push(
            `Variant with SKU ${sku} or slug ${slug} already exists for another variant`
          );
          continue;
        }

        // 6. Update variant in database
        await prisma.variant.update({
          where: { id },
          data: {
            name,
            slug: slug || name.toLowerCase().replace(/\s+/g, "-"),
            sku,
            price,
            stock,
            status,
            attributes: {
              deleteMany: {}, // Clear existing attributes
              create: attributes.map((attr) => ({
                attributeId: attr.attributeId,
                optionId: attr.optionId,
              })),
            },
            images: {
              deleteMany: {}, // Delete all existing images
              create: images.map((img) => ({
                url: img.url,
                publicId: img.publicId,
                order: img.order,
              })), // Create all images from payload
            },
          },
        });
      } catch (err) {
        errors.push(
          `Failed to update variant ID ${payload.id}: ${
            err instanceof Error ? err.message : "Unknown error"
          }`
        );
      }
    }

    if (errors.length > 0) {
      return createResponse(res, 400, null, errors.join("; "));
    }

    return createResponse(
      res,
      200,
      null,
      null,
      "Variants updated successfully"
    );
  } catch (error) {
    console.error("Update Variants Error:", error);
    return createResponse(
      res,
      500,
      null,
      error instanceof Error ? error.message : "Internal server error"
    );
  }
};

const deleteVariant: RequestHandler = async (req, res) => {
  try {
    const { variantId } = req.params;

    // 1. Validate variant ID
    if (!variantId || isNaN(parseInt(variantId))) {
      return createResponse(res, 400, null, "Valid variant ID is required");
    }

    const variantIdNum = parseInt(variantId);

    // 2. Check if variant exists
    const variant = await prisma.variant.findUnique({
      where: { id: variantIdNum },
      include: {
        CartItem: { select: { id: true } },
      },
    });

    if (!variant) {
      return createResponse(res, 404, null, "Variant not found");
    }

    // 3. Check for dependencies
    if (variant.CartItem.length > 0) {
      return createResponse(
        res,
        400,
        null,
        "Cannot delete variant with items in user carts"
      );
    }

    // 4. Delete variant and its associated data within a transaction
    await prisma.$transaction([
      // Delete associated variant attributes
      prisma.variantAttribute.deleteMany({
        where: { variantId: variantIdNum },
      }),
      // Delete associated variant images
      prisma.variantImage.deleteMany({
        where: { variantId: variantIdNum },
      }),
      // Delete the variant
      prisma.variant.delete({
        where: { id: variantIdNum },
      }),
    ]);

    // 5. Return success response
    createResponse(
      res,
      200,
      { success: true },
      null,
      "Variant deleted successfully"
    );
  } catch (error) {
    console.error("Delete Variant Error:", error);
    createResponse(
      res,
      500,
      null,
      error instanceof Error ? error.message : "Internal server error"
    );
  }
};

export const variantController = {
  // getProductVariants,
  createVariants,
  // updateVariant,
  getProductVariantsData,
  updateProductVariants,
  deleteVariant,
};
