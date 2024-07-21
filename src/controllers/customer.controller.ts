import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import CustomerService from '../services/implementations/customer.service'
import ICustomerService from '../services/interfaces/i.customer.service'
import CreateCustomerRequest from '../util/requests/customer/create-customer.request'

@injectable()
export class CustomerController {
  constructor(@inject(CustomerService) private customerService: ICustomerService) { }

  async createCustomer(req: Request, res: Response) {
    const request: CreateCustomerRequest = req.body
    const result = await this.customerService.create(request)
    res.status(result.httpStatusCode).json(result)
  }

  // async getCustomers(_: Request, res: Response) {
  //   const result = await this.customerService.get()
  //   res.status(result.httpStatusCode).json(result)
  // }
}