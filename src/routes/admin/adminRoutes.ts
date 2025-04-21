import { Router } from "express";
import { categoryController } from "../../controllers/admin/category.controller";
import { attributeController } from "../../controllers/admin/attribute.controller";
import { productController } from "../../controllers/admin/product.controller";
import { variantController } from "../../controllers/admin/variant.controller";
const router = Router();

// category
router.get("/categories", categoryController.getAllCategories);
router.get("/categories/:categoryId", categoryController.getCategoryById);
router.post("/categories", categoryController.createCategory);
router.patch("/categories/:categoryId", categoryController.updateCategory);

// attributes
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

// products
router.get("/products", productController.getAllProducts);
router.get("/products/:productId", productController.getProductById);
router.post("/products", productController.createProduct);
router.put("/products/:productId", productController.updateProduct);

// new variant routes

router.get(
  "/products/:productId/variants",
  variantController.getProductVariantsData
);

//variants
router.get("/variants", variantController.getProductVariants);
router.post("/variants", variantController.createVariants);
router.put("/variants/:variantSku", variantController.updateVariant);

export default router;
