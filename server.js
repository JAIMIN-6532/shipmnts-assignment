import app from "./app.js"
import connectDB from "./src/config/dbConfig.js";
import dotenv from "dotenv";
dotenv.config();

app.listen(process.env.PORT || 3000 , () => {
  console.log(`Server is running on port ${process.env.PORT}`);
  connectDB();
});
