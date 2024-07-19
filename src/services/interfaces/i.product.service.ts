import Product from '../../models/product.model'
import { CreateProductRequest } from '../../util/requests/product/create-product.request'
import { PaginatedProductsRequest } from '../../util/requests/product/paginated-products.request'
import ApiResponse from '../../util/responses/api.response'
import { PaginatedProductsResponse } from '../../util/responses/product/paginated-products.response'

export default interface IProductService {
    getProducts(filters: PaginatedProductsRequest): Promise<ApiResponse<PaginatedProductsResponse>>
    getProduct(id: string): Promise<ApiResponse<Product | null>>
    createProduct(newProduct: CreateProductRequest): Promise<ApiResponse<string | null>>
    deleteProduct(id: string): Promise<ApiResponse<void>>
}