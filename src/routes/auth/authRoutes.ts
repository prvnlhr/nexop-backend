import { Router } from "express";
import { authController } from "../../controllers/auth/auth.controller";
const router = Router();

router.post("/sign-in", authController.signInController);
router.post("/sign-up", authController.signUpController);
router.post("/sign-out", authController.signOutController);
router.get("/session", authController.sessionController);
export default router;
