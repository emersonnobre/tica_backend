import { inject, injectable } from 'tsyringe'
import { v4 } from 'uuid'
import IUserService from '../interfaces/i.user.service'
import UserRepository from '../../repositories/implementations/user.repository'
import IUserRepository from '../../repositories/interfaces/i.user.repository'
import AddUserRequest from '../../util/requests/add-user.request'
import ApiResponse from '../../util/responses/api.response'
import AuthenticateUserRequest from '../../util/requests/authenticate-user.request'
import { PasswordManager } from '../../util/security/encrypt'
import { TokenManager } from '../../util/security/token'
import User from '../../models/user.model'

@injectable()
export default class UserService implements IUserService {
    constructor(@inject(UserRepository) private userRepository: IUserRepository) {}
    
    async signin(request: AuthenticateUserRequest): Promise<ApiResponse<string>> {
        const user = await this.userRepository.get(request.username)
        if (!user)
            return new ApiResponse(true, 401, 'Unauthorized')
        const isValid = await PasswordManager.compare(user.password, request.password)
        if (!isValid)
            return new ApiResponse(true, 401, 'Unauthorized')
        return new ApiResponse(true, 200, undefined, TokenManager.create({ id: user.id }))
    }

    async create(request: AddUserRequest): Promise<ApiResponse<string>> {
        const alreadyExists = await this.userRepository.get(request.username)
        if (alreadyExists) return new ApiResponse(true, 400, 'There is already an user with this username')
        const securePassword: string = await PasswordManager.generate(request.password)
        const user = new User(v4(), request.username, securePassword)
        const createdUser = await this.userRepository.create(user)
        return new ApiResponse(true, 201, undefined, TokenManager.create({ id: createdUser.id }))
    }
}