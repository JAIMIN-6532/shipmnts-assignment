import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    product_code : {
        type : String,
        unique : true,
    },
    qty : {
        type : Number,

    },
    volume : {
        type : Number
    },
    location_code : {
        type : String,
        ref : "Warehouse.location_code"
    }


})

const ProductModel = mongoose.model("Product", ProductSchema );

export default ProductModel;