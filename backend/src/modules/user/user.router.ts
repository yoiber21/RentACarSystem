import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { Router } from "express";

const userService = new UserService();
const userController = new UserController(userService);

const userRouter = Router();

userRouter.post("/register", userController.createUser.bind(userController));

export default userRouter;
