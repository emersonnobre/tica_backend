import Transaction from '../../models/transaction.model'
import PaginationFilter from '../../util/requests/comum/pagination.filter.request'
import GetTransactionsFilter from '../../util/requests/product/get-transactions.filter.request'

export default interface ITransactionRepository {
  saveTransaction(newTransaction: Transaction): Promise<Transaction>
  getTransactions(filters: PaginationFilter<GetTransactionsFilter>): Promise<Array<Transaction>>
  getCountTransactions(filters: PaginationFilter<GetTransactionsFilter>): Promise<number>
}