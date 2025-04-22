import prisma from "../db/prisma";

export async function generateUniqueSlug(
  name: string,
  model: "Product" | "Category"
): Promise<string> {
  // Convert name to a URL-friendly slug
  let baseSlug = name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single
    .slice(0, 200); // Limit length

  if (!baseSlug) {
    baseSlug = model.toLowerCase(); // Fallback: 'product' or 'category'
  }

  let slug = baseSlug;
  let counter = 1;

  // Check for slug uniqueness
  while (true) {
    let existingRecord;
    if (model === "Product") {
      existingRecord = await prisma.product.findUnique({
        where: { slug },
        select: { id: true },
      });
    } else if (model === "Category") {
      existingRecord = await prisma.category.findUnique({
        where: { slug },
        select: { id: true },
      });
    }

    if (!existingRecord) {
      return slug; // Slug is unique
    }

    // Append numeric suffix and try again
    slug = `${baseSlug}-${counter}`;
    counter++;
  }
}
