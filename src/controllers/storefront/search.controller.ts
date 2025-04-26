// @ts-nocheck
import { RequestHandler } from "express";
import { Prisma } from "@prisma/client";
import prisma from "../../db/prisma";
import { createResponse } from "../../utils/apiResponseUtils";

// Database model types
interface Category {
  id: number;
  name: string;
  slug: string;
}

interface Product {
  id: number;
  name: string;
  slug: string | null;
  images: ProductImage[];
}

interface ProductImage {
  url: string;
  isThumbnail: boolean;
}

interface Variant {
  id: number;
  name: string;
  slug: string;
  price: number;
  status: "ACTIVE" | "INACTIVE" | "OUT_OF_STOCK";
  productId: number;
  images: VariantImage[];
  product: Product & { category: Category };
  attributes: VariantAttribute[];
}

interface VariantImage {
  url: string;
  order: number;
}

interface VariantAttribute {
  attribute: Attribute;
  option: AttributeOption;
}

interface Attribute {
  id: number;
  name: string;
}

interface AttributeOption {
  id: number;
  value: string;
}

interface SearchResult {
  categories: Category[];
  products: {
    id: number;
    name: string;
    price: number;
    slug: string;
    image?: string;
    product: {
      id: number;
      name: string;
      slug: string;
      image?: string;
      category: Category;
    };
    attributes: {
      attribute: {
        id: number;
        name: string;
      };
      option: {
        id: number;
        value: string;
      };
    }[];
  }[];
}

export const searchProducts: RequestHandler = async (req, res) => {
  try {
    const { q } = req.query;

    if (!q || typeof q !== "string") {
      return createResponse(res, 400, null, "Search query is required");
    }

    console.log(`\n=== Processing search query: "${q}" ===`);

    // Step 1: Tokenize query (sorted by length, longest first)
    const tokens = tokenizeQuery(q);
    console.log("Search tokens:", tokens);

    // Step 2: Find matching categories (including singular/plural)
    const categories = await findMatchingCategories(tokens);
    console.log(
      "Matched categories:",
      categories.map((c) => c.name)
    );

    // Step 3: Find matching products
    let products: SearchResult["products"] = [];

    // First try exact/partial name matches
    products = await findVariantNameMatches(tokens);

    // If no name matches, try attribute option matches
    if (products.length === 0) {
      products = await findVariantAttributeMatches(tokens);
    }

    const result: SearchResult = {
      categories,
      products,
    };

    return createResponse(
      res,
      200,
      result,
      null,
      "Search results fetched successfully"
    );
  } catch (error: unknown) {
    console.error("Search Error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";
    return createResponse(res, 500, null, errorMessage);
  }
};

function tokenizeQuery(query: string): string[] {
  const normalized = query
    .toLowerCase()
    .replace(/[^a-z0-9\s|]/gi, " ")
    .trim()
    .replace(/\s+/g, " ");

  const tokens = normalized.split(/[ ,|]+/).filter((t) => t.length >= 2);
  const phrases: string[] = [];

  for (let i = 0; i < tokens.length; i++) {
    for (let j = i + 1; j <= Math.min(i + 3, tokens.length); j++) {
      phrases.push(tokens.slice(i, j).join(" "));
    }
  }

  return [...new Set([normalized, ...phrases, ...tokens])].sort(
    (a, b) => b.length - a.length
  );
}

async function findMatchingCategories(tokens: string[]): Promise<Category[]> {
  if (tokens.length === 0) return [];

  return await prisma.category.findMany({
    where: {
      OR: [
        ...tokens.map((token) => ({
          name: { equals: token, mode: "insensitive" as Prisma.QueryMode },
        })),
        ...tokens.map((token) => ({
          name: {
            equals: token + "s",
            mode: "insensitive" as Prisma.QueryMode,
          },
        })),
        ...tokens.map((token) => ({
          name: {
            equals: token.replace(/s$/, ""),
            mode: "insensitive" as Prisma.QueryMode,
          },
        })),
      ],
    },
    select: {
      id: true,
      name: true,
      slug: true,
    },
    take: 5,
  });
}

async function findVariantNameMatches(
  tokens: string[]
): Promise<SearchResult["products"]> {
  if (tokens.length === 0) return [];

  // Try exact matches first
  const exactMatches = await prisma.variant.findMany({
    where: {
      status: "ACTIVE",
      name: { in: tokens, mode: "insensitive" as Prisma.QueryMode },
    },
    include: {
      product: {
        include: {
          category: true,
          images: {
            where: { isThumbnail: true },
            take: 1,
          },
        },
      },
      images: {
        orderBy: { order: "asc" },
        take: 1,
      },
      attributes: {
        include: {
          attribute: true,
          option: true,
        },
      },
    },
    take: 20,
  });

  if (exactMatches.length > 0) {
    return exactMatches.map(variantToResult);
  }

  // Try partial matches
  for (const token of tokens) {
    const partialMatches = await prisma.variant.findMany({
      where: {
        status: "ACTIVE",
        name: { contains: token, mode: "insensitive" as Prisma.QueryMode },
      },
      include: {
        product: {
          include: {
            category: true,
            images: {
              where: { isThumbnail: true },
              take: 1,
            },
          },
        },
        images: {
          orderBy: { order: "asc" },
          take: 1,
        },
        attributes: {
          include: {
            attribute: true,
            option: true,
          },
        },
      },
      take: 20,
    });

    if (partialMatches.length > 0) {
      return partialMatches.map(variantToResult);
    }
  }

  return [];
}

async function findVariantAttributeMatches(
  tokens: string[]
): Promise<SearchResult["products"]> {
  if (tokens.length === 0) return [];

  const validOptions = await prisma.attributeOption.findMany({
    where: {
      value: {
        in: tokens,
        mode: "insensitive" as Prisma.QueryMode,
      },
    },
    select: {
      id: true,
      value: true,
      attribute: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  if (validOptions.length === 0) return [];

  const sortedOptions = [...validOptions].sort(
    (a, b) => b.value.length - a.value.length
  );

  for (const option of sortedOptions) {
    const matches = await prisma.variant.findMany({
      where: {
        status: "ACTIVE",
        attributes: {
          some: {
            optionId: option.id,
          },
        },
      },
      include: {
        product: {
          include: {
            category: true,
            images: {
              where: { isThumbnail: true },
              take: 1,
            },
          },
        },
        attributes: {
          include: {
            attribute: true,
            option: true,
          },
        },
        images: {
          orderBy: { order: "asc" },
          take: 1,
        },
      },
      take: 20,
    });

    if (matches.length > 0) {
      return matches.map(variantToResult);
    }
  }

  return [];
}

function variantToResult(
  variant: Variant & {
    images: VariantImage[];
    product: Product & {
      category: Category;
      images: ProductImage[];
    };
    attributes: {
      attribute: Attribute;
      option: AttributeOption;
    }[];
  }
): SearchResult["products"][number] {
  // Handle nullable product.slug
  if (!variant.product.slug) {
    throw new Error(
      `Product slug is missing for product ID ${variant.product.id}`
    );
  }

  return {
    id: variant.id,
    name: variant.name,
    price: variant.price,
    slug: variant.slug,
    image: variant.images[0]?.url || variant.product.images[0]?.url,
    product: {
      id: variant.product.id,
      name: variant.product.name,
      slug: variant.product.slug,
      image: variant.product.images[0]?.url,
      category: variant.product.category,
    },
    attributes: variant.attributes.map((attr) => ({
      attribute: {
        id: attr.attribute.id,
        name: attr.attribute.name,
      },
      option: {
        id: attr.option.id,
        value: attr.option.value,
      },
    })),
  };
}

export const searchController = {
  searchProducts,
};
