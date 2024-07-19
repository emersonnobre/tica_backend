export interface PaginatedProductsResponse {
    products: Array<Product>
    page: number
    maxPerPage: number
    totalCount: number    
}

interface Product {
    id: string
    name: string
    purchasePrice: number
    salePrice?: number
    stock: number
    barcode: string
    createdAt: Date
    createdBy: number
    isFeedstock: boolean
    updatedAt?: Date
    updatedBy?: number
}