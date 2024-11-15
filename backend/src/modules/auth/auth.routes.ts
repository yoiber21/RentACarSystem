import { Router } from "express";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";

const router = Router();
const authService = new AuthService();
const authController = new AuthController(authService);

router.post("/login", (req, res) => authController.login(req, res));
router.post("/register", (req, res) => authController.register(req, res));

export default router;