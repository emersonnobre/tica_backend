import { container, inject, injectable } from 'tsyringe'
import { Request, Response, Router } from 'express'
import UserService from '../services/user.service';
import IUserService from '../services/interfaces/i.user.service';
import AddUserRequest from '../util/requests/add-user.request';
import AuthenticateUserRequest from '../util/requests/authenticate-user.request';
import { auth } from './middleware/auth.middleware';

@injectable()
export class UserController {
    constructor(@inject(UserService) private userService : IUserService) {}

    async signup(req: Request, res: Response) {
        const userRequest: AddUserRequest = req.body
        const id = await this.userService.addUser(userRequest)
        res.status(201).json({ id })
    }

    async signin(req: Request, res: Response) {
        const userRequest: AuthenticateUserRequest = req.body
        const result = await this.userService.authenticate(userRequest)
        res.status(201).json(result)
    }

    async getTasks(req: Request, res: Response) {
        if (!req.user?.id) return
        const tasks = await this.userService.getTasks(req.user.id)
        res.json({ data: tasks })
    }
}

const router = Router()
const userController = container.resolve(UserController)

router.route('/user/signup')
    .post(userController.signup.bind(userController))

router.route('/user/authenticate')
    .get(userController.signin.bind(userController))

router.route('/user/task')
    .get(auth, userController.getTasks.bind(userController))

export default router