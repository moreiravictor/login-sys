import User from "../../adapter/datastore/schema/userSchema.js";
import { BadRequest } from "../util/error.js";
import authService from "./authService.js";

async function logTokens(user_id, token) {
    const user = await User.findById(user_id)
    if (user.last_token) 
        user.tokens.push({token: user.last_token})
    user.last_token = token
    return await user.save()
}

export default {
    async login(model) {
        const found = await User.findOne({username: model.username, password: model.password}).exec()
        if (found) {
            const token = authService.token(found._id, found.login_type)
            logTokens(found._id, token)
            return {auth: true, token}
        }
        throw new BadRequest('wrong username and / or password')
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
    },
    async blackListedTokens(user_id) {
        const user = await User.findById(user_id).exec()
        return user.tokens
    }
}