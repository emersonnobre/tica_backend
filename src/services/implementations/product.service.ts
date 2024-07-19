import { injectable, inject } from 'tsyringe';
import { v1 } from 'uuid'
import { CreateProductRequest } from '../../util/requests/product/create-product.request';
import Product from '../../models/product.model';
import IProductService from '../interfaces/i.product.service';
import ProductRepository from '../../repositories/implementations/product.repository';
import IProductRepository from '../../repositories/interfaces/i.product.respository';
import ApiResponse from '../../util/responses/api.response';

@injectable()
export default class ProductService implements IProductService {
    constructor(
        @inject(ProductRepository) private productRepository: IProductRepository
    ) {}

    async getProducts(): Promise<ApiResponse<Product[]>> {
        try {
            const products = await this.productRepository.getProducts()
            return new ApiResponse<Product[]>(true, 200, undefined, products)
        } catch(err) {
            console.log(err)
            return new ApiResponse<Product[]>(false, 500, 'Um erro ocorreu! Contate os desenvolvedores.')
        }
    }

    async getProduct(id: string): Promise<ApiResponse<Product | null>> {
        try {
            const product = await this.productRepository.getProduct(id)
            if (!product)
                return new ApiResponse(true, 404, 'This product does not exists')
            return new ApiResponse(true, 200, undefined, product)
        } catch(err) {
            console.log(err)
            return new ApiResponse(false, 500, 'Um erro ocorreu! Contate os desenvolvedores.')
        }
    }

    async createProduct(productRequest: CreateProductRequest): Promise<ApiResponse<string | null>> {
        try {
            const exists = await this.existsWithName(productRequest.name)
            if (exists)
                return new ApiResponse(false, 400, 'Já existe um produto com esse nome!')

            const product: Product = new Product(
                v1(),
                productRequest.name,
                productRequest.purchasePrice,
                productRequest.stock,
                productRequest.isFeedstock,
                1,
                productRequest.salePrice
            )
            this.productRepository.createProduct(product)
            return new ApiResponse(true, 201, undefined, product.id)
        } catch(err) {
            console.log(err)
            return new ApiResponse(false, 500, 'Um erro ocorreu! Contate os desenvolvedores.')
        }
    }

    async deleteProduct(id: string): Promise<ApiResponse<void>> {
        const product = await this.productRepository.getProduct(id)
        if (!product) return new ApiResponse(true, 404, 'This product does not exists')
        await this.productRepository.deleteProduct(product)
        return new ApiResponse(true, 200, 'Deleted')
    }

    async existsWithName(name: string): Promise<boolean> {
        const product = await this.productRepository.getProductByName(name)
        return !!product
    }
}