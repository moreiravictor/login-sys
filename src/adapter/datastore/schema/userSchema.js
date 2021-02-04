import mongoose from 'mongoose'
import options from '../config/options.js'
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String ,
        required: true ,
        trim: true
    },
    username: {
        type: String ,
        required: true ,
        trim: true
    },
    password: {
        type: String ,
        required: true ,
        minLength: 8
    },
    login_type: {
        type: String ,
        required: true
    },
    tokens: [{
        token: {
            type: String ,
            required: true
        }
    }]
}, options) 

export default mongoose.model('users', UserSchema)