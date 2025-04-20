import { RequestHandler } from "express";
import { createResponse } from "../../utils/apiResponseUtils";
import prisma from "../../db/prisma";

const getAllCategories: RequestHandler = async (req, res) => {
  try {
    // 1. Fetch all categories from database
    const categories = await prisma.category.findMany({
      include: {
        children: {
          select: {
            id: true,
            name: true,
            slug: true,
            parentId: true,
          },
        },
      },
      orderBy: {
        name: "asc",
      },
    });

    // 2. Return success response
    createResponse(
      res,
      200,
      categories, // Wrapped in object to match your pattern
      null,
      "Categories fetched successfully"
    );
  } catch (error) {
    console.error("Get Categories Error:", error);
    createResponse(
      res,
      500,
      null,
      error instanceof Error ? error.message : "Internal server error"
    );
  }
};

const createCategory: RequestHandler = async (req, res) => {
  try {
    // 1. Parse and validate request body
    const { name, parentId } = req.body;

    if (!name) {
      return createResponse(res, 400, null, "Category name is required");
    }

    // 2. Check if category already exists
    const existingCategory = await prisma.category.findFirst({
      where: {
        name,
        parentId: parentId || null,
      },
    });

    if (existingCategory) {
      return createResponse(res, 409, null, "Category already exists");
    }

    // 3. Generate slug (simple implementation)
    const slug = name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

    // 4. Create category in database
    const newCategory = await prisma.category.create({
      data: {
        name,
        parentId: parentId ? parseInt(parentId) : null,
        slug,
      },
      include: {
        parent: true,
      },
    });

    // 5. Return success response
    createResponse(
      res,
      201,
      {
        success: true,
        data: newCategory,
      },
      null,
      "Category created successfully"
    );
  } catch (error) {
    console.error("Create Category Error:", error);
    createResponse(
      res,
      500,
      null,
      error instanceof Error ? error.message : "Internal server error"
    );
  }
};

const getCategoryById: RequestHandler = async (req, res) => {
  try {
    const { categoryId } = req.params;
    console.log("category.controller -> categoryId:", categoryId);

    // Validate ID is a number
    if (isNaN(Number(categoryId))) {
      return createResponse(res, 400, null, "Invalid category ID");
    }

    const category = await prisma.category.findUnique({
      where: { id: Number(categoryId) },
      include: {
        parent: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
        children: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
      },
    });

    if (!category) {
      return createResponse(res, 404, null, "Category not found");
    }

    createResponse(
      res,
      200,
      category,
      null,
      "Category details fetched successfully"
    );
  } catch (error) {
    console.error("Get Category by ID Error:", error);
    createResponse(
      res,
      500,
      null,
      error instanceof Error ? error.message : "Internal server error"
    );
  }
};

const updateCategory: RequestHandler = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const { name, parentId } = req.body;

    // Validate ID is a number
    if (isNaN(Number(categoryId))) {
      return createResponse(res, 400, null, "Invalid category ID");
    }

    // Get current category
    const existingCategory = await prisma.category.findUnique({
      where: { id: Number(categoryId) },
    });

    if (!existingCategory) {
      return createResponse(res, 404, null, "Category not found");
    }

    // Validate required fields
    if (!name) {
      return createResponse(res, 400, null, "Category name is required");
    }

    // Check if name is actually being changed
    const nameChanged = name !== existingCategory.name;

    // Only check for duplicates if name is being changed
    if (nameChanged) {
      const duplicateCategory = await prisma.category.findFirst({
        where: {
          name,
          parentId: parentId || null,
          NOT: { id: Number(categoryId) },
        },
      });

      if (duplicateCategory) {
        return createResponse(
          res,
          409,
          null,
          "Category name already exists under this parent"
        );
      }
    }

    // Prepare update data
    const updateData: {
      name: string;
      slug?: string;
      parentId: number | null;
    } = {
      name,
      parentId: parentId ? Number(parentId) : null,
    };

    // Only update slug if name changed
    if (nameChanged) {
      const baseSlug = name
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");

      // Check if base slug exists (excluding current category)
      const existingWithSlug = await prisma.category.findFirst({
        where: {
          slug: baseSlug,
          NOT: { id: Number(categoryId) },
        },
      });

      // Use base slug if available, otherwise append ID
      updateData.slug = existingWithSlug
        ? `${baseSlug}-${categoryId}`
        : baseSlug;
    }

    // Update category
    const updatedCategory = await prisma.category.update({
      where: { id: Number(categoryId) },
      data: updateData,
      include: {
        parent: true,
        children: true,
      },
    });

    createResponse(
      res,
      200,
      {
        success: true,
        data: updatedCategory,
        changes: {
          nameChanged,
          slugUpdated: nameChanged,
        },
      },
      null,
      "Category updated successfully"
    );
  } catch (error) {
    console.error("Update Category Error:", error);
    createResponse(
      res,
      500,
      null,
      error instanceof Error ? error.message : "Internal server error"
    );
  }
};

export const categoryController = {
  getAllCategories,
  createCategory,
  getCategoryById,
  updateCategory,
};
