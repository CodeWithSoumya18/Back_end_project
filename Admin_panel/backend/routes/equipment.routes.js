
import express from "express";
import auth from "../middleware/auth.middleware.js";
import role from "../middleware/role.middleware.js";
import { getEquipment, addEquipment } from "../controllers/equipment.controller.js";

const router = express.Router();
router.get("/", auth, getEquipment);
router.post("/", auth, role("admin"), addEquipment);
export default router;
