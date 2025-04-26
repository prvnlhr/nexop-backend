import { Router } from "express";
import { categoryController } from "../../controllers/storefront/category.controller";
import { productsController } from "../../controllers/storefront/product.controller";
import { cartController } from "../../controllers/storefront/cart.controller";
import { checkoutController } from "../../controllers/storefront/checkout.controller";
import { searchController } from "../../controllers/storefront/search.controller";

const router = Router();

// Categories
router.get("/categories", categoryController.getAllCategories);

// Products
router.get("/products/:categorySlug", productsController.getCategoryProducts);
router.get(
  "/products/details/:categorySlug/:productSlug",
  productsController.getProductDetails
);

// Cart
router.get("/cart/:userId", cartController.getCart);
router.post("/cart/add", cartController.addToCart);
router.put("/cart/update", cartController.updateCartItem);
router.delete("/cart/remove", cartController.removeFromCart);

// Checkout
router.get("/checkout/:userId", checkoutController.getCheckoutDetails);

// Search
router.get("/search", searchController.searchProducts);

export default router;
