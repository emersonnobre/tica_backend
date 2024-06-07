import { inject, injectable } from 'tsyringe';
import IUserService from './interfaces/i.user.service'
import AddUserRequest from '../dto/requests/add-user.request';
import AuthenticateUserRequest from '../dto/requests/authenticate-user.request';
import Task from '../model/task.model';
import UserRepository from '../repository/user.repository';
import IUserRepository from '../repository/interfaces/i.user.repository';
import User from '../model/user.model';
import { v4 } from 'uuid';
import TaskRepository from '../repository/task.repository';
import ITaskRepository from '../repository/interfaces/i.task.respository';

@injectable()
export default class UserService implements IUserService {
    constructor(
        @inject(UserRepository) private userRepository: IUserRepository,
        @inject(TaskRepository) private taskRepository: ITaskRepository
    ) {}

    addUser(newUser: AddUserRequest): void {
        const user = new User(v4(), newUser.name, newUser.username, newUser.password)
        this.userRepository.addNewUser(user)
    }

    authenticate(authenticate: AuthenticateUserRequest): boolean | undefined {
        const user = this.userRepository.getUserByUsername(authenticate.username)

        if (user == undefined)
            return false

        return user.password == authenticate.password
    }

    getTasks(id: string): Task[] {
        return this.taskRepository.getTasksByUser(id)
    }
}