import { DataSource } from 'typeorm'
import Product from '../models/product.model'
import User from '../models/user.model'
import Transaction from '../models/transaction.model'
import Employee from '../models/employee.model'

export const dataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'tica',
    password: 'tica123',
    database: 'tica',
    synchronize: true,
    entities: [Product, User, Transaction, Employee],
    logging: true,
    useUTC: false
})