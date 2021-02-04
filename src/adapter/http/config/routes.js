import express from 'express'
import adminService from '../../../core/service/adminService.js'
const routes = express.Router();

const base_path = '/api/service'
const admin_path = base_path + '/master'
const user_path = base_path + '/user'



routes.get(user_path, adminService.getAllAdmin)
// routes.post(user_path, adminService.registerAdmin)

export default routes
