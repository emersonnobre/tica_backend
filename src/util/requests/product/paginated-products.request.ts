export interface PaginatedProductsRequest {
  limit: number
  offset: number
  name?: string
  isFeedstock: boolean
}