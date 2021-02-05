import userService from '../../../core/service/userService.js'

export default {
    async login(req, res, next) {
        try {
            const user  = req.body;
            const loged_in = await userService.login(user)
            return res.json(loged_in)
        } catch(err) {
            next(err)
        }
    },
    async findCommonUser(req, res, next) {
        try {
            const user_id = req._id
            const user = await  userService.finUser(user_id)
            return res.json(user)
        } catch(err) {
            next(err)
        }
        
    },
    async updateCommonUser(req, res, next) {
        try {
            const model = req.body
            const user_id = req.params
            const loged_id = req._id
            const updated = await userService.updateCommonUser(user_id, loged_id, model)
            return res.json(updated)
        } catch(err) {
            next(err)
        }
    }
}