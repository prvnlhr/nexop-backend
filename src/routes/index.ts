import { Router } from "express";
const router = Router();
import adminRoutes from "./admin/adminRoutes";
import storefrontRoutes from "./storefront/storefrontRoutes";
import authRoutes from "./auth/authRoutes";
router.use("/admin", adminRoutes);
router.use("/storefront", storefrontRoutes);
router.use("/auth", authRoutes);

export default router;
