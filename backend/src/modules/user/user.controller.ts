import { Request, Response } from "express";
import { UserService } from "./user.service";

export class UserController {
  userService: UserService;

  constructor(userService) {
    this.userService = userService;
  }

  async createUser(req: Request, res: Response) {
    try {
      const userData = req.body;

      const user = await this.userService.createUser(userData);

      res.status(201).json({
        ok: true,
        message: "User created successfully",
        user,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        ok: false,
        message: error.message,
      });
    }
  }
}
