import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import CustomerService from '../services/implementations/customer.service'
import ICustomerService from '../services/interfaces/i.customer.service'
import CreateCustomerRequest from '../util/requests/customer/create-customer.request'
import PaginationFilter from '../util/requests/comum/pagination.filter.request'
import GetCustomersFilter from '../util/requests/customer/get-customers.filter.request'
import UpdateCustomerRequest from '../util/requests/customer/update-customer.request'

import { CreateCustomer as CreateCustomerValidator } from './validators/customer.validator'
import ApiResponse from '../util/responses/api.response'

@injectable()
export class CustomerController {
  constructor(@inject(CustomerService) private customerService: ICustomerService) { }

  async createCustomer(req: Request, res: Response) {
    const request: CreateCustomerRequest = req.body
    const v = CreateCustomerValidator.safeParse(request)
    if (!v.success) {
      const { issues } = v.error
      const messages = issues.map(issue => issue.message)
      return res.status(400).json(new ApiResponse<null>(false, 400, messages.join('\n'), null))
    }
    const result = await this.customerService.create(request)
    res.status(200).json(result)
  }

  async get(req: Request, res: Response) {
    const { offset, limit, name, cpf } = req.query
    const filters: PaginationFilter<GetCustomersFilter> = { 
      offset: Number(offset) || 0, 
      limit: Number(limit) || 10,
      filter: { 
        name: name?.toString() || undefined, 
        cpf: cpf?.toString() || undefined,
      }
    }
    const result = await this.customerService.get(filters)
    res.status(result.httpStatusCode).json(result)
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params
    const result = await this.customerService.getById(Number(id))
    res.status(result.httpStatusCode).json(result)
  }

  async update(req: Request, res: Response) {
    const { id } = req.params
    const request: UpdateCustomerRequest = req.body
    const result = await this.customerService.update(Number(id), request)
    res.status(result.httpStatusCode).json(result)
  }

}