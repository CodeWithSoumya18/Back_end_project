
import express from "express";
import auth from "../middleware/auth.middleware.js";
import role from "../middleware/role.middleware.js";
import { getUsers } from "../controllers/user.controller.js";

const router = express.Router();
router.get("/", auth, role("admin"), getUsers);
export default router;
