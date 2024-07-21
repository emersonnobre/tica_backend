import { injectable } from 'tsyringe';
import { Repository } from 'typeorm';
import { dataSource } from '../../config/database';
import ITransactionRepository from '../interfaces/i.transaction.repository';
import Transaction from '../../models/transaction.model';
import PaginationFilter from '../../util/requests/comum/pagination.filter.request';
import GetTransactionsFilter from '../../util/requests/product/get-transactions.filter.request';

@injectable()
export default class TransactionRepository implements ITransactionRepository {
  _transactionRepository: Repository<Transaction>

  constructor() {
    this._transactionRepository = dataSource.getRepository(Transaction)
  }

  saveTransaction(newTransaction: Transaction): Promise<Transaction> {
    return this._transactionRepository.save(newTransaction)
  }

  getTransactions(filters: PaginationFilter<GetTransactionsFilter>): Promise<Array<Transaction>> {
    const queryBuilder = this._transactionRepository.createQueryBuilder()

    queryBuilder
      .leftJoinAndSelect('Transaction.product', 'product')
      .leftJoinAndSelect('Transaction.createdBy', 'employee')
      .where({})
    
    if (filters.filter.type)
      queryBuilder.andWhere({ type: filters.filter.type })
    if (filters.filter.productId)
      queryBuilder.andWhere('product.id = :id', { id: filters.filter.productId })
    if (filters.filter.startDate)
      queryBuilder.andWhere('Transaction.createdAt >= :startDate', { startDate: filters.filter.startDate})
    if (filters.filter.endDate)
      queryBuilder.andWhere('Transaction.createdAt <= :endDate', { endDate: filters.filter.endDate})

    queryBuilder.orderBy('product.id', 'ASC').skip(filters.offset).take(filters.limit)
    return queryBuilder.getMany()
  }

  getCountTransactions(filters: PaginationFilter<GetTransactionsFilter>): Promise<number> {
    const queryBuilder = this._transactionRepository.createQueryBuilder()

    queryBuilder
      .leftJoinAndSelect('Transaction.product', 'product')
      .where({})
    
    if (filters.filter.type)
      queryBuilder.andWhere({ type: filters.filter.type })
    if (filters.filter.productId)
      queryBuilder.andWhere('product.id = :id', { id: filters.filter.productId })
    if (filters.filter.startDate)
      queryBuilder.andWhere('Transaction.createdAt >= :startDate', { startDate: filters.filter.startDate})
    if (filters.filter.endDate)
      queryBuilder.andWhere('Transaction.createdAt <= :endDate', { endDate: filters.filter.endDate})

    return queryBuilder.getCount()
  }
}