import { Router } from 'express'
import { container } from 'tsyringe'
import { ProductController } from '../controllers/product.controller'
import { auth } from '../middleware/auth.middleware'

const router = Router()
const productController = container.resolve(ProductController)

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *          content:
 *              application/json:
 *                 schema:
 *                      $ref: '#/components/schemas/CreateProduct'
 *     responses:
 *       201:
 *         description: Product created
 *       500:
 *         description: Internal error
 *       400:
 *         description: Bad request 
 */
router.post('/products', auth, productController.addNewProduct.bind(productController))

router.get('/products', auth, productController.getProducts.bind(productController))

router.route('/products/:id')
    .get(productController.getProduct.bind(productController))
    .delete(productController.deleteProduct.bind(productController))

export default router