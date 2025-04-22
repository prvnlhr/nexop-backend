import { RequestHandler } from "express";
import prisma from "../../db/prisma";
import { createResponse } from "../../utils/apiResponseUtils";

// TypeScript interfaces for response data
interface FormattedProduct {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  brand: string;
  basePrice: number;
  thumbnail?: string;
  minPrice: number;
  category?: { id: number; name: string; slug: string };
}

interface AttributeResponse {
  id: number;
  name: string;
  isFilterable: boolean;
  options: { id: number; value: string }[];
}

interface CategoryResponse {
  id: number;
  name: string;
  slug: string;
  hasProducts: boolean;
  children?: CategoryResponse[];
}

// Response types for the two cases
interface ProductsWithAttributesResponse {
  type: "PRODUCTS_WITH_ATTRIBUTES";
  products: FormattedProduct[];
  attributes: AttributeResponse[];
  category: { id: number; name: string; slug: string };
}

interface ProductsWithSubcategoriesResponse {
  type: "PRODUCTS_WITH_SUBCATEGORIES";
  products: FormattedProduct[];
  categories: CategoryResponse[];
  parentCategory: { id: number; name: string; slug: string };
}

interface NoProductsResponse {
  type: "NO_PRODUCTS";
  message: string;
}

type GetCategoryProductsResponse =
  | ProductsWithAttributesResponse
  | ProductsWithSubcategoriesResponse
  | NoProductsResponse;

export const getCategoryProducts: RequestHandler = async (req, res) => {
  try {
    const { categorySlug } = req.params;

    if (!categorySlug) {
      return createResponse(
        res,
        400,
        null,
        "categorySlug parameter is required"
      );
    }

    // 1. Find the category by slug
    const category = await prisma.category.findUnique({
      where: { slug: categorySlug },
      include: {
        attributes: {
          include: {
            options: {
              where: { active: true },
              select: { id: true, value: true },
            },
          },
          orderBy: { displayOrder: "asc" },
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

    // Case 1: Category has direct products
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
            select: { url: true },
          },
          variants: {
            where: { status: "ACTIVE" },
            take: 1,
            orderBy: { price: "asc" },
            select: { price: true },
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

      const formattedProducts: FormattedProduct[] = products.map((product) => ({
        id: product.id,
        name: product.name,
        slug: product.slug as string,
        description: product.description,
        brand: product.brand,
        basePrice: product.basePrice,
        thumbnail: product.images[0]?.url,
        minPrice: product.variants[0]?.price || product.basePrice,
        category: product.category!, // Non-null due to schema
      }));

      const attributes: AttributeResponse[] = category.attributes.map(
        (attr) => ({
          id: attr.id,
          name: attr.name,
          isFilterable: attr.isFilterable,
          options: attr.options.map((opt) => ({
            id: opt.id,
            value: opt.value,
          })),
        })
      );

      const response: ProductsWithAttributesResponse = {
        type: "PRODUCTS_WITH_ATTRIBUTES",
        products: formattedProducts,
        attributes,
        category: {
          id: category.id,
          name: category.name,
          slug: category.slug,
        },
      };

      return createResponse(
        res,
        200,
        response,
        null,
        "Products with attributes fetched successfully"
      );
    }

    // Case 2: No direct products - get child categories and their products
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
      const response: NoProductsResponse = {
        type: "NO_PRODUCTS",
        message: "No products found in this category or its subcategories",
      };

      return createResponse(res, 200, response, null, "No products available");
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
          select: { url: true },
        },
        variants: {
          where: { status: "ACTIVE" },
          take: 1,
          orderBy: { price: "asc" },
          select: { price: true },
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

    const formattedProducts: FormattedProduct[] = products.map((product) => ({
      id: product.id,
      name: product.name,
      slug: product.slug as string,
      description: product.description,
      brand: product.brand,
      basePrice: product.basePrice,
      thumbnail: product.images[0]?.url,
      minPrice: product.variants[0]?.price || product.basePrice,
      category: product.category!,
    }));

    // Format child categories for sidebar
    const sidebarCategories: CategoryResponse[] = childCategories.map(
      (category) => ({
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
      })
    );

    const response: ProductsWithSubcategoriesResponse = {
      type: "PRODUCTS_WITH_SUBCATEGORIES",
      products: formattedProducts,
      categories: sidebarCategories,
      parentCategory: {
        id: category.id,
        name: category.name,
        slug: category.slug,
      },
    };

    return createResponse(
      res,
      200,
      response,
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

interface ProductDetailsResponse {
  product: {
    id: number;
    name: string;
    slug: string;
    description: string | null;
    brand: string;
    price: number;
    category: { id: number; name: string; slug: string };
    images: { url: string; isThumbnail?: boolean }[];
  };
  attributes: {
    id: number;
    name: string;
    options: { id: number; value: string; active: boolean }[];
  }[];
}

export const getProductDetails: RequestHandler = async (req, res) => {
  try {
    const { categorySlug, productSlug } = req.params;
    const queryParams = req.query as Record<string, string>;

    if (!categorySlug || !productSlug) {
      return createResponse(
        res,
        400,
        null,
        "categorySlug and productSlug are required"
      );
    }
    // console.log("1: Params:", { categorySlug, productSlug, queryParams });

    // Fetch the product with details
    const product = await prisma.product.findFirst({
      where: {
        slug: productSlug,
        status: "PUBLISHED",
        category: { slug: categorySlug },
      },
      select: {
        id: true,
        name: true,
        slug: true,
        description: true,
        brand: true,
        basePrice: true,
        category: {
          select: { id: true, name: true, slug: true },
        },
        images: {
          select: { url: true, isThumbnail: true },
          orderBy: { isThumbnail: "desc" },
        },
        variants: {
          where: { status: "ACTIVE", stock: { gt: 0 } },
          select: {
            id: true,
            name: true,
            price: true,
            images: {
              select: { url: true },
              orderBy: { order: "asc" },
            },
            attributes: {
              select: {
                attributeId: true,
                optionId: true,
              },
            },
          },
        },
      },
    });

    // console.log("2: Product:", product ? product.id : "Not found");

    if (!product) {
      return createResponse(
        res,
        404,
        null,
        "Product not found or category mismatch"
      );
    }

    // console.log("3: Category ID:", product.category.id);

    // Fetch attributes and options for the product's category
    const attributes = await prisma.attribute.findMany({
      where: { categoryId: product.category.id },
      select: {
        id: true,
        name: true,
        options: {
          where: { active: true },
          select: { id: true, value: true, active: true },
        },
      },
      orderBy: { displayOrder: "asc" },
    });

    // Get relevant optionIds from product variants
    const relevantOptionIds = new Set<number>();
    product.variants.forEach((variant) => {
      variant.attributes.forEach((attr) => {
        relevantOptionIds.add(attr.optionId);
      });
    });

    // console.log("4: Relevant optionIds:", Array.from(relevantOptionIds));

    // Filter attributes.options to include only relevant options
    const filteredAttributes = attributes.map((attr) => ({
      id: attr.id,
      name: attr.name,
      options: attr.options.filter((opt) => relevantOptionIds.has(opt.id)),
    }));

    // console.log(
    //   "5: Filtered Attributes:",
    //   filteredAttributes.map((attr) => ({
    //     id: attr.id,
    //     name: attr.name,
    //     options: attr.options.map((opt) => ({ id: opt.id, value: opt.value })),
    //   }))
    // );

    // Parse and validate query parameters (e.g., attr_1=1)
    let selectedVariant: (typeof product.variants)[number] | undefined;
    const optionFilters: { attributeId: number; optionId: number }[] = [];
    const invalidParams: string[] = [];
    for (const [key, value] of Object.entries(queryParams)) {
      if (!key.startsWith("attr_")) continue;
      const attributeId = parseInt(key.replace("attr_", ""), 10);
      const optionId = parseInt(value, 10);
      if (isNaN(attributeId) || isNaN(optionId)) {
        // console.log("6: Invalid query param:", { key, value });
        invalidParams.push(`${key}=${value}`);
        continue;
      }
      const attribute = attributes.find((attr) => attr.id === attributeId);
      // console.log("7: Checking attributeId:", attributeId, "Found:", attribute);
      if (!attribute) {
        console.log("8: Invalid attribute ID:", attributeId);
        invalidParams.push(`attr_${attributeId}`);
        continue;
      }
      if (!attribute.options.some((opt) => opt.id === optionId)) {
        // console.log(
        //   "9: Invalid option ID:",
        //   optionId,
        //   "for attribute:",
        //   attributeId
        // );
        invalidParams.push(`attr_${attributeId}=${optionId}`);
        continue;
      }
      optionFilters.push({ attributeId, optionId });
    }

    // console.log(
    //   "10: Option filters:",
    //   optionFilters,
    //   "Invalid params:",
    //   invalidParams
    // );

    // Find matching variant
    if (optionFilters.length > 0) {
      selectedVariant = product.variants.find((variant) =>
        optionFilters.every(({ attributeId, optionId }) =>
          variant.attributes.some(
            (attr) =>
              attr.attributeId === attributeId && attr.optionId === optionId
          )
        )
      );
    }

    // console.log(
    //   "11: Selected variant:",
    //   selectedVariant ? selectedVariant.id : "None"
    // );

    // Merge variant data into product
    const mergedProduct = {
      id: product.id,
      name: selectedVariant ? selectedVariant.name : product.name,
      slug: product.slug as string,
      description: product.description,
      brand: product.brand,
      price: selectedVariant ? selectedVariant.price : product.basePrice,
      category: product.category,
      images: selectedVariant ? selectedVariant.images : product.images,
    };

    // Format the response
    const response: ProductDetailsResponse = {
      product: mergedProduct,
      attributes: filteredAttributes,
    };

    // console.log("12: Response prepared");

    return createResponse(
      res,
      200,
      response,
      null,
      invalidParams.length > 0
        ? `Product details fetched, but ignored invalid query parameters: ${invalidParams.join(
            ", "
          )}`
        : "Product details fetched successfully"
    );
  } catch (error) {
    console.error("Get Product Details Error:", error);
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
  getProductDetails,
};
