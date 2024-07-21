import { injectable } from 'tsyringe';
import { Repository } from 'typeorm';
import { dataSource } from '../../config/database';
import Customer from '../../models/customer.model';
import ICustomerRepository from '../interfaces/i.customer.repository';
import PaginationFilter from '../../util/requests/comum/pagination.filter.request';
import GetCustomersFilter from '../../util/requests/customer/get-customers.filter.request';

@injectable()
export default class CustomerRepository implements ICustomerRepository {
  _customerRepository: Repository<Customer>

  constructor() {
    this._customerRepository = dataSource.getRepository(Customer)
  }

  getById(id: number): Promise<Customer | null> {
    return this._customerRepository.createQueryBuilder()
      .innerJoinAndSelect('Customer.createdBy', 'employee')
      .leftJoinAndSelect('Customer.addresses', 'address')
      .where({ id }).getOne()
  }

  get(filters: PaginationFilter<GetCustomersFilter>): Promise<Array<Customer>> {
    const queryBuilder = this._customerRepository.createQueryBuilder()

    queryBuilder.where({})

    if (filters.filter.name)
      queryBuilder.andWhere('Customer.name LIKE :name', { name: `%${filters.filter.name}%` })
    if (filters.filter.cpf)
      queryBuilder.andWhere('Customer.cpf LIKE :cpf', { cpf: `%${filters.filter.cpf}%` })

    queryBuilder.orderBy('Customer.name', 'ASC').skip(filters.offset).take(filters.limit)
    return queryBuilder.getMany()
  }

  getCount(filters: PaginationFilter<GetCustomersFilter>): Promise<number> {
    const queryBuilder = this._customerRepository.createQueryBuilder()

    queryBuilder.where({})
  
    if (filters.filter.name)
      queryBuilder.andWhere('Customer.name LIKE :name', { name: `%${filters.filter.name}%` })
    if (filters.filter.cpf)
      queryBuilder.andWhere('Customer.name LIKE :cpf', { cpf: `%${filters.filter.cpf}%` })
    
    return queryBuilder.getCount()
  }

  save(Customer: Customer): Promise<Customer> {
    return this._customerRepository.save(Customer)
  }
}