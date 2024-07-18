import { config } from 'dotenv'
config()

import 'reflect-metadata'
import express, { Express } from 'express'
import productRoutes from './routes/product.routes'
import userRoutes  from './routes/user.routes'
import { dataSource } from './config/database'
import swagger from './config/swagger'

const app: Express = express()

app.use(express.json())
app.use('/api-docs', swagger.swaggerUI.serve, swagger.swaggerUI.setup(swagger.specs, {
    swaggerOptions: {
      authAction: {
        bearerAuth: {
          name: "bearerAuth",
          schema: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
          value: "Bearer <JWT>",
        },
      },
    },
  }))
app.use(productRoutes, userRoutes)

app.listen(process.env.SERVER_PORT, () => {
    dataSource.initialize()
        .then(() => console.log('Connected to the database!'))
        .catch(err => console.log('[Database connection error]', err))
    console.log(`Application listening on port ${process.env.SERVER_PORT}`)
})