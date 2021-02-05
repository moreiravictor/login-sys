import User from "../../adapter/datastore/schema/userschema.js";
import { Forbidden } from "../util/error.js";
import authService from "./authService.js";

export default {
    async login(model) {
        const found = await User.findOne({username: model.username, password: model.password}).exec()
        if (found) {
            const token = authService.token(found._id, found.login_type)
            return {auth: true, token}
        }
        throw new Forbidden()
    },
    async finUser(user_id) {
        return await User.findById(user_id).exec()
    },
    async updateCommonUser(user_id, loged_id, model) {
        if (user_id = loged_id) {
            let current = await User.findOne({_id: user_id})
            current.name = model.name || current.name
            current.username = model.username || current.username
            current.password = model.password || current.password
            return await current.save()
        }
        return {}
    }
}