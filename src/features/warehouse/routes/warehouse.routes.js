import express from "express";
import WarehouseController from "../controller/warehouse.controller.js";

const warehouseRouter = express.Router();

const warehouseController = new WarehouseController();


//defining routes

warehouseRouter.post("" , (req,res,next)=>{
    warehouseController.createWarehouse(req,res,next);
})

//get tree by querparams
warehouseRouter.get("" , (req,res,next)=>{
    warehouseController.getWarehouseByLocationCode(req,res,next);
})

export default warehouseRouter;


