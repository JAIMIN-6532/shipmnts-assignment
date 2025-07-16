import WarehouseRepository from "../repository/warehouse.repository.js";

export default class WarehouseController {
  constructor() {
    this.warehouseRepository = new WarehouseRepository();
  }

  async createWarehouse(req, res, next) {
    try {
      const result = await this.warehouseRepository.createWarehouse(req.body);
      if (!res) {
        return res.status(400).json({
          message: "warehouse not created",
          success: false,
        });
      }

      return res.status(201).json({
        success: true,
        message: "Location created successfully",
        data: result,
      });
    } catch (err) {
      console.log("error:", err);
      next(err);
    }
  }

  async getWarehouseByLocationCode(req, res, next) {
    try {
      const location_code = req.query.warehouse_code;
      const warehouse_tree =
        await this.warehouseRepository.getWarehouseByLocationCode(
          location_code
        );
      if (!warehouse_tree) {
        return res.status(404).json({
          message: "WareHouse Not Found!!",
          success: false,
        });
      }
      return res.status(200).json({
        success: true,
        message: "Warehouse fetched successfully",
        data: warehouse_tree,
      });
    } catch (err) {
      console.log("error:", err);
      next(err);
    }
  }
}
