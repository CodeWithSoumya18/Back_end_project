import express from "express";
import {
  applyLeave,
  getLeaves,
  updateLeaveStatus,
} from "../controllers/leaveController.js";
import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post("/", protect, authorizeRoles("employee"), applyLeave);

router.get("/", protect, authorizeRoles("admin"), getLeaves);

router.put("/:id", protect, authorizeRoles("admin"), updateLeaveStatus);

export default router;
