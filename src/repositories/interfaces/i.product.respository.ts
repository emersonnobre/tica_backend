import Product from '../../models/product.model'

export default interface IProductRepository {
    getProducts(offset: number, limit: number, isFeedstock: boolean, name?: string): Promise<Array<Product>>
    getCount(isFeedstock: boolean, name?: string): Promise<number>
    getProduct(id: string): Promise<Product | null>
    getProductByName(name: string): Promise<Product | null>
    createProduct(newProduct: Product): Promise<Product>
    deleteProduct(task: Product): Promise<Product>
}