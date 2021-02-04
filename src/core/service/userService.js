import user from "../../adapter/datastore/schema/userschema.js";
import { Forbidden } from "../util/error.js";
import authService from "./authService.js";

export default {
    async login(model) {
        const found = await user.findOne({username: model.username, password: model.password}).exec()
        if (found) {
            const token = authService.token(found._id, found.login_type)
            return {auth: true, token}
        }
        throw new Forbidden()
    }
}