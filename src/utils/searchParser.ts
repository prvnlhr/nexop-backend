// utils/searchParser.ts

import { searchConfig } from "../services/search.services";

interface ParsedQuery {
  cleanQuery: string;
  possibleCategories: string[];
  attributes: {
    name: string;
    value: string;
  }[];
  priceRange?: {
    min?: number;
    max?: number;
  };
}

export async function parseSearchQuery(query: string): Promise<ParsedQuery> {
  const result: ParsedQuery = {
    cleanQuery: query,
    possibleCategories: [],
    attributes: [],
    priceRange: undefined,
  };

  // Get dynamic config
  const categoryTerms = searchConfig.getCategoryTerms();
  const attributeConfig = searchConfig.getAttributeConfig();

  // Step 1: Extract price range
  result.priceRange = extractPriceRange(query);
  if (result.priceRange) {
    result.cleanQuery = result.cleanQuery
      .replace(/(under|below|less than)\s(\d+)|(\d+)\s?-\s?(\d+)/gi, "")
      .trim();
  }

  // Step 2: Identify possible categories
  result.possibleCategories = categoryTerms.filter((term) =>
    new RegExp(`\\b${term}\\b`, "i").test(result.cleanQuery)
  );

  // Remove category terms from clean query
  result.possibleCategories.forEach((cat) => {
    result.cleanQuery = result.cleanQuery
      .replace(new RegExp(cat, "gi"), "")
      .trim();
  });

  // Step 3: Extract known attributes
  const attributePatterns = Object.keys(attributeConfig).map((attrName) => {
    const config = attributeConfig[attrName];
    if (config.type === "text" && config.values) {
      // For attributes with predefined values (like colors)
      return {
        name: attrName,
        pattern: new RegExp(
          `\\b(${config.values.join("|")})\\b(?:\\s+${attrName})?|` +
            `${attrName}\\s*:\\s*(${config.values.join("|")})`,
          "gi"
        ),
      };
    } else {
      // For numeric attributes (like storage)
      return {
        name: attrName,
        pattern: new RegExp(
          `(\\d+)\\s*(?:${attrName}|${attrName.replace(/\s+/g, "\\s*")})|` +
            `${attrName}\\s*:\\s*(\\d+)`,
          "gi"
        ),
      };
    }
  });

  for (const { name, pattern } of attributePatterns) {
    const matches = [...result.cleanQuery.matchAll(pattern)];
    if (matches.length > 0) {
      matches.forEach((match) => {
        // Extract the value from different match groups
        const value = match[1] || match[2] || match[3];
        if (value && searchConfig.isValidAttributeValue(name, value)) {
          result.attributes.push({
            name,
            value: value.toLowerCase(),
          });
          // Remove matched attribute from clean query
          result.cleanQuery = result.cleanQuery.replace(match[0], "").trim();
        }
      });
    }
  }

  // Step 4: Final clean up
  result.cleanQuery = result.cleanQuery.replace(/\s+/g, " ").trim();

  return result;
}

function extractPriceRange(query: string) {
  const underMatch = query.match(/(under|below|less than)\s(\d+)/i);
  if (underMatch) {
    return { max: Number(underMatch[2]) };
  }

  const rangeMatch = query.match(/(\d+)\s?-\s?(\d+)/i);
  if (rangeMatch) {
    return {
      min: Number(rangeMatch[1]),
      max: Number(rangeMatch[2]),
    };
  }

  const aboveMatch = query.match(/(above|over|more than)\s(\d+)/i);
  if (aboveMatch) {
    return { min: Number(aboveMatch[2]) };
  }

  return undefined;
}
