import express from 'express'
import { updateProfileByAdmin, updateProfileByUser } from '../controllers/admin_controller.js';

const admin_routes = express.Router();



// update profile by admin
admin_routes.put("/update-profile-by-admin", updateProfileByAdmin);
admin_routes.put("/update-profile-by-user", updateProfileByUser);



export default admin_routes;




