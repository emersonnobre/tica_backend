import AddUserRequest from '../../dto/requests/add-user.request'
import AuthenticateUserRequest from '../../dto/requests/authenticate-user.request'
import Task from '../../model/task.model'

export default interface IUserService {
    addUser(newUser: AddUserRequest): void
    authenticate(authenticate: AuthenticateUserRequest): boolean | undefined
    getTasks(id: string): Array<Task>
}