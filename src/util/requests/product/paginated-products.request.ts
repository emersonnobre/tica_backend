export interface GetPaginatedProductsRequest {
  limit: number
  offset: number
  name?: string
  isFeedstock: boolean
}