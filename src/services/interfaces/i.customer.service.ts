import CreateCustomerRequest from '../../util/requests/customer/create-customer.request'
import ApiResponse from '../../util/responses/api.response'
import GetCustomerResponse from '../../util/responses/customer/get-customer.response'
// import GetCustomerResponse from '../../util/responses/customer/get-customer.response'

export default interface ICustomerService {
  // get(): Promise<ApiResponse<GetCustomerResponse[]>>
  create(request: CreateCustomerRequest): Promise<ApiResponse<GetCustomerResponse>>
}