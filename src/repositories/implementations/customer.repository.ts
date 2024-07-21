import { injectable } from 'tsyringe';
import { Repository } from 'typeorm';
import { dataSource } from '../../config/database';
import Customer from '../../models/customer.model';
import ICustomerRepository from '../interfaces/i.customer.repository';

@injectable()
export default class CustomerRepository implements ICustomerRepository {
  _customerRepository: Repository<Customer>

  constructor() {
    this._customerRepository = dataSource.getRepository(Customer)
  }

  save(Customer: Customer): Promise<Customer> {
    return this._customerRepository.save(Customer)
  }
}