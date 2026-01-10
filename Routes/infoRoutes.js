import express from "express"
import {getAllInfo} from "../Controllers/getAllInfo.js"

const router = express.Router();

router.get("/",getAllInfo);

export default router;