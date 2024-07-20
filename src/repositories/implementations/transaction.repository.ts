import { injectable } from 'tsyringe';
import { Repository } from 'typeorm';
import { dataSource } from '../../config/database';
import ITransactionRepository from '../interfaces/i.transaction.repository';
import Transaction from '../../models/transaction.model';

@injectable()
export default class TransactionRepository implements ITransactionRepository {
  _transactionRepository: Repository<Transaction>

  constructor() {
    this._transactionRepository = dataSource.getRepository(Transaction)
  }

  saveTransaction(newTransaction: Transaction): Promise<Transaction> {
    return this._transactionRepository.save(newTransaction)
  }
}