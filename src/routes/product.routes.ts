import { Router } from 'express'
import { container } from 'tsyringe'
import { ProductController } from '../controllers/product.controller'
import { auth } from '../middleware/auth.middleware'

const router = Router()
const productController = container.resolve(ProductController)

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

router.route('/products/:id')
  .get(productController.getProduct.bind(productController))
  .delete(productController.deleteProduct.bind(productController))

export default router