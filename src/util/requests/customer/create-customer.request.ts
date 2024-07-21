import { AutoMap } from '@automapper/classes'
import { CreateAddressRequest } from './create-address.request'

export default class CreateCustomerRequest {
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
  wishList?: string
  @AutoMap(() => CreateAddressRequest)
  addresses?: CreateAddressRequest[]
  createdById: string
}