import rentACarSystemDB from "../../db/prisma";
import { VehicleModel } from "./vehicle.model";

export class VehicleService {
  async createVehicle(vehicleInfo: VehicleModel) {
    const newVehicle = await rentACarSystemDB.vehicle.create({
      data: vehicleInfo,
    });

    return newVehicle;
  }

  async getVehicleById(vehicleId: number): Promise<VehicleModel | null> {
    const vehicle = await rentACarSystemDB.vehicle.findUnique({
      where: {
        id: vehicleId,
      },
    });

    return vehicle;
  }

  async getAllVehicles() {
    const [vehicles, total] = await Promise.all([
      rentACarSystemDB.vehicle.findMany(),
      rentACarSystemDB.vehicle.count(),
    ]);

    return {
      vehicles,
      total,
    };
  }

  async updateVehicleStatus(vehicle_id: number, status: string) {
    const updatedVehicle = await rentACarSystemDB.vehicle.update({
      where: {
        id: vehicle_id,
      },
      data: {
        status,
      },
    });

    return updatedVehicle;
  }
}
