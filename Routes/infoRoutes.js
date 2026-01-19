import express from "express"
import {createUser, getAllUser, updateUser, getUserById} from "../Controllers/UM_Controller.js"

const router = express.Router();

router.get("/",getAllUser);
router.post("/",createUser);
router.put("/:id",updateUser);
router.get("/:id",getUserById);

export default router;