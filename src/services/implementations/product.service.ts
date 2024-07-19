import { injectable, inject } from 'tsyringe';
import { v1 } from 'uuid'
import { CreateProductRequest } from '../../util/requests/product/create-product.request';
import Product from '../../models/product.model';
import IProductService from '../interfaces/i.product.service';
import ProductRepository from '../../repositories/implementations/product.repository';
import IProductRepository from '../../repositories/interfaces/i.product.respository';
import ApiResponse from '../../util/responses/api.response';
import { GetPaginatedProductsRequest } from '../../util/requests/product/paginated-products.request';
import { PaginatedProductsResponse, ProductResponse } from '../../util/responses/product/paginated-products.response';
import { mapper } from '../../util/mappings/automapper';
import { UpdateProductRequest } from '../../util/requests/product/update-product.request';

@injectable()
export default class ProductService implements IProductService {
  constructor(
    @inject(ProductRepository) private productRepository: IProductRepository
  ) {}

  async getProducts(filters: GetPaginatedProductsRequest): Promise<ApiResponse<PaginatedProductsResponse>> {
    try {
      const products = await this.productRepository.getProducts(filters.offset, filters.limit, filters.isFeedstock, filters.name)
      const mappedProducts = products.map(product => mapper.map(product, Product, ProductResponse))
      const totalCount = await this.productRepository.getCount(filters.isFeedstock, filters.name)
      const response: PaginatedProductsResponse = { products: mappedProducts, totalCount }
      return new ApiResponse<PaginatedProductsResponse>(true, 200, undefined, response)
    } catch (err) {
      console.log(err)
      return new ApiResponse<PaginatedProductsResponse>(false, 500, 'Um erro ocorreu! Contate os desenvolvedores.')
    }
  }

  async getProduct(id: string): Promise<ApiResponse<ProductResponse | null>> {
    try {
      const product = await this.productRepository.getProduct(id)
      if (!product)
        return new ApiResponse(true, 404, 'Produto não encontrado!')
      const mappedProduct = mapper.map(product, Product, ProductResponse)
      return new ApiResponse(true, 200, undefined, mappedProduct)
    } catch (err) {
      console.log(err)
      return new ApiResponse(false, 500, 'Um erro ocorreu! Contate os desenvolvedores.')
    }
  }

  async createProduct(productRequest: CreateProductRequest): Promise<ApiResponse<string | null>> {
    try {
      const exists = await this.existsWithName(productRequest.name)
      if (exists)
        return new ApiResponse(false, 400, 'Já existe um produto com esse nome!')

      const product: Product = mapper.map(productRequest, CreateProductRequest, Product)
      this.productRepository.saveProduct(product)
      return new ApiResponse(true, 201, undefined, product.id)
    } catch (err) {
      console.log(err)
      return new ApiResponse(false, 500, 'Um erro ocorreu! Contate os desenvolvedores.')
    }
  }

  async deleteProduct(id: string): Promise<ApiResponse<void>> {
    const product = await this.productRepository.getProduct(id)
    if (!product) 
      return new ApiResponse(true, 404, 'Produto não encontrado!')
    product.inactivate()
    await this.productRepository.saveProduct(product)
    return new ApiResponse(true, 204, undefined)
  }

  async updateProduct(id: string, productRequest: UpdateProductRequest): Promise<ApiResponse<ProductResponse | null>> {
    try {
      const product = await this.productRepository.getProduct(id)
      if (!product) 
        return new ApiResponse(true, 404, 'Produto não encontrado!', null)

      product.update(productRequest)
      const updatedProduct = await this.productRepository.saveProduct(product)
      
      return new ApiResponse(true, 200, undefined, mapper.map(updatedProduct, Product, ProductResponse))
    } catch (err) {
      console.log(err)
      return new ApiResponse(false, 500, 'Um erro ocorreu! Contate os desenvolvedores.')
    }
  }

  private async existsWithName(name: string): Promise<boolean> {
    const product = await this.productRepository.getProductByName(name)
    return !!product
  }
}