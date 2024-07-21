export default class PaginatedResponse<T> {
  limit: number
  offset: number
  totalCount: number
  data: T
}