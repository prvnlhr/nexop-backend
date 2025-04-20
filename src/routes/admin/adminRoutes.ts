import { Router } from "express";
import { categoryController } from "../../controllers/admin/category.controller";
import { attributeController } from "../../controllers/admin/attribute.controller";
const router = Router();

//category
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
export default router;
