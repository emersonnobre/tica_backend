import { injectable } from 'tsyringe';
import User from '../model/user.model';
import IUserRepository from './interfaces/i.user.repository';

@injectable()
export default class UserRepository implements IUserRepository {
    users: Array<User> = []

    getUserByUsername(username: string): User | undefined {
        return this.users.find(user => user.username == username)
    }

    getUser(id: string): User | undefined {
        return this.users.find(user => user.id == id)
    }

    addNewUser(newUser: User): void {
        this.users.push(newUser)
    }
}