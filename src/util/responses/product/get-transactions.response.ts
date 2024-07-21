import { AutoMap } from '@automapper/classes'
import GetEmployeeResponse from '../employee/get-employee.response'
import { GetProductsResponse } from './get-products.response'

export default class GetTransactionsResponse {
  @AutoMap()
  id: string
  @AutoMap()
  reason: string
  @AutoMap()
  quantity: number
  @AutoMap()
  type: number
  @AutoMap()
  createdAt: Date
  @AutoMap(() => GetEmployeeResponse)
  createdBy: GetEmployeeResponse
  @AutoMap(() => GetProductsResponse)
  product: GetProductsResponse
}