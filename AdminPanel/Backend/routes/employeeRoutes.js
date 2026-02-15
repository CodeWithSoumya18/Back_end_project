import express from "express";
import {
  addEmployee,
  getEmployees,
  updateEmployee,
  deleteEmployee,
} from "../controllers/employeecontroller.js";
import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();

router
  .route("/")
  .post(protect, authorizeRoles("admin"), addEmployee)
  .get(protect, authorizeRoles("admin"), getEmployees);

router
  .route("/:id")
  .put(protect, authorizeRoles("admin"), updateEmployee)
  .delete(protect, authorizeRoles("admin"), deleteEmployee);

export default router;
