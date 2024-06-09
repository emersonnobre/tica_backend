import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import { CreateProductRequest } from '../util/requests/product/create-product.request'
import ProductService from '../services/implementations/product.service'
import IProductService from '../services/interfaces/i.product.service'

@injectable()
export class ProductController {
    constructor(@inject(ProductService) private productService: IProductService) {}

    async getProducts(_: Request, res: Response) {
        const result = await this.productService.getProducts()
        res.status(result.httpStatusCode).json(result)
    }

    async addNewProduct(req: Request, res: Response) {
        const productRequest: CreateProductRequest = req.body
        const result = await this.productService.createProduct(productRequest)
        res.status(result.httpStatusCode).json(result)
    }

    async getProduct (req: Request, res: Response) {
        const productId = req.params.id as string
        if (productId == undefined)
            return res.sendStatus(400)
        const result = await this.productService.getProduct(productId)
        res.status(result.httpStatusCode).json(result)
    }

    async deleteProduct(req: Request, res: Response) {
        const productId = req.params.id as string
        if (productId == undefined)
            return res.sendStatus(400)
        const result = await this.productService.deleteProduct(productId)
        res.status(result.httpStatusCode).json(result)
    }
}