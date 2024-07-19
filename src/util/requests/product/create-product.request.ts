export interface CreateProductRequest {
  name: string
  purchasePrice: number
  salePrice?: number
  categoryId: number
  stock: number
  isFeedstock: boolean
}