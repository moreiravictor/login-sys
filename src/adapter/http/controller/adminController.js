import adminService from "../../../core/service/adminService.js"

export default {
    async findall(req, res, next) {
        try {
            const found = await adminService.getAllAdmin()
            return res.json(found)
        } catch(err) {
            next(err)
        }
    }
}