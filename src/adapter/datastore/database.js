import mongoose from 'mongoose'
import adminService from '../../core/service/adminService.js'

mongoose.connect('mongodb://localhost/monks', {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => adminService.registerDefault())