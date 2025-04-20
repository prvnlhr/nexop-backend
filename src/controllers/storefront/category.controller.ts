import { RequestHandler } from "express";
import { createResponse } from "../../utils/apiResponseUtils";
import prisma from "../../db/prisma";

const getAllCategories: RequestHandler = async (req, res) => {
  try {
    const categoryId = req.query.categoryId as string | undefined;

    // Fetch categories with explicit typing
    const categories = await prisma.category.findMany({
      where: categoryId ? { id: parseInt(categoryId) } : { parentId: null },
      include: {
        children: {
          include: {
            children: true,
          },
        },
      },
      orderBy: { name: "asc" },
    });

    // Type-safe transformation
    const transformedCategories = categories.map((cat: any) => ({
      id: cat.id,
      name: cat.name,
      slug: cat.slug,
      parentId: cat.parentId,
      children: cat.children.map((child: any) => ({
        id: child.id,
        name: child.name,
        slug: child.slug,
        parentId: child.parentId,
        children: child.children.map((grandChild: any) => ({
          id: grandChild.id,
          name: grandChild.name,
          slug: grandChild.slug,
          parentId: grandChild.parentId,
        })),
      })),
    }));

    createResponse(
      res,
      200,
      { categories: transformedCategories },
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

export const categoryController = {
  getAllCategories,
};
