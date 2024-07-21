import { inject, injectable } from 'tsyringe'
import ITransactionService from '../interfaces/i.transaction.service';
import PaginationFilter from '../../util/requests/comum/pagination.filter.request';
import GetTransactionsFilter from '../../util/requests/product/get-transactions.filter.request';
import ApiResponse from '../../util/responses/api.response';
import PaginatedResponse from '../../util/responses/comum/paginated.response';
import GetTransactionsResponse from '../../util/responses/product/get-transactions.response';
import TransactionRepository from '../../repositories/implementations/transaction.repository';
import ITransactionRepository from '../../repositories/interfaces/i.transaction.repository';
import { mapper } from '../../util/mappings/automapper';
import Transaction from '../../models/transaction.model';

@injectable()
export default class TransactionService implements ITransactionService {
  constructor (@inject(TransactionRepository) private transactionRepository: ITransactionRepository) {}

  async getTransactions(transactionFilterRequest: PaginationFilter<GetTransactionsFilter>): Promise<ApiResponse<PaginatedResponse<GetTransactionsResponse[]>>> {
    try {
      const transactions = await this.transactionRepository.getTransactions(transactionFilterRequest)
      const mappedTransactions = transactions.map(transaction => mapper.map(transaction, Transaction, GetTransactionsResponse))

      const paginatedResponse: PaginatedResponse<GetTransactionsResponse[]> = {
        limit: transactionFilterRequest.limit,
        offset: transactionFilterRequest.offset,
        data: mappedTransactions,
        totalCount: await this.transactionRepository.getCountTransactions(transactionFilterRequest)
      }

      return new ApiResponse(true, 200, undefined, paginatedResponse)
    } catch (err) {
      console.log(err)
      return new ApiResponse(false, 500, 'Um erro ocorreu! Contate os desenvolvedores.')
    }
  }
}