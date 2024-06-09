import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import UserService from '../services/implementations/user.service'
import IUserService from '../services/interfaces/i.user.service'
import AddUserRequest from '../util/requests/add-user.request'
import AuthenticateUserRequest from '../util/requests/authenticate-user.request'

@injectable()
export class UserController {
    constructor(@inject(UserService) private userService: IUserService) {}

    async signin(req: Request, res: Response) {
        const request: AuthenticateUserRequest = req.body
        const result = await this.userService.signin(request)
        res.status(result.httpStatusCode).json(result)
    }

    async createUser(req: Request, res: Response) {
        const request: AddUserRequest = req.body
        const result = await this.userService.create(request)
        res.status(result.httpStatusCode).json(result)
    }
}