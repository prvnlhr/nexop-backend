import { RequestHandler } from "express";
import { createResponse } from "../../utils/apiResponseUtils";
import prisma from "../../db/prisma";
import { CreateAttributePayload } from "../../types/attributeTypes";

const createAttribute: RequestHandler = async (req, res) => {
  try {
    // 1. Parse and validate request body
    const payload: CreateAttributePayload = req.body;
    const { attributeData, attributeOptions } = payload;

    if (!attributeData || !attributeOptions) {
      return createResponse(
        res,
        400,
        null,
        "Attribute data and options are required"
      );
    }

    const {
      name,
      categoryId,
      isFilterable = true,
      displayOrder = 0,
    } = attributeData;

    // Validate required fields
    const requiredFields = { name, categoryId };
    const missingFields = Object.entries(requiredFields)
      .filter(([, value]) => !value)
      .map(([key]) => key);

    if (missingFields.length > 0) {
      return createResponse(
        res,
        400,
        null,
        `Missing required fields: ${missingFields.join(", ")}`
      );
    }

    if (!attributeOptions.length) {
      return createResponse(
        res,
        400,
        null,
        "At least one attribute option is required"
      );
    }

    // Verify category exists
    const category = await prisma.category.findUnique({
      where: { id: categoryId },
    });

    if (!category) {
      return createResponse(res, 404, null, "Category not found");
    }

    // Create attribute and options in a transaction
    const attribute = await prisma.$transaction(async (tx) => {
      // Create attribute
      const newAttribute = await tx.attribute.create({
        data: {
          name,
          categoryId,
          isFilterable,
          displayOrder,
        },
      });

      // Create attribute options
      await tx.attributeOption.createMany({
        data: attributeOptions.map((value) => ({
          value,
          attributeId: newAttribute.id,
        })),
      });

      return newAttribute;
    });

    // Fetch the created attribute with its options
    const createdAttribute = await prisma.attribute.findUnique({
      where: { id: attribute.id },
      include: { options: true },
    });

    // Return success response
    createResponse(
      res,
      201,
      {
        success: true,
        data: createdAttribute,
      },
      null,
      "Attribute created successfully"
    );
  } catch (error) {
    console.error("Attribute creation error:", error);
    createResponse(
      res,
      500,
      null,
      error instanceof Error ? error.message : "Internal server error"
    );
  }
};

const getAllAttributes: RequestHandler = async (req, res) => {
  try {
    // Get query parameters for filtering (optional)
    const { categoryId, isFilterable } = req.query;

    // Build where clause based on query params
    const where: any = {};
    if (categoryId) where.categoryId = Number(categoryId);
    if (isFilterable !== undefined)
      where.isFilterable = isFilterable === "true";

    // Fetch attributes with category and options count
    const dbAttributes = await prisma.attribute.findMany({
      where,
      select: {
        id: true,
        name: true,
        isFilterable: true,
        displayOrder: true,
        category: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
        _count: {
          select: {
            options: true,
          },
        },
      },
      orderBy: [{ displayOrder: "asc" }, { name: "asc" }],
    });

    // Transform the data to flatten the structure
    const attributes = dbAttributes.map((attr) => ({
      id: attr.id,
      name: attr.name,
      isFilterable: attr.isFilterable,
      displayOrder: attr.displayOrder,
      category: attr.category,
      optionsCount: attr._count.options,
    }));

    createResponse(
      res,
      200,
      attributes,
      null,
      "Attributes fetched successfully"
    );
  } catch (error) {
    console.error("Get Attributes Error:", error);
    createResponse(
      res,
      500,
      null,
      error instanceof Error ? error.message : "Internal server error"
    );
  }
};

const getAttributesByCategory: RequestHandler = async (req, res) => {
  try {
    const { categoryId } = req.params;

    // Validate categoryId
    if (!categoryId || isNaN(parseInt(categoryId))) {
      return createResponse(res, 400, null, "Valid categoryId is required");
    }

    // Fetch attributes with their options
    const attributes = await prisma.attribute.findMany({
      where: {
        categoryId: parseInt(categoryId),
      },
      include: {
        options: {
          select: {
            id: true,
            value: true,
            createdAt: true,
          },
        },
      },
      orderBy: {
        displayOrder: "asc",
      },
    });

    createResponse(
      res,
      200,
      attributes,
      null,
      "Attributes fetched successfully"
    );
  } catch (error) {
    console.error("Get Attributes Error:", error);
    createResponse(
      res,
      500,
      null,
      error instanceof Error ? error.message : "Internal server error"
    );
  }
};

const getAttributeById: RequestHandler = async (req, res) => {
  try {
    const { attributeId } = req.params;

    // Validate attributeId
    if (!attributeId || isNaN(parseInt(attributeId))) {
      return createResponse(res, 400, null, "Valid attributeId is required");
    }

    // Fetch attribute with category and options
    const attribute = await prisma.attribute.findUnique({
      where: { id: parseInt(attributeId) },
      select: {
        id: true,
        name: true,
        isFilterable: true,
        displayOrder: true,
        category: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
        options: {
          select: {
            id: true,
            value: true,
            createdAt: true,
          },
          orderBy: {
            createdAt: "asc",
          },
        },
      },
    });

    if (!attribute) {
      return createResponse(res, 404, null, "Attribute not found");
    }

    // Transform the response to match your exact requirements
    const attributeData = {
      id: attribute.id,
      name: attribute.name,
      category: attribute.category,
      categoryId: attribute.category.id,
      options: attribute.options,
      // Include additional fields if needed
      isFilterable: attribute.isFilterable,
      displayOrder: attribute.displayOrder,
    };

    createResponse(
      res,
      200,
      attributeData,
      null,
      "Attribute details fetched successfully"
    );
  } catch (error) {
    console.error("Get Attribute by ID Error:", error);
    createResponse(
      res,
      500,
      null,
      error instanceof Error ? error.message : "Internal server error"
    );
  }
};

const updateAttribute: RequestHandler = async (req, res) => {
  try {
    const { attributeId } = req.params;
    const { name, options } = req.body;

    // Validate attributeId
    if (!attributeId || isNaN(parseInt(attributeId))) {
      return createResponse(res, 400, null, "Valid attributeId is required");
    }

    // Validate options
    if (!options || !Array.isArray(options) || options.length === 0) {
      return createResponse(
        res,
        400,
        null,
        "Non-empty options array is required"
      );
    }

    // Transaction for all operations
    const result = await prisma.$transaction(async (tx) => {
      // 1. Update attribute name if provided
      if (name) {
        await tx.attribute.update({
          where: { id: parseInt(attributeId) },
          data: { name },
        });
      }

      // 2. Get existing active options
      const existingOptions = await tx.attributeOption.findMany({
        where: {
          attributeId: parseInt(attributeId),
          active: true,
        },
      });

      // 3. Identify existing option values
      const existingOptionValues = new Set(
        existingOptions.map((opt) => opt.value)
      );

      // 4. Handle options not in the new options array (edit mode)
      if (name) {
        const newOptionValues = new Set(options);
        const optionsToProcess = existingOptions.filter(
          (option) => !newOptionValues.has(option.value)
        );

        await Promise.all(
          optionsToProcess.map(async (option) => {
            // Check if option is referenced in VariantAttribute
            const isUsed = await tx.variantAttribute.findFirst({
              where: { optionId: option.id },
            });

            if (isUsed) {
              // Mark as inactive if referenced
              await tx.attributeOption.update({
                where: { id: option.id },
                data: { active: false },
              });
            } else {
              // Delete if unreferenced
              await tx.attributeOption.delete({
                where: { id: option.id },
              });
            }
          })
        );
      }

      // 5. Create new options that don't exist
      const optionsToCreate = options.filter(
        (option: string) => !existingOptionValues.has(option)
      );

      await Promise.all(
        optionsToCreate.map((option: string) =>
          tx.attributeOption.create({
            data: {
              value: option,
              attributeId: parseInt(attributeId),
              active: true,
            },
          })
        )
      );

      // 6. Return updated attribute with active options
      return await tx.attribute.findUnique({
        where: { id: parseInt(attributeId) },
        include: {
          options: {
            where: { active: true },
            select: {
              id: true,
              value: true,
              createdAt: true,
            },
            orderBy: {
              createdAt: "asc",
            },
          },
        },
      });
    });

    createResponse(
      res,
      200,
      {
        success: true,
        data: result,
      },
      null,
      "Attribute options updated successfully"
    );
  } catch (error) {
    console.error("Update Options Error:", error);
    createResponse(
      res,
      500,
      null,
      error instanceof Error ? error.message : "Internal server error"
    );
  }
};

export const attributeController = {
  createAttribute,
  getAllAttributes,
  getAttributesByCategory,
  getAttributeById,
  updateAttribute,
};
