import { injectable } from 'tsyringe';
import User from '../model/user.model';
import IUserRepository from './interfaces/i.user.repository';
import { Repository } from 'typeorm';
import { dataSource } from '../config/database';

@injectable()
export default class UserRepository implements IUserRepository {
    users: Array<User> = []
    _userRepository: Repository<User>

    constructor() {
        this._userRepository = dataSource.getRepository(User)
    }

    getUserByUsername(username: string): Promise<User | null> {
        return this._userRepository.findOneBy({ username })
    }

    getUser(id: string): Promise<User | null> {
        return this._userRepository.findOneBy({ id })
    }

    addNewUser(newUser: User): Promise<User> {
        return this._userRepository.save(newUser)
    }
}