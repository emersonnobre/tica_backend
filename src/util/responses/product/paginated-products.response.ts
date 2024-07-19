import { AutoMap } from '@automapper/classes'

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
  @AutoMap()
  createdBy: number
  @AutoMap()
  isFeedstock: boolean
  @AutoMap()
  categoryId?: number
  @AutoMap()
  updatedAt?: Date
  @AutoMap()
  updatedBy?: number
  @AutoMap()
  active: boolean
}