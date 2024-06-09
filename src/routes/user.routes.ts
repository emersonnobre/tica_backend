import { Router } from 'express'
import { container } from 'tsyringe'
import { UserController } from '../controllers/user.controller'

const router = Router()
const userController = container.resolve(UserController)

router.route('/authenticate')
    .get(userController.signin.bind(userController))

router.route('/users')
    .post(userController.createUser.bind(userController))

export default router