import { Router } from 'express'
import { container } from 'tsyringe'
import { auth } from '../middleware/auth.middleware'
import { EmployeeController } from '../controllers/employee.controller'

const router = Router()
const employeeController = container.resolve(EmployeeController)

/**
 * @swagger
 * /employees:
 *  get:
 *   summary: Gets a list of employees
 *   tags:
 *    - employees
 *   security:
 *    - bearerAuth: []
 *   responses:
 *    200:
 *     description: A list of employees
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#/components/schemas/EmployeeResponse'
 *    500:
 *     description: Internal error
 */
router.get('/employees', auth, employeeController.getEmployees.bind(employeeController))

/**
 * @swagger
 * /employees:
 *  post:
 *   summary: Creates a new employee
 *   tags:
 *    - employees     
 *   security:
 *    - bearerAuth: []
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/CreateEmployee'
 *   responses:
 *    201:
 *     description: Employee created
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/EmployeeResponse'
 *    500:
 *     description: Internal error
 *    400:
 *     description: Bad request 
 */
router.post('/employees', auth, employeeController.createEmployee.bind(employeeController))

export default router