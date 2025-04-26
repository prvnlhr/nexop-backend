import prisma from "../db/prisma";

class SearchConfig {
  private categoryTerms: string[] = [];
  private attributeConfig: Record<
    string,
    { type: "text" | "numeric"; values?: string[] }
  > = {};

  async initialize() {
    await this.loadCategories();
    await this.loadAttributes();
  }

  private async loadCategories() {
    const categories = await prisma.category.findMany({
      select: { name: true, slug: true },
    });
    this.categoryTerms = categories.map((c) => c.name.toLowerCase());
  }

  private async loadAttributes() {
    const attributes = await prisma.attribute.findMany({
      include: {
        options: {
          select: { value: true },
          where: { active: true },
        },
      },
    });

    this.attributeConfig = attributes.reduce((acc, attr) => {
      acc[attr.name.toLowerCase()] = {
        type: attr.isFilterable ? "text" : "numeric",
        values: attr.options.map((opt) => opt.value.toLowerCase()),
      };
      return acc;
    }, {} as Record<string, { type: "text" | "numeric"; values?: string[] }>);
  }

  getCategoryTerms() {
    return this.categoryTerms;
  }

  getAttributeConfig() {
    return this.attributeConfig;
  }

  isKnownAttribute(attrName: string) {
    return attrName.toLowerCase() in this.attributeConfig;
  }

  isValidAttributeValue(attrName: string, value: string) {
    const config = this.attributeConfig[attrName.toLowerCase()];
    if (!config) return false;
    if (!config.values) return true; // For numeric attributes
    return config.values.includes(value.toLowerCase());
  }
}

export const searchConfig = new SearchConfig();

// Initialize on app startup
searchConfig.initialize().catch(console.error);
