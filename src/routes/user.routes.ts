import { Router } from 'express'
import { container } from 'tsyringe'
import { UserController } from '../controllers/user.controller'

const router = Router()
const userController = container.resolve(UserController)

/**
 * @swagger
 * definitions:
 *   Login:
 *     required:
 *       - username
 *       - password
 *     properties:
 *       username:
 *         type: string
 *       password:
 *         type: string
 */

/**
 * @swagger
 * /authenticate:
 *   post:
 *     summary: Authenticate the user
 *     requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/Login'
 *     responses:
 *       200:
 *         description: A valid token
 *         schema:
 *              type: object
 *              $ref: '#/definitions/Login'
 *       401:
 *         description: Unauthorized
 */
router.post('/authenticate', userController.signin.bind(userController))

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/definitions/Login'
 *     responses:
 *       201:
 *         description: User created
 *       500:
 *         description: Internal error
 */
router.post('/users', userController.createUser.bind(userController))

export default router