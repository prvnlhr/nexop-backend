import { Router } from "express";
import { categoryController } from "../../controllers/admin/category.controller";
import { attributeController } from "../../controllers/admin/attribute.controller";
import { productController } from "../../controllers/admin/product.controller";
import { variantController } from "../../controllers/admin/variant.controller";
const router = Router();

// Category --------------------------------------------------------------------------
router.get("/categories", categoryController.getAllCategories);
router.get("/categories/:categoryId", categoryController.getCategoryById);
router.post("/categories", categoryController.createCategory);
router.patch("/categories/:categoryId", categoryController.updateCategory);
router.delete("/categories:categoryId", categoryController.deleteCategory);

// Attribute --------------------------------------------------------------------------
router.post("/attributes", attributeController.createAttribute);
router.get("/attributes", attributeController.getAllAttributes);
router.get(
  "/attributes/:categoryId",
  attributeController.getAttributesByCategory
);
router.get(
  "/attributes/details/:attributeId",
  attributeController.getAttributeById
);
router.put("/attributes/:attributeId", attributeController.updateAttribute);
router.delete("/attributes/:attributeId", attributeController.updateAttribute);

// Product --------------------------------------------------------------------------
router.get("/products", productController.getAllProducts);
router.get("/products/:productId", productController.getProductById);
router.post("/products", productController.createProduct);
router.put("/products/:productId", productController.updateProduct);
router.delete("/products/:productId", productController.deleteProduct);

// Variant --------------------------------------------------------------------------
router.get(
  "/products/:productId/variants",
  variantController.getProductVariantsData
);
router.post("/variants", variantController.createVariants);
router.patch("/variants", variantController.updateProductVariants);
router.delete("/variants/:variantId", variantController.deleteVariant);

export default router;
