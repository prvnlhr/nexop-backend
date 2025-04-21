import { RequestHandler } from "express";
import prisma from "../../db/prisma";
import { createResponse } from "../../utils/apiResponseUtils";

export const getCategoryProducts: RequestHandler = async (req, res) => {
  try {
    const { categoryId } = req.params;
    console.log("categoryId:product.controller", categoryId);
    if (!categoryId) {
      return createResponse(res, 400, null, "categoryId parameter is required");
    }

    // 1. Find the category and check for direct products
    const category = await prisma.category.findUnique({
      where: { id: parseInt(categoryId) },
      include: {
        attributes: {
          include: {
            options: true,
          },
          orderBy: {
            displayOrder: "asc",
          },
        },
        _count: {
          select: {
            products: {
              where: { status: "PUBLISHED" },
            },
          },
        },
      },
    });

    if (!category) {
      return createResponse(res, 404, null, "Category not found");
    }

    // Scenario 1: Category has direct products
    if (category._count.products > 0) {
      const products = await prisma.product.findMany({
        where: {
          categoryId: category.id,
          status: "PUBLISHED",
        },
        select: {
          id: true,
          name: true,
          slug: true,
          description: true,
          brand: true,
          basePrice: true,
          images: {
            where: { isThumbnail: true },
            take: 1,
            select: {
              url: true,
            },
          },
          variants: {
            where: { status: "ACTIVE" },
            take: 1,
            orderBy: { price: "asc" },
            select: {
              price: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
      });

      const formattedProducts = products.map((product) => ({
        id: product.id,
        name: product.name,
        slug: product.slug,
        description: product.description,
        brand: product.brand,
        basePrice: product.basePrice,
        thumbnail: product.images[0]?.url,
        minPrice: product.variants[0]?.price || product.basePrice,
      }));

      const attributes = category.attributes.map((attr) => ({
        id: attr.id,
        name: attr.name,
        isFilterable: attr.isFilterable,
        options: attr.options.map((opt) => ({
          id: opt.id,
          value: opt.value,
        })),
      }));

      return createResponse(
        res,
        200,
        {
          type: "PRODUCTS_WITH_ATTRIBUTES",
          products: formattedProducts,
          attributes,
          category: {
            id: category.id,
            name: category.name,
            slug: category.slug,
          },
        },
        null,
        "Products with attributes fetched successfully"
      );
    }

    // Scenario 2: No direct products - get child categories and their products
    const childCategories = await prisma.category.findMany({
      where: {
        parentId: category.id,
      },
      include: {
        _count: {
          select: {
            products: {
              where: { status: "PUBLISHED" },
            },
          },
        },
        children: {
          select: {
            id: true,
            name: true,
            slug: true,
            _count: {
              select: {
                products: {
                  where: { status: "PUBLISHED" },
                },
              },
            },
          },
        },
      },
    });

    // Get all category IDs that have products (children and grandchildren)
    const productiveCategoryIds = [
      ...childCategories.filter((c) => c._count.products > 0).map((c) => c.id),
      ...childCategories.flatMap((c) =>
        c.children.filter((gc) => gc._count.products > 0).map((gc) => gc.id)
      ),
    ];

    if (productiveCategoryIds.length === 0) {
      return createResponse(
        res,
        200,
        {
          type: "NO_PRODUCTS",
          message: "No products found in this category or its subcategories",
        },
        null,
        "No products available"
      );
    }

    // Fetch products from all productive subcategories
    const products = await prisma.product.findMany({
      where: {
        categoryId: { in: productiveCategoryIds },
        status: "PUBLISHED",
      },
      select: {
        id: true,
        name: true,
        slug: true,
        description: true,
        brand: true,
        basePrice: true,
        images: {
          where: { isThumbnail: true },
          take: 1,
          select: {
            url: true,
          },
        },
        variants: {
          where: { status: "ACTIVE" },
          take: 1,
          orderBy: { price: "asc" },
          select: {
            price: true,
          },
        },
        category: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    const formattedProducts = products.map((product) => ({
      id: product.id,
      name: product.name,
      slug: product.slug,
      description: product.description,
      brand: product.brand,
      basePrice: product.basePrice,
      thumbnail: product.images[0]?.url,
      minPrice: product.variants[0]?.price || product.basePrice,
      category: product.category,
    }));

    // Format child categories for sidebar
    const sidebarCategories = childCategories.map((category) => ({
      id: category.id,
      name: category.name,
      slug: category.slug,
      hasProducts: category._count.products > 0,
      children: category.children.map((child) => ({
        id: child.id,
        name: child.name,
        slug: child.slug,
        hasProducts: child._count.products > 0,
      })),
    }));

    return createResponse(
      res,
      200,
      {
        type: "PRODUCTS_WITH_SUBCATEGORIES",
        products: formattedProducts,
        categories: sidebarCategories,
        parentCategory: {
          id: category.id,
          name: category.name,
          slug: category.slug,
        },
      },
      null,
      "Products with subcategories fetched successfully"
    );
  } catch (error) {
    console.error("Get Products Error:", error);
    return createResponse(
      res,
      500,
      null,
      error instanceof Error ? error.message : "Internal server error"
    );
  }
};
export const getProductById: RequestHandler = async (req, res) => {
  try {
    const { productId } = req.params;
    const { attributeId, optionId } = req.query; // Get query params for selected attribute/option

    if (!productId || isNaN(parseInt(productId))) {
      return createResponse(
        res,
        400,
        null,
        "Valid productId parameter is required"
      );
    }

    // Parse query params if provided
    const parsedAttributeId = attributeId
      ? parseInt(attributeId as string)
      : null;
    const parsedOptionId = optionId ? parseInt(optionId as string) : null;

    // Fetch the product with images, category attributes, and variant images
    const productDetailsDB = await prisma.product.findUnique({
      where: {
        id: parseInt(productId),
        status: "PUBLISHED",
      },
      select: {
        id: true,
        name: true,
        slug: true,
        description: true,
        brand: true,
        basePrice: true,
        images: {
          select: {
            id: true,
            url: true,
            altText: true,
            isThumbnail: true,
            order: true,
          },
          orderBy: {
            order: "asc",
          },
        },
        category: {
          select: {
            id: true,
            name: true,
            slug: true,
            attributes: {
              select: {
                id: true,
                name: true,
                isFilterable: true,
                displayOrder: true,
                options: {
                  select: {
                    id: true,
                    value: true,
                    active: true,
                  },
                  where: {
                    active: true,
                  },
                },
              },
              orderBy: {
                displayOrder: "asc",
              },
            },
          },
        },
        variants: {
          where: {
            status: "ACTIVE",
          },
          select: {
            id: true,
            sku: true,
            price: true,
            stock: true,
            attributes: {
              select: {
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
              // Include variant images
              select: {
                id: true,
                url: true,
                order: true,
              },
              orderBy: {
                order: "asc",
              },
            },
          },
        },
      },
    });

    if (!productDetailsDB) {
      return createResponse(
        res,
        404,
        null,
        "Product not found or not published"
      );
    }

    // Find the selected variant if attributeId and optionId are provided
    let selectedVariant = null;
    if (parsedAttributeId && parsedOptionId) {
      selectedVariant = productDetailsDB.variants.find((variant) =>
        variant.attributes.some(
          (attr) =>
            attr.attribute.id === parsedAttributeId &&
            attr.option.id === parsedOptionId
        )
      );
    }

    // Format the response
    const productDetails = {
      id: productDetailsDB.id,
      name: productDetailsDB.name,
      slug: productDetailsDB.slug,
      description: productDetailsDB.description,
      brand: productDetailsDB.brand,
      basePrice: productDetailsDB.basePrice,
      images: selectedVariant
        ? selectedVariant.images.map((image) => ({
            id: image.id,
            url: image.url,
            altText: null, // VariantImage has no altText in schema
            isThumbnail: image.order === 0, // Assume first image is thumbnail
            order: image.order,
          }))
        : productDetailsDB.images.map((image) => ({
            id: image.id,
            url: image.url,
            altText: image.altText,
            isThumbnail: image.isThumbnail,
            order: image.order,
          })),
      attributes: productDetailsDB.category.attributes.map((attr) => ({
        id: attr.id,
        name: attr.name,
        isFilterable: attr.isFilterable,
        displayOrder: attr.displayOrder,
        options: attr.options.map((opt) => ({
          id: opt.id,
          value: opt.value,
          active: opt.active,
        })),
      })),
      variants: productDetailsDB.variants.map((variant) => ({
        id: variant.id,
        sku: variant.sku,
        price: variant.price,
        stock: variant.stock,
        attributes: variant.attributes.map((va) => ({
          attributeId: va.attribute.id,
          attributeName: va.attribute.name,
          optionId: va.option.id,
          optionValue: va.option.value,
        })),
        images: variant.images.map((image) => ({
          id: image.id,
          url: image.url,
          altText: null,
          isThumbnail: image.order === 0,
          order: image.order,
        })),
      })),
      category: {
        id: productDetailsDB.category.id,
        name: productDetailsDB.category.name,
        slug: productDetailsDB.category.slug,
      },
      selectedVariant: selectedVariant
        ? {
            id: selectedVariant.id,
            price: selectedVariant.price,
            sku: selectedVariant.sku,
            stock: selectedVariant.stock,
            attributes: selectedVariant.attributes.map((va) => ({
              attributeId: va.attribute.id,
              attributeName: va.attribute.name,
              optionId: va.option.id,
              optionValue: va.option.value,
            })),
          }
        : null,
    };

    return createResponse(
      res,
      200,
      productDetails,
      null,
      "Product details fetched successfully"
    );
  } catch (error) {
    console.error("Get Product By ID Error:", error);
    return createResponse(
      res,
      500,
      null,
      error instanceof Error ? error.message : "Internal server error"
    );
  }
};
export const productsController = {
  getCategoryProducts,
  getProductById,
};
