import { CreateProductRequest } from '../../util/requests/product/create-product.request'
import { GetPaginatedProductsRequest } from '../../util/requests/product/paginated-products.request'
import ApiResponse from '../../util/responses/api.response'
import { PaginatedProductsResponse, ProductResponse } from '../../util/responses/product/paginated-products.response'

export default interface IProductService {
    getProducts(filters: GetPaginatedProductsRequest): Promise<ApiResponse<PaginatedProductsResponse>>
    getProduct(id: string): Promise<ApiResponse<ProductResponse | null>>
    createProduct(newProduct: CreateProductRequest): Promise<ApiResponse<string | null>>
    deleteProduct(id: string): Promise<ApiResponse<void>>
}