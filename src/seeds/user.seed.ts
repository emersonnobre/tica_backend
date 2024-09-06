import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import User from '../models/user.model'
import { PasswordManager } from '../util/security/encrypt';
import { randomUUID } from 'crypto';

export default class CreateUsers implements Seeder {
    public async run(factory: Factory, connection: Connection) {
        await connection
            .createQueryBuilder()
            .insert()
            .into(User)
            .values([
                { id: randomUUID(), username: 'test', password: await PasswordManager.generate('123'), }
            ])
            .execute()
    }
}