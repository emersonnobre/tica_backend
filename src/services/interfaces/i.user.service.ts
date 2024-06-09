import AddUserRequest from '../../util/requests/add-user.request'
import AuthenticateUserRequest from '../../util/requests/authenticate-user.request'
import ApiResponse from '../../util/responses/api.response'

export default interface IUserService {
    signin(user: AuthenticateUserRequest): Promise<ApiResponse<string>>
    create(user: AddUserRequest): Promise<ApiResponse<string>> 
}