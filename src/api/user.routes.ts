import { container, inject, injectable } from 'tsyringe'
import { Request, Response, Router } from 'express'
import UserService from '../services/user.service';
import IUserService from '../services/interfaces/i.user.service';
import AddUserRequest from '../dto/requests/add-user.request';
import AuthenticateUserRequest from '../dto/requests/authenticate-user.request';

@injectable()
export class UserController {
    constructor(@inject(UserService) private userService : IUserService) {}

    signup(req: Request, res: Response) {
        const userRequest: AddUserRequest = req.body
        this.userService.addUser(userRequest)
        res.status(201).json({ id: 'as' })
    }

    signin(req: Request, res: Response) {
        const userRequest: AuthenticateUserRequest = req.body
        const isAuthenticated = this.userService.authenticate(userRequest)
        res.status(201).json({ isAuthenticated })
    }
}

const router = Router()
const userController = container.resolve(UserController)

router.route('/user/signup')
    .post(userController.signup.bind(userController))

router.route('/user/authenticate')
    .get(userController.signin.bind(userController))

export default router