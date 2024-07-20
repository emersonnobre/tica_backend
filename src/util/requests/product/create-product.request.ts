import { AutoMap } from '@automapper/classes'

export class CreateProductRequest {
  @AutoMap()
  name: string
  @AutoMap()
  purchasePrice: number
  @AutoMap()
  salePrice?: number
  @AutoMap()
  categoryId: number
  @AutoMap()
  stock: number
  @AutoMap()
  isFeedstock: boolean
  createdById: string
}