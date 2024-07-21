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

@injectable()
export default class CustomerService implements ICustomerService {
  constructor(@inject(CustomerRepository) private _customerRepository: ICustomerRepository) { }

  // async get(): Promise<ApiResponse<GetCustomerResponse[]>> {
  //   try {
  //     const Customers = await this.CustomerRepository.get()
  //     const mappedCustomers = Customers.map(Customer => mapper.map(Customer, Customer, GetCustomerResponse))
  //     return new ApiResponse<GetCustomerResponse[]>(true, 200, undefined, mappedCustomers)
  //   } catch (err) {
  //     console.log(err)
  //     return new ApiResponse<GetCustomerResponse[]>(false, 500, 'Um erro ocorreu! Contate os desenvolvedores.')
  //   }
  // }
  
  async create(request: CreateCustomerRequest): Promise<ApiResponse<GetCustomerResponse>> {
    try {
      // const Customerdb = await this.CustomerRepository.getByName(request.name)
      // if (Customerdb)
      //   return new ApiResponse<GetCustomerResponse>(false, 400, 'Já existe um funcionário com esse nome!')
      
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