import 'reflect-metadata'
import express, { Express } from 'express'
import taskRoutes from './api/task.routes'
import userRoutes from './api/user.routes'

const app: Express = express()

app.use(express.json())
app.use(taskRoutes, userRoutes)

app.listen(3000, () => {
    console.log(`Tasks manager app listening on port ${3000}`)
})