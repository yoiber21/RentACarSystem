import rentACarSystemDB from "../../db/prisma";
import { VehicleModel } from "./vehicle.model";

export class VehicleService {
  async createVehicle(vehicleInfo: VehicleModel) {
    const newVehicle = await rentACarSystemDB.vehicle.create({
      data: vehicleInfo,
    });

    return newVehicle;
  }
}
