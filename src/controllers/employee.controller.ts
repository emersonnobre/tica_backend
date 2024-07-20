import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import EmployeeService from '../services/implementations/employee.service'
import IEmployeeService from '../services/interfaces/i.employee.service'
import CreateEmployeeRequest from '../util/requests/employee/create-employee.request'

@injectable()
export class EmployeeController {
  constructor(@inject(EmployeeService) private employeeService: IEmployeeService) { }

  async createEmployee(req: Request, res: Response) {
    const request: CreateEmployeeRequest = req.body
    const result = await this.employeeService.create(request)
    res.status(result.httpStatusCode).json(result)
  }

  async getEmployees(_: Request, res: Response) {
    const result = await this.employeeService.get()
    res.status(result.httpStatusCode).json(result)
  }
}