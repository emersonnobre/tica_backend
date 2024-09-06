import Product from './src/models/product.model'
import User from './src/models/user.model'
import Transaction from './src/models/transaction.model'
import Employee from './src/models/employee.model'
import Address from './src/models/address.model'
import Customer from './src/models/customer.model'

export default {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'tica',
  password: 'tica123',
  database: 'tica',
  synchronize: true,
  logging: true,
  useUTC: false,
  baseDirectory: '/home/emerson/repositories/tica_backend',
  entities: [Product, User, Transaction, Employee, Address, Customer],
  factories: ['src/factories/**/*{.ts,.js}'],
  seeds: ['src/seeds/**/*{.ts,.js}']
}