import express from 'express'
import adminController from '../controller/adminController.js';
import userController from '../controller/userController.js';

const naked_routes = express.Router();
const auth_routes = express.Router();
const admin_routes = express.Router();

const base_path = '/api/service'
const admin_path = base_path + '/master'
const user_path = base_path + '/user'


naked_routes.post(user_path + '/auth/login', userController.login)
naked_routes.post(admin_path + '/auth/login', userController.login)

auth_routes.get(user_path + '/profile/get', userController.findCommonUser)
auth_routes.patch(user_path + '/profile/update/:user_id', userController.updateCommonUser)

admin_routes.get(admin_path + '/profile/get', adminController.findAdmin)
admin_routes.patch(admin_path + '/profile/update/:admin_id', adminController.updateAdmin)
admin_routes.post(admin_path + '/user/create' , adminController.createCommonUser)
admin_routes.patch(admin_path + '/user/update/:user_id' , adminController.updateCommonUser)
admin_routes.delete(admin_path + '/user/delete/:user_id', adminController.deleteCommonUser)
admin_routes.get(admin_path + '/user/list', adminController.findAll)


export {
    auth_routes,
    naked_routes,
    admin_routes
}
