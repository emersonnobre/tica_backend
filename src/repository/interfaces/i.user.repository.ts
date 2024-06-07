import User from "../../model/user.model"

export default interface IUserRepository {
    addNewUser(newUser: User): void
    getUserByUsername(username: string): User | undefined
    getUser(id: string): User | undefined
}