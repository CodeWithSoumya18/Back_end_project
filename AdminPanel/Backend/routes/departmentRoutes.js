import express from "express";
import {
  createDepartment,
  getDepartments,
  updateDepartment,
  deleteDepartment,
} from "../controllers/departmentController.js";
import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();

router
  .route("/")
  .post(protect, authorizeRoles("admin"), createDepartment)
  .get(protect, getDepartments);

router
  .route("/:id")
  .put(protect, authorizeRoles("admin"), updateDepartment)
  .delete(protect, authorizeRoles("admin"), deleteDepartment);

export default router;
