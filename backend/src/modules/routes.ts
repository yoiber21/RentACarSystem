import { Router } from "express";
import userRouter from "./user/user.router";
import authRoutes from "./auth/auth.routes";

const routes = Router();

routes.use("/user", userRouter);
routes.use("/auth", authRoutes);

export default routes;
