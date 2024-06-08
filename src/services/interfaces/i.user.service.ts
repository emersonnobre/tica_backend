import AddUserRequest from '../../util/requests/add-user.request'
import AuthenticateUserRequest from '../../util/requests/authenticate-user.request'
import Task from '../../model/task.model'

export default interface IUserService {
    addUser(newUser: AddUserRequest): Promise<string | null>
    authenticate(authenticate: AuthenticateUserRequest): Promise<object>
    getTasks(id: string): Promise<Array<Task>>
}