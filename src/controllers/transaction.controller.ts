import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import PaginationFilter from '../util/requests/comum/pagination.filter.request'
import GetTransactionsFilter from '../util/requests/product/get-transactions.filter.request'
import TransactionService from '../services/implementations/transaction.service'
import ITransactionService from '../services/interfaces/i.transaction.service'

@injectable()
export class TransactionController {
  constructor(@inject(TransactionService) private transactionService: ITransactionService) { }

  async getTransactions(req: Request, res: Response) {
    const { offset, limit, productId, startDate, endDate, type } = req.query
    const filters: PaginationFilter<GetTransactionsFilter> = { 
      offset: Number(offset) || 0, 
      limit: Number(limit) || 10,
      filter: { 
        productId: productId?.toString() || undefined, 
        startDate: startDate ? new Date(startDate.toString()) : undefined, 
        endDate: endDate ? new Date(endDate.toString()) : undefined,
        type: Number(type) || undefined
      }
    }
    const result = await this.transactionService.getTransactions(filters)
    res.status(result.httpStatusCode).json(result)
  }
}