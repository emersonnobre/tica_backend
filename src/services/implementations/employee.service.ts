import { inject, injectable } from 'tsyringe';
import Employee from '../../models/employee.model';
import IEmployeeRepository from '../../repositories/interfaces/i.employee.repository'
import EmployeeRepository from '../../repositories/implementations/employee.repository';
import { mapper } from '../../util/mappings/automapper';
import GetEmployeeResponse from '../../util/responses/employee/get-employee.response';
import IEmployeeService from '../interfaces/i.employee.service';
import ApiResponse from '../../util/responses/api.response';
import CreateEmployeeRequest from '../../util/requests/employee/create-employee.request';

@injectable()
export default class EmployeeService implements IEmployeeService {
  constructor(@inject(EmployeeRepository) private employeeRepository: IEmployeeRepository) { }

  async get(): Promise<ApiResponse<GetEmployeeResponse[]>> {
    try {
      const employees = await this.employeeRepository.get()
      const mappedEmployees = employees.map(employee => mapper.map(employee, Employee, GetEmployeeResponse))
      return new ApiResponse<GetEmployeeResponse[]>(true, 200, undefined, mappedEmployees)
    } catch (err) {
      console.log(err)
      return new ApiResponse<GetEmployeeResponse[]>(false, 500, 'Um erro ocorreu! Contate os desenvolvedores.')
    }
  }
  
  async create(request: CreateEmployeeRequest): Promise<ApiResponse<GetEmployeeResponse>> {
    try {
      const employeedb = await this.employeeRepository.getByName(request.name)
      if (employeedb)
        return new ApiResponse<GetEmployeeResponse>(false, 400, 'Já existe um funcionário com esse nome!')
      
      const employee = mapper.map(request, CreateEmployeeRequest, Employee)
      this.employeeRepository.save(employee)

      const response = mapper.map(employee, Employee, GetEmployeeResponse)
      return new ApiResponse<GetEmployeeResponse>(true, 201, undefined, response)
    } catch (err) {
      console.log(err)
      return new ApiResponse<GetEmployeeResponse>(false, 500, 'Um erro ocorreu! Contate os desenvolvedores.')
    }
  }
}