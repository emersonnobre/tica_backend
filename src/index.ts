import { config } from 'dotenv'
config()

import 'reflect-metadata'
import express, { Express } from 'express'
import productRoutes from './routes/product.routes'
import userRoutes  from './routes/user.routes'
import { dataSource } from './config/database'

const app: Express = express()

app.use(express.json())
app.use(productRoutes, userRoutes)

app.listen(process.env.SERVER_PORT, () => {
    dataSource.initialize()
        .then(() => console.log('Connected to the database!'))
        .catch(err => console.log('[Database connection error]', err))
    console.log(`Application listening on port ${process.env.SERVER_PORT}`)
})