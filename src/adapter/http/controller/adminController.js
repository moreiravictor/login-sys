import adminService from "../../../core/service/adminService.js"

export default {
    async findAdmin(req, res, next) {
        try {
            const found = await adminService.getAdmin()
            return res.json(found)
        } catch(err) {
            next(err)
        }
    },
    async updateAdmin(req, res, next) {
        try {
            const {password} = req.body
            const {admin_id} = req.params
            const updated = await adminService.updatePassword(admin_id, password)
            return res.json(updated)
        } catch (err) {
            next(err)
        }
    },
    async createCommonUser(req, res, next) {
        try {
            const new_user = req.body
            const created = await adminService.createCommonUser(new_user)
            return res.json(created)
        } catch(err) {
            next(err)
        }
    },
    async updateCommonUser(req, res, next) {
        try {
            const model = req.body
            const  {user_id} = req.params
            const updated = await adminService.updateCommonUser(user_id, model)
            return res.json(updated)
        } catch (err) {
            next(err)
        }
    },
    async deleteCommonUser(req, res, next) {
        try {
            const {user_id} = req.params
            const deleted = await adminService.deleteCommonUser(user_id)
            return res.json(deleted)
        } catch (err){
            next(err)
        }
    },
    async findAll(req, res, next) {
        try {
            const users = await adminService.findAll()
            return res.json(users)
        } catch(err) {
            next(err)
        }
    }
}