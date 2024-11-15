import { Request, Response } from "express";
import { AuthService } from "./auth.service";

export class AuthController {
  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;

      const { user, token } = await this.authService.login(email, password);

      // Guardar el token en una cookie o en el almacenamiento local del cliente
      res.cookie('token', token, { httpOnly: true });

      // Redirigir a vehicles.html
      res.redirect('../../../../pages/vehicles.html');
    } catch (error: any) {
      console.error(error);

      res.status(400).json({
        ok: false,
        message: error.message,
      });
    }
  }

  async register(req: Request, res: Response): Promise<void> {
    try {
      const { name, lastname, email, password, phone_number } = req.body;

      const { user, token } = await this.authService.register(name, lastname, email, password, phone_number);

      // Guardar el token en una cookie o en el almacenamiento local del cliente
      res.cookie('token', token, { httpOnly: true });

      // Redirigir a vehicles.html
      res.redirect('../../../../pages/vehicles.html');
    } catch (error: any) {
      console.error(error);

      res.status(400).json({
        ok: false,
        message: error.message,
      });
    }
  }
}