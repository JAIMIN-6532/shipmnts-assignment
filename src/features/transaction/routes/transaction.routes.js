import express from "express";
import TransactionController from "../controller/transaction.controller.js"

const transactionRouter = express.Router();
const transactionController = new TransactionController();

transactionRouter.post("/receipt", (req,res,next)=>{
    transactionController.createTransactionForProducts(req,res,next);
})





export default transactionRouter;