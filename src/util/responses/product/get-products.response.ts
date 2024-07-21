import { AutoMap } from '@automapper/classes'

export class GetProductsResponse {
  @AutoMap()
  id: string
  @AutoMap()
  name: string
  @AutoMap()
  stock: number
  @AutoMap()
  isFeedstock: boolean
  @AutoMap()
  categoryId?: number
}