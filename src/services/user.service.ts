import { inject, injectable } from 'tsyringe';
import IUserService from './interfaces/i.user.service'
import AddUserRequest from '../util/requests/add-user.request';
import AuthenticateUserRequest from '../util/requests/authenticate-user.request';
import Task from '../model/task.model';
import UserRepository from '../repository/user.repository';
import IUserRepository from '../repository/interfaces/i.user.repository';
import User from '../model/user.model';
import { v4 } from 'uuid';
import { PasswordManager } from '../util/security/encrypt';
import { TokenManager } from '../util/security/token';

@injectable()
export default class UserService implements IUserService {
    constructor(
        @inject(UserRepository) private userRepository: IUserRepository
    ) {}

    async addUser(newUser: AddUserRequest): Promise<string | null> {
        try {
            const alreadyExists = await this.userRepository.getUserByUsername(newUser.username)
            if (alreadyExists) return null
            const securePassword: string = await PasswordManager.generate(newUser.password)
            const user = new User(v4(), newUser.name, newUser.username, securePassword)
            const createdUser = await this.userRepository.addNewUser(user)
            return createdUser.id
        } catch(err) {
            console.log(err)
            return null
        }
    }

    async authenticate(authenticate: AuthenticateUserRequest): Promise<object> {
        try {
            const user = await this.userRepository.getUserByUsername(authenticate.username)
            if (!user) return { token: null, message: 'Invalid credentials!' }
            const isValid = await PasswordManager.compare(user.password, authenticate.password)
            if (!isValid) return { token: null, message: 'Invalid credentials!' }
            return { token: TokenManager.create({ id: user.id }) }
        } catch(err) {
            console.log(err)
            return { token: null, message: 'An error ocurred!' }
        }
    }

    async getTasks(id: string): Promise<Task[]> {
        try {
            const user = await this.userRepository.getUser(id)
            return (user?.tasks ?? [])
        } catch(err) {
            console.log(err)
            return []
        }
    }
}