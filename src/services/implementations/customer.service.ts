import { inject, injectable } from 'tsyringe';
import Customer from '../../models/customer.model';
import ICustomerRepository from '../../repositories/interfaces/i.customer.repository'
import CustomerRepository from '../../repositories/implementations/customer.repository';
import { mapper } from '../../util/mappings/automapper';
// import GetCustomerResponse from '../../util/responses/customer/get-customer.response';
import ICustomerService from '../interfaces/i.customer.service';
import ApiResponse from '../../util/responses/api.response';
import CreateCustomerRequest from '../../util/requests/customer/create-customer.request';
import GetCustomerResponse from '../../util/responses/customer/get-customer.response';
import GetCustomersFilter from '../../util/requests/customer/get-customers.filter.request';
import PaginatedResponse from '../../util/responses/comum/paginated.response';
import GetCustomerShortResponse from '../../util/responses/customer/get-customer-short.response';
import PaginationFilter from '../../util/requests/comum/pagination.filter.request';

@injectable()
export default class CustomerService implements ICustomerService {
  constructor(@inject(CustomerRepository) private _customerRepository: ICustomerRepository) { }

  async get(customerFilterRequest: PaginationFilter<GetCustomersFilter>): Promise<ApiResponse<PaginatedResponse<GetCustomerShortResponse[]>>> {
    try {
      const customers = await this._customerRepository.get(customerFilterRequest)
      const mappedCustomers = customers.map(customer => mapper.map(customer, Customer, GetCustomerShortResponse))

      const paginatedResponse: PaginatedResponse<GetCustomerShortResponse[]> = {
        limit: customerFilterRequest.limit,
        offset: customerFilterRequest.offset,
        data: mappedCustomers,
        totalCount: await this._customerRepository.getCount(customerFilterRequest)
      }

      return new ApiResponse(true, 200, undefined, paginatedResponse)
    } catch (err) {
      console.log(err)
      return new ApiResponse(false, 500, 'Um erro ocorreu! Contate os desenvolvedores.')
    }
  }
  
  async create(request: CreateCustomerRequest): Promise<ApiResponse<GetCustomerResponse>> {
    try {
      const customer = mapper.map(request, CreateCustomerRequest, Customer)
      const savedCustomer = await this._customerRepository.save(customer)

      const response = mapper.map(savedCustomer, Customer, GetCustomerResponse)
      return new ApiResponse<GetCustomerResponse>(true, 201, undefined, response)
    } catch (err) {
      console.log(err)
      return new ApiResponse<GetCustomerResponse>(false, 500, 'Um erro ocorreu! Contate os desenvolvedores.')
    }
  }
}