import express, { json } from 'express';
import {auth_routes, naked_routes, admin_routes} from './adapter/http/config/routes.js';
import errorHandler from './adapter/http/middlewares/errorHandler.js'
import './adapter/datastore/database.js'
import authService from './core/service/authService.js';

class App {
    constructor() {
        this.express = express()
        
        this.commonMiddlewares()
        this.nakedRoutes()
        
        this.laterMiddlewares()
        this.authRoutes()

        this.adminMiddlewares()
        this.adminRoutes()
        
    }

    commonMiddlewares() {
        this.express.use(json())
    }

    laterMiddlewares() {
        this.express.use(errorHandler)
        this.express.use(authService.commonAuthentication)
    }

    adminMiddlewares() {
        this.express.use(authService.adminAuthentication)
    }

    authRoutes() {
        this.express.use(auth_routes)
    }

    nakedRoutes() {
        this.express.use(naked_routes)
    }

    adminRoutes() {
        this.express.use(admin_routes)
    }
}

export default new App().express