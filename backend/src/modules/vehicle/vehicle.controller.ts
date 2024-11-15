import { Request, Response } from "express";
import { VehicleService } from "./vehicle.service";
import { VehicleModel } from "./vehicle.model";

export class VehicleController {
  vehicleService: VehicleService;

  constructor(vehicleServiceInstance: VehicleService) {
    this.vehicleService = vehicleServiceInstance;
  }

  async createVehicle(req: Request, res: Response) {
    try {
      const vehicleData: VehicleModel = req.body;

      const vehicle = await this.vehicleService.createVehicle(vehicleData);

      res.status(201).send({
        ok: true,
        message: "Vehicle created successfully",
        vehicle,
      });
    } catch (error) {
      console.error(error);

      res.status(500).send({ ok: false, error: "Internal server error" });
    }
  }

  async getVehicles(req: Request, res: Response) {
    try {
      const data = await this.vehicleService.getAllVehicles();

      res.status(200).send({
        ok: true,
        message: "Vehicles retrieved successfully",
        ...data,
      });
    } catch (error) {
      console.error(error);

      res.status(500).send({ ok: false, error: "Internal server error" });
    }
  }
}
