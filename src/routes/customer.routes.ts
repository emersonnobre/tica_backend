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

export default router