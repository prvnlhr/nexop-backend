import { RequestHandler } from "express";
import prisma from "../../db/prisma";
import { createResponse } from "../../utils/apiResponseUtils";

// TypeScript interfaces for Prisma query results
interface Product {
  id: number;
  name: string;
  slug: string | null;
  description: string | null;
  brand: string;
  basePrice: number;
  images: { url: string }[];
  variants: Variant[];
  category: { id: number; name: string; slug: string };
}

interface Variant {
  id: number;
  name: string;
  price: number;
  images: { url: string }[];
  attributes: VariantAttribute[];
}

interface VariantAttribute {
  attributeId: number;
  optionId: number;
}

// TypeScript interfaces for response data
interface FormattedProduct {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  brand: string;
  price: number;
  image?: string;
  variantAttributes?: { attributeId: number; optionId: number }[] | null;
  category: { id: number; name: string; slug: string };
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

function parseAndValidateFilters(
  queryParams: Record<string, string | string[]>,
  attributes: { id: number; options: { id: number }[] }[]
): [Map<number, Set<number>>, string[]] {
  const optionFiltersByAttribute = new Map<number, Set<number>>();
  const invalidParams: string[] = [];

  for (const [key, value] of Object.entries(queryParams)) {
    if (!key.startsWith("attr_")) continue;

    const attributeId = parseInt(key.replace("attr_", ""), 10);
    if (isNaN(attributeId)) {
      invalidParams.push(key);
      continue;
    }

    const attribute = attributes.find((attr) => attr.id === attributeId);
    if (!attribute) {
      invalidParams.push(`attr_${attributeId}`);
      continue;
    }

    // Parse option IDs efficiently
    const optionIds = parseOptionIds(value);
    if (optionIds.length === 0) {
      invalidParams.push(`${key}=${value}`);
      continue;
    }

    // Validate against attribute options
    const validOptionIds = validateOptionIds(optionIds, attribute.options);
    if (validOptionIds.length === 0) {
      invalidParams.push(`attr_${attributeId}=${optionIds.join(",")}`);
      continue;
    }

    // Track invalid IDs if any
    if (validOptionIds.length < optionIds.length) {
      const invalidIds = optionIds.filter((id) => !validOptionIds.includes(id));
      invalidParams.push(`attr_${attributeId}=${invalidIds.join(",")}`);
    }

    // Store valid filters
    const existingOptionIds =
      optionFiltersByAttribute.get(attributeId) || new Set<number>();
    validOptionIds.forEach((id) => existingOptionIds.add(id));
    optionFiltersByAttribute.set(attributeId, existingOptionIds);
  }

  return [optionFiltersByAttribute, invalidParams];
}

function parseOptionIds(value: string | string[]): number[] {
  if (Array.isArray(value)) {
    return value.map((v) => parseInt(v, 10)).filter((id) => !isNaN(id));
  }
  if (typeof value === "string" && value.includes(",")) {
    return value
      .split(",")
      .map((v) => parseInt(v.trim(), 10))
      .filter((id) => !isNaN(id));
  }
  return [parseInt(value, 10)].filter((id) => !isNaN(id));
}

function validateOptionIds(
  optionIds: number[],
  validOptions: { id: number }[]
): number[] {
  const validOptionIds = new Set(validOptions.map((opt) => opt.id));
  return optionIds.filter((id) => validOptionIds.has(id));
}

async function fetchProductsWithVariants(
  categoryId: number,
  hasFilters: boolean
): Promise<Product[]> {
  return prisma.product.findMany({
    where: {
      categoryId,
      status: "PUBLISHED",
      ...(hasFilters && {
        variants: {
          some: {
            status: "ACTIVE",
            stock: { gt: 0 },
          },
        },
      }),
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
        where: {
          status: "ACTIVE",
          stock: { gt: 0 },
        },
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
}

async function getFilteredAttributes(
  categoryId: number,
  attributes: {
    id: number;
    name: string;
    isFilterable: boolean;
    options: { id: number; value: string }[];
  }[]
): Promise<AttributeResponse[]> {
  // For performance, we can skip fetching relevant options if we know all are relevant
  // Or implement a more optimized query if needed
  return attributes.map((attr) => ({
    id: attr.id,
    name: attr.name,
    isFilterable: attr.isFilterable,
    options: attr.options.map((opt) => ({ id: opt.id, value: opt.value })),
  }));
}

function formatProductsResponse(
  products: Product[],
  optionFiltersByAttribute: Map<number, Set<number>>
): FormattedProduct[] {
  // No filters case - return base products
  if (optionFiltersByAttribute.size === 0) {
    return products.map((product) => ({
      id: product.id,
      name: product.name,
      slug: product.slug as string,
      description: product.description,
      brand: product.brand,
      price: product.basePrice,
      image: product.images[0]?.url,
      variantAttributes: null,
      category: product.category,
    }));
  }

  // With filters - find matching variants
  const result: FormattedProduct[] = [];

  for (const product of products) {
    const matchingVariants = product.variants.filter((variant) =>
      Array.from(optionFiltersByAttribute.entries()).every(
        ([attributeId, optionIds]) =>
          variant.attributes.some(
            (attr) =>
              attr.attributeId === attributeId && optionIds.has(attr.optionId)
          )
      )
    );

    if (matchingVariants.length > 0) {
      result.push(
        ...matchingVariants.map((variant) => ({
          id: product.id,
          name: variant.name,
          slug: product.slug as string,
          description: product.description,
          brand: product.brand,
          price: variant.price,
          image: variant.images[0]?.url || product.images[0]?.url,
          variantAttributes: variant.attributes.map((attr) => ({
            attributeId: attr.attributeId,
            optionId: attr.optionId,
          })),
          category: product.category,
        }))
      );
    }
  }

  return result;
}

export const getCategoryProducts: RequestHandler = async (req, res) => {
  try {
    const { categorySlug } = req.params;
    const queryParams = req.query as Record<string, string | string[]>;

    if (!categorySlug) {
      return createResponse(
        res,
        400,
        null,
        "categorySlug parameter is required"
      );
    }

    // 1. Find the category by slug with minimal data needed
    const category = await prisma.category.findUnique({
      where: { slug: categorySlug },
      select: {
        id: true,
        name: true,
        slug: true,
        attributes: {
          select: {
            id: true,
            name: true,
            isFilterable: true,
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
      // Parse and validate query parameters in one pass
      const [optionFiltersByAttribute, invalidParams] = parseAndValidateFilters(
        queryParams,
        category.attributes
      );

      // Get all products with variants in a single optimized query
      const [products, filteredAttributes] = await Promise.all([
        fetchProductsWithVariants(
          category.id,
          optionFiltersByAttribute.size > 0
        ),
        getFilteredAttributes(category.id, category.attributes),
      ]);

      // Filter and format products
      const formattedProducts = formatProductsResponse(
        products,
        optionFiltersByAttribute
      );

      const response: ProductsWithAttributesResponse = {
        type: "PRODUCTS_WITH_ATTRIBUTES",
        products: formattedProducts,
        attributes: filteredAttributes,
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
        invalidParams.length > 0
          ? `Products fetched, but ignored invalid query parameters: ${invalidParams.join(
              ", "
            )}`
          : "Products with attributes fetched successfully"
      );
    }

    // |> CASE 2 : No direct products - get child categories and their products
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
      price: product.variants[0]?.price || product.basePrice,
      image: product.images[0]?.url,
      variantAttributes: null,
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

// |> GET PRODCUT DETAILS ----------------------------------------------------------------------------------------------------------------------------
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
    variantId?: number;
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

    if (!product) {
      return createResponse(
        res,
        404,
        null,
        "Product not found or category mismatch"
      );
    }

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

    // Filter attributes.options to include only relevant options
    const filteredAttributes = attributes.map((attr) => ({
      id: attr.id,
      name: attr.name,
      options: attr.options.filter((opt) => relevantOptionIds.has(opt.id)),
    }));

    // Parse and validate query parameters (e.g., attr_1=1)
    let selectedVariant: (typeof product.variants)[number] | undefined;
    const optionFilters: { attributeId: number; optionId: number }[] = [];
    const invalidParams: string[] = [];
    for (const [key, value] of Object.entries(queryParams)) {
      if (!key.startsWith("attr_")) continue;
      const attributeId = parseInt(key.replace("attr_", ""), 10);
      const optionId = parseInt(value, 10);
      if (isNaN(attributeId) || isNaN(optionId)) {
        invalidParams.push(`${key}=${value}`);
        continue;
      }
      const attribute = attributes.find((attr) => attr.id === attributeId);
      if (!attribute) {
        invalidParams.push(`attr_${attributeId}`);
        continue;
      }
      if (!attribute.options.some((opt) => opt.id === optionId)) {
        invalidParams.push(`attr_${attributeId}=${optionId}`);
        continue;
      }
      optionFilters.push({ attributeId, optionId });
    }

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

    // Merge variant data into product
    const mergedProduct = {
      id: product.id,
      name: selectedVariant ? selectedVariant.name : product.name,
      slug: product.slug as string,
      description: product.description,
      brand: product.brand,
      price: selectedVariant ? selectedVariant.price : product.basePrice,
      category: product.category,
      images: selectedVariant
        ? selectedVariant.images.map((img) => ({
            url: img.url,
            isThumbnail: false,
          }))
        : product.images,
      variantId: selectedVariant?.id,
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
