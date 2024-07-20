import CreateEmployeeRequest from '../../util/requests/employee/create-employee.request'
import ApiResponse from '../../util/responses/api.response'
import GetEmployeeResponse from '../../util/responses/employee/get-employee.response'

export default interface IEmployeeService {
  get(): Promise<ApiResponse<GetEmployeeResponse[]>>
  create(request: CreateEmployeeRequest): Promise<ApiResponse<GetEmployeeResponse>>
}