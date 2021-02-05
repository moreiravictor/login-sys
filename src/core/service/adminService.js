import User from "../../adapter/datastore/schema/userSchema.js"
import { NotFound } from "../util/error.js"
import {default_admin} from '../util/data.js'

export default {
    async getAdmin() {
        const found = await User.findOne({login_type: 'admin'}).exec()
        return found
    },
    async updatePassword(id, new_password) {
        let current = await User.findOne({_id: id})
        current.password = new_password
        return await current.save()
    },
    async registerDefault() {
        const admin_exist = await User.countDocuments({login_type: 'admin'}).exec()
        if (admin_exist)
            console.log('admin already registered')
        else
            return await User.create(default_admin)
    },
    async createCommonUser(new_user) {
        return await User.create(new_user)
    }, 
    async updateCommonUser(user_id, model) {
        let current = await User.findOne({_id: user_id})
        current.name = model.name || current.name
        current.username = model.username || current.username
        current.password = model.password || current.password
        return await current.save()
    },
    async deleteCommonUser(user_id) {
        const deleted =  await User.findByIdAndDelete(user_id).exec()
        if (!deleted)
            throw new NotFound('no user with this id')
        return deleted
    },
    async findAll() {
        return await User.find().exec()
    }
}