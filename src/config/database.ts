import { DataSource } from 'typeorm'
import Product from '../models/product.model'
import User from '../models/user.model'

export const dataSource = new DataSource({
    type: 'mssql',
    host: 'localhost',
    port: 1433,
    username: 'sa',
    password: '56642202Egr!',
    database: 'master',
    synchronize: true,
    entities: [Product, User],
    extra: {
        options: {
            encrypt: true,
            trustServerCertificate: true
        }
    }
})