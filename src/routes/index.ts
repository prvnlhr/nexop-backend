import { Router } from "express";
const router = Router();
import adminRoutes from "./admin/adminRoutes";
import storefrontRoutes from "./storefront/storefrontRoutes";

router.use("/admin", adminRoutes);
router.use("/storefront", storefrontRoutes);

export default router;
