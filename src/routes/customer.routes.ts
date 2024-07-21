import { Router } from 'express'
import { container } from 'tsyringe'
import { auth } from '../middleware/auth.middleware'
import { CustomerController } from '../controllers/customer.controller'

const router = Router()
const customerController = container.resolve(CustomerController)

/**
 * @swagger
 * /customers:
 *  post:
 *   summary: Creates a new customer
 *   tags:
 *    - customers     
 *   security:
 *    - bearerAuth: []
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/CreateCustomerRequest'
 *   responses:
 *    201:
 *     description: Customer created
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/GetCustomerResponse'
 *    500:
 *     description: Internal error
 *    400:
 *     description: Bad request 
 */
router.post('/customers', auth, customerController.createCustomer.bind(customerController))

/**
 * @swagger
 * /customers:
 *  get:
 *   summary: Gets a list of customers
 *   tags:
 *    - customers
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
 *      name: name
 *      example: Emerson Gabriel
 *      schema:
 *       type: string
 *      description: Filter by customer partial name
 *    - in: query
 *      name: cpf
 *      example: 06369196177
 *      schema:
 *       type: string
 *      description: Filter by customer's CPF
 *   responses:
 *    200:
 *     description: A list of customers
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#/components/schemas/GetCustomerShortResponse'
 *    500:
 *     description: Internal error
 *    404:
 *     description: Not found 
 */
router.get('/customers', auth, customerController.get.bind(customerController))

export default router