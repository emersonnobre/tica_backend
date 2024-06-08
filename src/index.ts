import { config } from 'dotenv'
config()

import 'reflect-metadata'
import express, { Express } from 'express'
import taskRoutes from './api/task.routes'
import userRoutes from './api/user.routes'
import { dataSource } from './config/database'

const app: Express = express()

app.use(express.json())
app.use(taskRoutes, userRoutes)

app.listen(process.env.SERVER_PORT, () => {
    dataSource.initialize()
        .then(() => console.log('Connected to the database!'))
        .catch(err => console.log('[Database connection error]', err))
    console.log(`Tasks manager app listening on port ${process.env.SERVER_PORT}`)
})