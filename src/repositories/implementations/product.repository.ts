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

  getProducts(offset: number, limit: number, isFeedstock: boolean, name?: string): Promise<Array<Product>> {
    const queryBuilder = this._productRepository.createQueryBuilder()
    queryBuilder.where({ isFeedstock }).andWhere({ active: true })
    if (name)
      queryBuilder.andWhere('Product.name LIKE :partialName', { partialName: `%${name}%` })
    queryBuilder.orderBy('name', 'ASC').skip(offset).take(limit)
    return queryBuilder.getMany()
  }

  getCount(isFeedstock: boolean, name?: string): Promise<number> {
    const queryBuilder = this._productRepository.createQueryBuilder()
    queryBuilder.where({ isFeedstock }).andWhere({ active: true })
    if (name)
      queryBuilder.andWhere('Product.name LIKE :partialName', { partialName: `%${name}%` })
    return queryBuilder.getCount()
  }

  getProduct(id: string): Promise<Product | null> {
    const queryBuilder = this._productRepository.createQueryBuilder()
    queryBuilder.where({ active: true }).andWhere({ id })
    return queryBuilder.getOne()
  }

  getProductByName(name: string): Promise<Product | null> {
    const queryBuilder = this._productRepository.createQueryBuilder()
    queryBuilder.where({ active: true }).andWhere({ name })
    return queryBuilder.getOne()
  }

  saveProduct(newProduct: Product): Promise<Product> {
    return this._productRepository.save(newProduct)
  }
}