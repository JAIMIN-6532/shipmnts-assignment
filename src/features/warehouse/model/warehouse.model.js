import mongoose from "mongoose";

const WarehouseSchema = new mongoose.Schema({
  location_code: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    required: true,
    default: "warehouse",
  },
  childs: [
    {
      location_code: {
        type: String,
      },
      parent_location_code: {
        type: String,
      },
      type: {
        type: String,
        default: "storage",
      },
      childs: [],
    },
  ],
  products: [
    {
      product_id: {
        type: String,
        ref: "Product.product_code",
      },
    },
  ],
});

const WarehouseModel = mongoose.model("Warehouse", WarehouseSchema);

export default WarehouseModel;
