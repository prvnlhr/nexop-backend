import { Router } from "express";
import { categoryController } from "../../controllers/storefront/category.controller";
import { productsController } from "../../controllers/storefront/product.controller";
const router = Router();

router.get("/categories", categoryController.getAllCategories);
router.get("/products/:categoryId", productsController.getCategoryProducts);
router.get("/products/details/:productId", productsController.getProductById);

export default router;
