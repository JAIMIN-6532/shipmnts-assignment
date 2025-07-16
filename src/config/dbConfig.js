import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("db connected!!");
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export default connectDB;
