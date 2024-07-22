import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import { CreateProductRequest } from '../util/requests/product/create-product.request'
import ProductService from '../services/implementations/product.service'
import IProductService from '../services/interfaces/i.product.service'
import { GetPaginatedProductsRequest } from '../util/requests/product/paginated-products.request'
import { UpdateProductRequest } from '../util/requests/product/update-product.request'
import CreateTransactionRequest from '../util/requests/product/create-transaction.request'
import { CreateProductValidator, UpdateProductValidator } from './validators/product.validator'
import BaseController from './base.controller'
import { CreateTransactionValidator } from './validators/transaction.validator'

@injectable()
export class ProductController extends BaseController {
  constructor(@inject(ProductService) private productService: IProductService) {
    super()
  }

  async getProducts(req: Request, res: Response) {
    const { offset, limit, name, isFeedstock } = req.query
    const filters: GetPaginatedProductsRequest = { 
      offset: Number(offset) || 0, 
      limit: Number(limit) || 10,
      name: name?.toString() || undefined,
      isFeedstock: isFeedstock == 'true'
    }
    const result = await this.productService.getProducts(filters)
    res.status(result.httpStatusCode).json(result)
  }

  async addNewProduct(req: Request, res: Response) {
    const request: CreateProductRequest = req.body
    const validationResult = this.validateRequest(CreateProductValidator, request)
    if (!validationResult.status) {
      return res.status(400).json(validationResult.response)
    }
    const result = await this.productService.createProduct(request)
    res.status(result.httpStatusCode).json(result)
  }

  async getProduct(req: Request, res: Response) {
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

  async updateProduct(req: Request, res: Response) {
    const productId = req.params.id as string
    const request: UpdateProductRequest = req.body
    const validationResult = this.validateRequest(UpdateProductValidator, request)
    if (!validationResult.status) {
      return res.status(400).json(validationResult.response)
    }
    const result = await this.productService.updateProduct(productId, request);
    res.status(result.httpStatusCode).json(result)
  }

  async addNewTransaction(req: Request, res: Response) {
    const productId = req.params.id as string
    const request: CreateTransactionRequest = req.body
    const validationResult = this.validateRequest(CreateTransactionValidator, request)
    if (!validationResult.status) {
      return res.status(400).json(validationResult.response)
    }
    const result = await this.productService.createTransaction(productId, request)
    res.status(result.httpStatusCode).json(result)
  }
}