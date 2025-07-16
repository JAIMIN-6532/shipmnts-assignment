import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
  transaction_date: {
    type: Date,
    required: true,
  },
  warehouse_code: {
    type: String,
    ref: "Warehouse.location_code",
    required: true
  },
  products: [
    {
      product_id: {
        type: String,
        ref: "Product.product_code",
      },
    },
  ],
});


const TrandsactionModel = mongoose.model("Transaction" , TransactionSchema );

export default TransactionModel;