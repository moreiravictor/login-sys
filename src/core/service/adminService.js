import user from "../../adapter/datastore/schema/userschema.js"
import { BadRequest } from "../util/error.js"
import {default_admin} from '../util/data.js'

export default {
    async getAllAdmin() {
        const found = await user.find({login_type: 'admin'}).exec()
        return res.json(found)
    },
    async registerDefault() {
        const admin_exist = await user.countDocuments({login_type: 'admin'}).exec()
        if (admin_exist)
            throw new BadRequest('admin already registered')
        return await user.create(default_admin)
    }
}