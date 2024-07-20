import { AutoMap } from '@automapper/classes'
import GetEmployeeResponse from '../employee/get-employee.response'

export interface PaginatedProductsResponse {
  products: Array<ProductResponse>
  totalCount: number
}

export class ProductResponse {
  @AutoMap()
  id: string
  @AutoMap()
  name: string
  @AutoMap()
  purchasePrice: number
  @AutoMap()
  salePrice?: number
  @AutoMap()
  stock: number
  @AutoMap()
  barcode: string
  @AutoMap()
  createdAt: Date
  @AutoMap(() => GetEmployeeResponse)
  createdBy: GetEmployeeResponse
  @AutoMap()
  isFeedstock: boolean
  @AutoMap()
  categoryId?: number
  @AutoMap()
  updatedAt?: Date
  @AutoMap(() => GetEmployeeResponse)
  updatedBy?: GetEmployeeResponse
  @AutoMap()
  active: boolean
}