import { injectable } from 'tsyringe';
import User from '../../models/user.model';
import IUserRepository from '../interfaces/i.user.repository'
import { Repository } from 'typeorm';
import { dataSource } from '../../config/database';

@injectable()
export default class UserRepository implements IUserRepository {
    _userRepository: Repository<User>

    constructor() {
        this._userRepository = dataSource.getRepository(User)
    }

    get(username: string): Promise<User | null> {
        return this._userRepository.findOneBy({ username })
    }

    create(user: User): Promise<User> {
        return this._userRepository.save(user)
    }
}