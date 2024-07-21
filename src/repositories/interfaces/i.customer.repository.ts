import Customer from '../../models/customer.model'

export default interface ICustomerRepository {
  save(customer: Customer): Promise<Customer>
}