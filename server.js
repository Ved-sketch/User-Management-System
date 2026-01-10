import infoRoutes from "./Routes/infoRoutes.js";

const express = require("express");
const app = express();

const PORT = 5173;

app.use("/home",infoRoutes);
