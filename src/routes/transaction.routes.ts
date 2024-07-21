import { Router } from 'express'
import { container } from 'tsyringe'
import { TransactionController } from '../controllers/transaction.controller'
import { auth } from '../middleware/auth.middleware'

const router = Router()
const transactionController = container.resolve(TransactionController)

/**
 * @swagger
 * /transactions:
 *  get:
 *   summary: Gets a list of transactions
 *   tags:
 *    - transactions
 *   security:
 *    - bearerAuth: []
 *   parameters:
 *    - in: query
 *      name: offset
 *      required: true
 *      example: 0
 *      schema:
 *       type: integer
 *      description: Number of items to skip (for pagination)
 *    - in: query
 *      name: limit
 *      required: true
 *      example: 10
 *      schema:
 *       type: integer
 *      description: Max items to get (for pagination)
 *    - in: query
 *      name: productId
 *      example: 37a87430-461c-11ef-9c49-51993656b429
 *      schema:
 *       type: string
 *      description: Filter by product id
 *    - in: query
 *      name: startDate
 *      example: 2024-07-20
 *      schema:
 *       type: string
 *      description: Filter by date
 *    - in: query
 *      name: endDate
 *      example: 2024-07-21
 *      schema:
 *       type: string
 *      description: Filter by date
 *    - in: query
 *      name: type
 *      example: 0
 *      schema:
 *       type: number
 *      description: Inflow (0) or outflow (1)
 *   responses:
 *    200:
 *     description: A list of transactions
 *    500:
 *     description: Internal error
 *    404:
 *     description: Not found 
 */
router.get('/transactions', auth, transactionController.getTransactions.bind(transactionController))

export default router