import infoRoutes from "./Routes/infoRoutes.js";
import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = 5173;

app.use("/home", infoRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});
