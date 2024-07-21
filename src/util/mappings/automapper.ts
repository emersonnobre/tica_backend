import { createMap, createMapper, forMember, fromValue, mapFrom } from '@automapper/core'
import Product from '../../models/product.model'
import { CreateProductRequest } from '../requests/product/create-product.request'
import { v1 } from 'uuid'
import { classes } from '@automapper/classes'
import { ProductResponse } from '../responses/product/paginated-products.response'
import CreateTransactionRequest from '../requests/product/create-transaction.request'
import Transaction from '../../models/transaction.model'
import Employee from '../../models/employee.model'
import GetEmployeeResponse from '../responses/employee/get-employee.response'
import CreateEmployeeRequest from '../requests/employee/create-employee.request'
import GetTransactionsResponse from '../responses/product/get-transactions.response'
import { GetProductsResponse } from '../responses/product/get-products.response'

export const mapper = createMapper({
  strategyInitializer: classes(),
})

export const configureMapper = () => {
  createMap(
    mapper,
    CreateProductRequest,
    Product,
    forMember(destination => destination.id, fromValue(v1())),
    forMember(destination => destination.barcode, fromValue('asdadsads')),
    forMember(destination => destination.createdAt, fromValue(new Date())),
    forMember(destination => destination.category, mapFrom(source => source.categoryId)),
    forMember(destination => destination.active, fromValue(true)),
  )

  createMap(
    mapper,
    Product,
    ProductResponse,
    forMember(destination => destination.categoryId, mapFrom(source => source.category)),
    forMember(destination => destination.createdBy, mapFrom(source => source.createdBy)),
    forMember(destination => destination.updatedBy, mapFrom(source => source.updatedBy)),
  )

  createMap(
    mapper,
    Product,
    GetProductsResponse,
    forMember(destination => destination.categoryId, mapFrom(source => source.category)),
  )

  createMap(
    mapper,
    CreateTransactionRequest,
    Transaction,
    forMember(destination => destination.id, fromValue(v1())),
    forMember(destination => destination.createdAt, fromValue(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()))),
    forMember(destination => destination.createdBy, mapFrom(source => new Employee(source.createdById)))
  )

  createMap(
    mapper,
    Employee,
    GetEmployeeResponse
  )

  createMap(
    mapper,
    CreateEmployeeRequest,
    Employee,
    forMember(destination => destination.id, fromValue(v1())),
    forMember(destination => destination.createdAt, fromValue(new Date())),
  )

  createMap(
    mapper,
    Transaction,
    GetTransactionsResponse
  )
}