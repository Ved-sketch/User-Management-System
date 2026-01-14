import express from "express"
import {createUser, getAllUser} from "../Controllers/UM_Controller.js"

const router = express.Router();

router.get("/",getAllUser);
router.post("/",createUser);

export default router;