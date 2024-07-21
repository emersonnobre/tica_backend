import { Router } from 'express'
import { container } from 'tsyringe'
import { ProductController } from '../controllers/product.controller'
import { auth } from '../middleware/auth.middleware'

const router = Router()
const productController = container.resolve(ProductController)

/**
 * @swagger
 * /products:
 *  get:
 *   summary: Gets a list of products
 *   tags:
 *    - products
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
 *      schema:
 *       type: string
 *      description: Name of a product
 *    - in: query
 *      name: isFeedstock
 *      required: true
 *      schema:
 *       type: boolean
 *      description: Filter feedstocks
 *      example: false
 *   responses:
 *    200:
 *     description: A list of products
 *    500:
 *     description: Internal error
 *    400:
 *     description: Bad request 
 */
router.get('/products', auth, productController.getProducts.bind(productController))

/**
 * @swagger
 * /products/{id}:
 *  get:
 *   summary: Gets a product
 *   tags:
 *    - products
 *   security:
 *    - bearerAuth: []
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      example: 37a87430-461c-11ef-9c49-51993656b429
 *      schema:
 *       type: string
 *      description: Product id
 *   responses:
 *    200:
 *     description: A product
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ProductResponse'
 *    500:
 *     description: Internal error
 *    404:
 *     description: Not found 
 */
router.get('/products/:id', productController.getProduct.bind(productController))

/**
 * @swagger
 * /products:
 *  post:
 *   summary: Creates a new product
 *   tags:
 *    - products     
 *   security:
 *    - bearerAuth: []
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/CreateProduct'
 *   responses:
 *    201:
 *     description: Product created
 *    500:
 *     description: Internal error
 *    400:
 *     description: Bad request 
 */
router.post('/products', auth, productController.addNewProduct.bind(productController))

/**
 * @swagger
 * /products/{id}:
 *  put:
 *   summary: Updates a product
 *   tags:
 *    - products
 *   security:
 *    - bearerAuth: []
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      example: 37a87430-461c-11ef-9c49-51993656b429
 *      schema:
 *       type: string
 *      description: Product id
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/UpdateProduct'
 *   responses:
 *    200:
 *     description: Product updated
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/ProductResponse'
 *    500:
 *     description: Internal error
 *    404:
 *     description: Not found 
 */
router.put('/products/:id', productController.updateProduct.bind(productController))

/**
 * @swagger
 * /products/{id}:
 *  delete:
 *   summary: Deletes a product
 *   tags:
 *    - products
 *   security:
 *    - bearerAuth: []
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      example: 37a87430-461c-11ef-9c49-51993656b429
 *      schema:
 *       type: string
 *      description: Product id
 *   responses:
 *    204:
 *     description: Product deleted
 *    500:
 *     description: Internal error
 *    404:
 *     description: Not found 
 */
router.delete('/products/:id', productController.deleteProduct.bind(productController))

/**
 * @swagger
 * /products/{id}/transactions:
 *  post:
 *   summary: Saves a new transaction
 *   tags:
 *    - products
 *   security:
 *    - bearerAuth: []
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      example: 37a87430-461c-11ef-9c49-51993656b429
 *      schema:
 *       type: string
 *      description: Product id
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/CreateTransaction'
 *   responses:
 *    201:
 *     description: Transaction created
 *    500:
 *     description: Internal error
 *    404:
 *     description: Not found 
 */
router.post('/products/:id/transactions', productController.addNewTransaction.bind(productController))

export default router