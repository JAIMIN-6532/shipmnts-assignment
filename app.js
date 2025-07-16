import express from 'express';
import WarehouseRouter from "./src/features/warehouse/routes/warehouse.routes.js";
import WarehouseController from './src/features/warehouse/controller/warehouse.controller.js';
import errorHandler from './src/error-handler/errorHandler.js';

const app = express();


app.use(express.json());


app.use("/health", (req,res,next)=>{
   return res.status(200).json({
        message : "healthy"
    });
})

app.use('/api/create_location' , WarehouseRouter );
app.use('/api/warehouse/tree' , WarehouseRouter);


app.use((req,res,next)=>{
    console.log(req.url);
   return res.status(404).json({
        success: false,
        message: "Route not found"
    });
})

app.use(errorHandler);

export default app;