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
import CreateCustomerRequest from '../requests/customer/create-customer.request'
import Customer from '../../models/customer.model'
import { CreateAddressRequest } from '../requests/customer/create-address.request'
import Address from '../../models/address.model'
import { GetAddressResponse } from '../responses/customer/get-address.response'
import GetCustomerResponse from '../responses/customer/get-customer.response'
import GetCustomerShortResponse from '../responses/customer/get-customer-short.response'

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
    forMember(destination => destination.createdAt, fromValue(new Date())),
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

  createMap(
    mapper,
    CreateAddressRequest,
    Address
  )

  createMap(
    mapper,
    CreateCustomerRequest,
    Customer,
    forMember(destination => destination.createdAt, fromValue(new Date())),
    forMember(destination => destination.createdBy, mapFrom(source => new Employee(source.createdById))),
  )

  createMap(
    mapper,
    Address,
    GetAddressResponse
  )

  createMap(
    mapper,
    Customer,
    GetCustomerResponse
  )

  createMap(
    mapper,
    Customer,
    GetCustomerShortResponse
  )
}