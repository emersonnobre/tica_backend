import PaginationFilter from '../../util/requests/comum/pagination.filter.request'
import CreateCustomerRequest from '../../util/requests/customer/create-customer.request'
import GetCustomersFilter from '../../util/requests/customer/get-customers.filter.request'
import ApiResponse from '../../util/responses/api.response'
import PaginatedResponse from '../../util/responses/comum/paginated.response'
import GetCustomerShortResponse from '../../util/responses/customer/get-customer-short.response'
import GetCustomerResponse from '../../util/responses/customer/get-customer.response'

export default interface ICustomerService {
  get(customerFilterRequest: PaginationFilter<GetCustomersFilter>): Promise<ApiResponse<PaginatedResponse<GetCustomerShortResponse[]>>>
  getById(id: number): Promise<ApiResponse<GetCustomerResponse | null>>
  create(request: CreateCustomerRequest): Promise<ApiResponse<GetCustomerResponse>>
}