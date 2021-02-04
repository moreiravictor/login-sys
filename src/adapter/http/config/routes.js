import express from 'express'
import adminController from '../controller/adminController.js';
import userController from '../controller/userController.js';

const naked_routes = express.Router();
const auth_routes = express.Router();
const admin_routes = express.Router();

const base_path = '/api/service'
const admin_path = base_path + '/master'
const user_path = base_path + '/user'
const auth = '/auth'


naked_routes.post(user_path + auth + '/login', userController.login)

auth_routes.get('/api/service/user/a', (req, res, next) => {return res.json({})} )

admin_routes.get(user_path, adminController.findall)

export {
    auth_routes,
    naked_routes,
    admin_routes
}
