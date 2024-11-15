import { Request, Response, NextFunction } from "express";

interface AuthenticatedRequest extends Request {
  userRole?: string;
}

export const authorize = (allowedRoles: string[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    const { userRole } = req;

    if (!userRole || !allowedRoles.includes(userRole)) {
      res.status(403).json({ message: "Acceso denegado" });
      return;
    }

    next();
  };
};