export class UpdateProductRequest {
  name: string
  purchasePrice: number
  salePrice?: number
  isFeedstock: boolean
  categoryId: number
  updatedById: string
}