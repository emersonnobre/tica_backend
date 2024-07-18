import Product from '../../models/product.model'

export default interface IProductRepository {
    getProducts(): Promise<Array<Product>>
    getProduct(id: string): Promise<Product | null>
    getProductByName(name: string): Promise<Product | null>
    createProduct(newProduct: Product): Promise<Product>
    deleteProduct(task: Product): Promise<Product>
}