import Product from '../../models/product.model'
import { CreateProductRequest } from '../../util/requests/product/create-product.request'
import ApiResponse from '../../util/responses/api.response'

export default interface IProductService {
    getProducts(): Promise<ApiResponse<Array<Product>>>
    getProduct(id: string): Promise<ApiResponse<Product | null>>
    createProduct(newProduct: CreateProductRequest): Promise<ApiResponse<string | null>>
    deleteProduct(id: string): Promise<ApiResponse<void>>
}