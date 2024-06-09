import { Router } from 'express'
import { container } from 'tsyringe'
import { ProductController } from '../controllers/product.controller'

const router = Router()
const productController = container.resolve(ProductController)

router.route('/products')
    .post(productController.addNewProduct.bind(productController))
    .get(productController.getProducts.bind(productController))

router.route('/products/:id')
    .get(productController.getProduct.bind(productController))
    .delete(productController.deleteProduct.bind(productController))

export default router