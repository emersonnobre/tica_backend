import { CreateProductRequest } from '../../util/requests/product/create-product.request'
import CreateTransactionRequest from '../../util/requests/product/create-transaction.request'
import { GetPaginatedProductsRequest } from '../../util/requests/product/paginated-products.request'
import { UpdateProductRequest } from '../../util/requests/product/update-product.request'
import ApiResponse from '../../util/responses/api.response'
import { PaginatedProductsResponse, ProductResponse } from '../../util/responses/product/paginated-products.response'

export default interface IProductService {
  getProducts(filters: GetPaginatedProductsRequest): Promise<ApiResponse<PaginatedProductsResponse>>
  getProduct(id: string): Promise<ApiResponse<ProductResponse | null>>
  createProduct(newProduct: CreateProductRequest): Promise<ApiResponse<string | null>>
  deleteProduct(id: string): Promise<ApiResponse<void>>
  updateProduct(id: string, productRequest: UpdateProductRequest): Promise<ApiResponse<ProductResponse | null>>
  createTransaction(productId: string, transactionRequest: CreateTransactionRequest): Promise<ApiResponse<string | null>>
}