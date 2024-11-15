import { Router } from "express";
import userRouter from "./user/user.router";
import authRoutes from "./auth/auth.routes";
import vehicleRouter from "./vehicle/vehicle.router";


const routes = Router();

routes.use("/user", userRouter);
routes.use("/vehicle", vehicleRouter);
routes.use("/auth", authRoutes);

export default routes;
