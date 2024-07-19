export interface PaginatedProductsResponse {
  products: Array<ProductResponse>
  totalCount: number
}

export interface ProductResponse {
  id: string
  name: string
  purchasePrice: number
  salePrice?: number
  stock: number
  barcode: string
  createdAt: Date
  createdBy: number
  isFeedstock: boolean
  categoryId?: number
  updatedAt?: Date
  updatedBy?: number
}