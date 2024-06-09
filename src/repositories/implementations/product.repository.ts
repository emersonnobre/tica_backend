import { injectable } from 'tsyringe';
import { Repository } from 'typeorm';
import IProductRepository from '../interfaces/i.product.respository';
import { dataSource } from '../../config/database';
import Product from '../../models/product.model';

@injectable()
export default class ProductRepository implements IProductRepository {
    _productRepository: Repository<Product>
    
    constructor() {
        this._productRepository = dataSource.getRepository(Product)    
    }

    getProducts(): Promise<Array<Product>> {
        return this._productRepository.find()
    }

    getProduct(id: string): Promise<Product | null> {
        return this._productRepository.findOneBy({ id })
    }

    createProduct(newProduct: Product): Promise<Product> {
        return this._productRepository.save(newProduct)
    }

    deleteProduct(product: Product): Promise<Product> {
        return this._productRepository.remove(product)
    }
}