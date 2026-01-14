import express from "express"
import {getAllUser} from "../Controllers/UM_Controller.js"

const router = express.Router();

router.get("/",getAllUser);

export default router;