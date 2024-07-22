import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import EmployeeService from '../services/implementations/employee.service'
import IEmployeeService from '../services/interfaces/i.employee.service'
import CreateEmployeeRequest from '../util/requests/employee/create-employee.request'
import { CreateEmployeeValidator } from './validators/employee.validator'
import ApiResponse from '../util/responses/api.response'

@injectable()
export class EmployeeController {
  constructor(@inject(EmployeeService) private employeeService: IEmployeeService) { }

  async createEmployee(req: Request, res: Response) {
    const request: CreateEmployeeRequest = req.body
    const v = CreateEmployeeValidator.safeParse(request)
    if (!v.success) {
      const { issues } = v.error
      const messages = issues.map(issue => issue.message)
      return res.status(400).json(new ApiResponse<null>(false, 400, messages.join('\n'), null))
    }
    const result = await this.employeeService.create(request)
    res.status(result.httpStatusCode).json(result)
  }

  async getEmployees(_: Request, res: Response) {
    const result = await this.employeeService.get()
    res.status(result.httpStatusCode).json(result)
  }
}