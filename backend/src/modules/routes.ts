import { Router } from "express";
import userRouter from "./user/user.router";
import vehicleRouter from "./vehicle/vehicle.router";

const routes = Router();

routes.use("/user", userRouter);
routes.use("/vehicle", vehicleRouter);

export default routes;
