import express, { json } from 'express';
import routes from './adapter/http/config/routes.js';
import errorHandler from './adapter/http/middlewares/errorHandler.js'

class App {
    constructor() {
        this.express = express()
        this.routes()
        this.middlewares()
    }

    middlewares() {
        this.express.use(json())
        this.express.use(errorHandler)
    }

    routes() {
        this.express.use(routes)
    }
}

export default new App().express