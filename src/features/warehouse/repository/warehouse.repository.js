import WarehouseModel from "../model/warehouse.model.js";

export default class WarehouseRepository {
  async createWarehouse(data) {
    try {
      const { location_code, parent_location_code } = data;
      let warehouse;
      if (parent_location_code === null) {
        warehouse = await WarehouseModel.create(data);
        return warehouse;
      }
      const isExist = await WarehouseModel.findOne({
        location_code: parent_location_code,
      });
      if (isExist) {
        warehouse = await WarehouseModel.findOneAndUpdate(
          { location_code: parent_location_code },
          {
            $push: {
              childs: {
                location_code,
                parent_location_code: isExist.location_code,
              },
            },
          },
          {
            new: true,
          }
        );
        return warehouse;
      }

      return false;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async getWarehouseByLocationCode(location_code) {
    try {
      const tree = await WarehouseModel.findOne({ location_code });
      if (!tree) {
        return false;
      }
      return tree;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
