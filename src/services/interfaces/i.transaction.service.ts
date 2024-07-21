import PaginationFilter from '../../util/requests/comum/pagination.filter.request'
import GetTransactionsFilter from '../../util/requests/product/get-transactions.filter.request'
import ApiResponse from '../../util/responses/api.response'
import PaginatedResponse from '../../util/responses/comum/paginated.response'
import GetTransactionsResponse from '../../util/responses/product/get-transactions.response'

export default interface ITransactionService {
  getTransactions(transactionFilterRequest: PaginationFilter<GetTransactionsFilter>): Promise<ApiResponse<PaginatedResponse<GetTransactionsResponse[]>>>
}