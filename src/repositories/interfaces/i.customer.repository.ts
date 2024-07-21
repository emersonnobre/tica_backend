import Customer from '../../models/customer.model'
import PaginationFilter from '../../util/requests/comum/pagination.filter.request'
import GetCustomersFilter from '../../util/requests/customer/get-customers.filter.request'

export default interface ICustomerRepository {
  get(filters: PaginationFilter<GetCustomersFilter>): Promise<Array<Customer>>
  getCount(filters: PaginationFilter<GetCustomersFilter>): Promise<number>
  getById(id: number): Promise<Customer | null>
  save(customer: Customer): Promise<Customer>
}