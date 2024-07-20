import { container } from 'tsyringe'
import ProductRepository from '../repositories/implementations/product.repository'
import IProductRepository from '../repositories/interfaces/i.product.respository'
import IProductService from '../services/interfaces/i.product.service'
import ProductService from '../services/implementations/product.service'
import { ProductController } from '../controllers/product.controller'
import IUserRepository from '../repositories/interfaces/i.user.repository'
import UserRepository from '../repositories/implementations/user.repository'
import IUserService from '../services/interfaces/i.user.service'
import UserService from '../services/implementations/user.service'
import ITransactionRepository from '../repositories/interfaces/i.transaction.repository'
import TransactionRepository from '../repositories/implementations/transaction.repository'
import IEmployeeRepository from '../repositories/interfaces/i.employee.repository'
import EmployeeRepository from '../repositories/implementations/employee.repository'

container.registerSingleton<IProductRepository>(ProductRepository)
container.registerSingleton<IUserRepository>(UserRepository)
container.registerSingleton<ITransactionRepository>(TransactionRepository)
container.registerSingleton<IEmployeeRepository>(EmployeeRepository)

container.registerSingleton<IProductService>(ProductService)
container.registerSingleton<IUserService>(UserService)

container.registerSingleton(ProductController)