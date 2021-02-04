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
    }
}