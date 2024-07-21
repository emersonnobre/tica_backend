import { AutoMap } from '@automapper/classes'
import GetEmployeeResponse from '../employee/get-employee.response'
import { ProductResponse } from './paginated-products.response'

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
  @AutoMap(() => ProductResponse)
  product: ProductResponse
}