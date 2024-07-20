import Transaction from '../../models/transaction.model'

export default interface ITransactionRepository {
    saveTransaction(newTransaction: Transaction): Promise<Transaction>
}