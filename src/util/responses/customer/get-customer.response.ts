import { AutoMap } from '@automapper/classes'
import { GetAddressResponse } from './get-address.response'
import GetEmployeeResponse from '../employee/get-employee.response'

export default class GetCustomerResponse {
  @AutoMap()
  id: number
  @AutoMap()
  name: string
  @AutoMap()
  cpf: string
  @AutoMap()
  phone?: string
  @AutoMap()
  email?: string
  @AutoMap()
  socialMedia?: string
  @AutoMap()
  birthday?: string
  @AutoMap()
  createdAt: string
  @AutoMap()
  updatedAt: string
  @AutoMap(() => GetAddressResponse)
  addresses?: GetAddressResponse[]
  @AutoMap(() => GetEmployeeResponse)
  createdBy: GetEmployeeResponse
  @AutoMap(() => GetEmployeeResponse)
  updatedBy?: GetEmployeeResponse
}