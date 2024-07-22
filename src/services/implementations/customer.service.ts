import { inject, injectable } from 'tsyringe';
import Customer from '../../models/customer.model';
import ICustomerRepository from '../../repositories/interfaces/i.customer.repository'
import CustomerRepository from '../../repositories/implementations/customer.repository';
import { mapper } from '../../util/mappings/automapper';
import ICustomerService from '../interfaces/i.customer.service';
import ApiResponse from '../../util/responses/api.response';
import CreateCustomerRequest from '../../util/requests/customer/create-customer.request';
import GetCustomerResponse from '../../util/responses/customer/get-customer.response';
import GetCustomersFilter from '../../util/requests/customer/get-customers.filter.request';
import PaginatedResponse from '../../util/responses/comum/paginated.response';
import GetCustomerShortResponse from '../../util/responses/customer/get-customer-short.response';
import PaginationFilter from '../../util/requests/comum/pagination.filter.request';
import UpdateCustomerRequest from '../../util/requests/customer/update-customer.request';
import EmployeeRepository from '../../repositories/implementations/employee.repository';
import IEmployeeRepository from '../../repositories/interfaces/i.employee.repository';
import { CreateAddressRequest } from '../../util/requests/customer/create-address.request';
import Address from '../../models/address.model';

@injectable()
export default class CustomerService implements ICustomerService {
  constructor(
    @inject(CustomerRepository) private _customerRepository: ICustomerRepository,
    @inject(EmployeeRepository) private _employeeRepository: IEmployeeRepository,
  ) { }
 
  async getById(id: number): Promise<ApiResponse<GetCustomerResponse | null>> {
    try {
      const customer = await this._customerRepository.getById(id)
      if (!customer)
        return new ApiResponse(false, 404, 'Cliente não encontrado!')
      const mappedCustomer = mapper.map(customer, Customer, GetCustomerResponse)
      return new ApiResponse(true, 200, undefined, mappedCustomer)
    } catch (err) {
      console.log(err)
      return new ApiResponse(false, 500, 'Um erro ocorreu! Contate os desenvolvedores.')
    }
  }

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

  async update(id: number, request: UpdateCustomerRequest): Promise<ApiResponse<undefined>> {
    try {
      const customer = await this._customerRepository.getById(id)
      if (!customer)
        return new ApiResponse<undefined>(false, 404, 'Cliente não encontrado!')

      const employee = await this._employeeRepository.getById(request.updatedById)
      if (!employee)
        return new ApiResponse<undefined>(false, 404, 'Funcionário não encontrado!')

      customer.update(request, employee)

      const addressesToRemove = customer.addresses.filter(address => !request.addresses?.find(x => x.id == address.id))
      const addressesToCreate = request.addresses?.filter(address => address.id == undefined)

      customer.removeAddresses(addressesToRemove)
      if (addressesToCreate)
        customer.addAddresses(addressesToCreate.map(x => mapper.map(x, CreateAddressRequest, Address)))

      this._customerRepository.save(customer)
      return new ApiResponse<undefined>(true, 204, undefined, undefined)
    } catch (err) {
      console.log(err)
      return new ApiResponse<undefined>(false, 500, 'Um erro ocorreu! Contate os desenvolvedores.')
    }
  }
}