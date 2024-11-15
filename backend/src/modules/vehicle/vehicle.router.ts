import { Router } from "express";
import { VehicleController } from "./vehicle.controller";
import { VehicleService } from "./vehicle.service";

const vehicleService = new VehicleService();
const vehicleController = new VehicleController(vehicleService);

const vehicleRouter = Router();

vehicleRouter.post(
  "/",
  vehicleController.createVehicle.bind(vehicleController)
);

vehicleRouter.get("/", vehicleController.getVehicles.bind(vehicleController));

vehicleRouter.patch(
  "/:vehicle_id",
  vehicleController.changeVehicleStatus.bind(vehicleController)
);

export default vehicleRouter;
