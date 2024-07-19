import Product from "../../../models/product.model"
import { ProductResponse } from "../../../util/responses/product/paginated-products.response"

export function ProductModelToResponse(product: Product) {
  const productResponse: ProductResponse = { 
    id: product.id,
    name: product.name,
    purchasePrice: product.purchasePrice,
    salePrice: product.salePrice,
    stock: product.stock,
    barcode: product.barcode,
    createdAt: product.createdAt,
    createdBy: product.createdBy,
    isFeedstock: product.isFeedstock,
    categoryId: product.category,
    updatedAt: product.updatedAt,
    updatedBy: product.updatedBy,
  }

  return productResponse
}