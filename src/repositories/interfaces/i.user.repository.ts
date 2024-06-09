import User from '../../models/user.model'

export default interface IUserRepository {
    get(username: string): Promise<User | null>
    create(user: User): Promise<User>
}