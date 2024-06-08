import { DataSource } from 'typeorm'
import User from '../model/user.model'
import Task from '../model/task.model'

export const dataSource = new DataSource({
    type: 'mssql',
    host: 'localhost',
    port: 1433,
    username: 'sa',
    password: '56642202Egr!',
    database: 'master',
    synchronize: true,
    entities: [User, Task],
    extra: {
        options: {
            encrypt: true,
            trustServerCertificate: true
        }
    }
})