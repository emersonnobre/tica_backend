import { createMap, createMapper, forMember, fromValue, mapFrom } from '@automapper/core'
import Product from '../../models/product.model'
import { CreateProductRequest } from '../requests/product/create-product.request'
import { v1 } from 'uuid'
import { classes } from '@automapper/classes'
import { ProductResponse } from '../responses/product/paginated-products.response'

export const mapper = createMapper({
  strategyInitializer: classes(),
})

export const configureMapper = () => {
  createMap(
    mapper,
    CreateProductRequest,
    Product,
    forMember(destination => destination.id, fromValue(v1())),
    forMember(destination => destination.createdBy, fromValue(1)),
    forMember(destination => destination.barcode, fromValue('asdadsads')),
    forMember(destination => destination.createdBy, fromValue(1)),
    forMember(destination => destination.createdAt, fromValue(new Date())),
    forMember(destination => destination.category, mapFrom(source => source.categoryId)),
  )

  createMap(
    mapper,
    Product,
    ProductResponse,
    forMember(destination => destination.categoryId, mapFrom(source => source.category)),
  )
}