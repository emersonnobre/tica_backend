import User from '../../model/user.model'

export default interface IUserRepository {
    addNewUser(newUser: User): Promise<User>
    getUserByUsername(username: string): Promise<User | null>
    getUser(id: string): Promise<User | null>
}