import { RequestHandler } from "express";
import { createResponse } from "../../utils/apiResponseUtils";
import prisma from "../../db/prisma";
import { generateUniqueSlug } from "../../utils/slugUtils";

interface CreateProductRequest {
  name: string;
  description?: string;
  brand: string;
  basePrice: number;
  categoryId: number;
  images: {
    url: string;
    publicId?: string; // Added for Cloudinary
    isThumbnail?: boolean;
    order?: number;
  }[];
}

const createProduct: RequestHandler = async (req, res) => {
  try {
    // 1. Parse and validate request body
    const productData: CreateProductRequest = req.body;

    if (
      !productData.name ||
      !productData.brand ||
      !productData.categoryId ||
      productData.basePrice == null
    ) {
      return createResponse(
        res,
        400,
        null,
        "Product name, brand, category, and base price are required"
      );
    }

    // 2. Check if category exists
    const categoryExists = await prisma.category.findUnique({
      where: { id: productData.categoryId },
    });

    if (!categoryExists) {
      return createResponse(res, 404, null, "Category not found");
    }

    // 3. Generate unique slug
    const slug = await generateUniqueSlug(productData.name, "Product");

    // 4. Create product in database with transaction
    const newProduct = await prisma.$transaction(async (tx) => {
      // Create the product
      const product = await tx.product.create({
        data: {
          name: productData.name,
          slug, // Set the generated slug
          description: productData.description || "",
          brand: productData.brand,
          basePrice: productData.basePrice,
          status: "DRAFT",
          categoryId: productData.categoryId,
        },
      });

      // Create product images
      if (productData.images && productData.images.length > 0) {
        await tx.productImage.createMany({
          data: productData.images.map((img) => ({
            url: img.url,
            // publicId: img.publicId, // Store Cloudinary publicId
            isThumbnail: img.isThumbnail || false,
            order: img.order || 0,
            productId: product.id,
          })),
        });
      }

      // Return the complete product with relations
      return await tx.product.findUnique({
        where: { id: product.id },
        include: {
          images: true,
          category: true,
        },
      });
    });

    // 5. Return success response
    createResponse(
      res,
      201,
      {
        success: true,
        data: newProduct,
      },
      null,
      "Product created successfully"
    );
  } catch (error) {
    console.error("Create Product Error:", error);
    createResponse(
      res,
      500,
      null,
      error instanceof Error ? error.message : "Internal server error"
    );
  }
};

const getAllProducts: RequestHandler = async (req, res) => {
  try {
    // 1. Fetch all products with category and images
    const products = await prisma.product.findMany({
      include: {
        category: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
        images: {
          orderBy: {
            order: "asc",
          },
          select: {
            id: true,
            url: true,
            altText: true,
            isThumbnail: true,
            order: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // 2. Return success response
    createResponse(res, 200, products, null, "Products fetched successfully");
  } catch (error) {
    console.error("Get Products Error:", error);
    createResponse(
      res,
      500,
      null,
      error instanceof Error ? error.message : "Internal server error"
    );
  }
};

const getProductById: RequestHandler = async (req, res) => {
  try {
    const { productId } = req.params;

    // Validate productId
    if (!productId || isNaN(parseInt(productId))) {
      return createResponse(res, 400, null, "Valid productId is required");
    }

    // Fetch product with related data
    const product = await prisma.product.findUnique({
      where: {
        id: parseInt(productId),
      },
      include: {
        category: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
        images: {
          orderBy: {
            order: "asc",
          },
          select: {
            id: true,
            url: true,
            altText: true,
            isThumbnail: true,
            order: true,
          },
        },
        variants: {
          include: {
            attributes: {
              include: {
                attribute: true,
                option: true,
              },
            },
          },
        },
      },
    });

    if (!product) {
      return createResponse(res, 404, null, "Product not found");
    }

    createResponse(res, 200, product, null, "Product fetched successfully");
  } catch (error) {
    console.error("Get Product Error:", error);
    createResponse(
      res,
      500,
      null,
      error instanceof Error ? error.message : "Internal server error"
    );
  }
};

interface UpdateProductData {
  name: string;
  description?: string;
  brand: string;
  basePrice: number;
  categoryId: number;
  newImages?: {
    url: string;
    publicId: string;
    isThumbnail?: boolean;
    order?: number;
  }[];
  removedImageIds?: number[];
}

const updateProduct: RequestHandler = async (req, res) => {
  try {
    const { productId } = req.params;
    const data: UpdateProductData = req.body;

    // Validate productId
    if (!productId || isNaN(parseInt(productId))) {
      return createResponse(res, 400, null, "Valid productId is required");
    }

    // Check if product exists
    const existingProduct = await prisma.product.findUnique({
      where: { id: parseInt(productId) },
      include: { images: true },
    });

    if (!existingProduct) {
      return createResponse(res, 404, null, "Product not found");
    }

    // Check if category exists
    const categoryExists = await prisma.category.findUnique({
      where: { id: data.categoryId },
    });

    if (!categoryExists) {
      return createResponse(res, 404, null, "Category not found");
    }

    // Transaction for atomic operations
    const updatedProduct = await prisma.$transaction(async (tx) => {
      // 1. Delete removed images
      if (data.removedImageIds?.length) {
        await tx.productImage.deleteMany({
          where: {
            id: { in: data.removedImageIds },
            productId: parseInt(productId),
          },
        });
        // Note: Add Cloudinary deletion logic here if needed
      }

      // 2. Add new images (if any)
      if (data.newImages?.length) {
        await tx.productImage.createMany({
          data: data.newImages.map((img) => ({
            url: img.url,
            // publicId: img.publicId,
            isThumbnail: img.isThumbnail || false,
            order: img.order || 0,
            productId: parseInt(productId),
          })),
        });
      }

      // 3. Update product details
      return await tx.product.update({
        where: { id: parseInt(productId) },
        data: {
          name: data.name,
          description: data.description,
          brand: data.brand,
          basePrice: data.basePrice,
          categoryId: data.categoryId,
          updatedAt: new Date(),
        },
        include: {
          category: true,
          images: true,
        },
      });
    });

    createResponse(
      res,
      200,
      {
        success: true,
        data: updatedProduct,
      },
      null,
      "Product updated successfully"
    );
  } catch (error) {
    console.error("Update Product Error:", error);
    createResponse(
      res,
      500,
      null,
      error instanceof Error ? error.message : "Internal server error"
    );
  }
};

export const productController = {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
};
