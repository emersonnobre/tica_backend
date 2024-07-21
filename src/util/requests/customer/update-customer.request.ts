import { AutoMap } from '@automapper/classes'
import { UpdateAddressRequest } from './update-address.request'

export default class UpdateCustomerRequest {
  @AutoMap()
  name: string
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
  @AutoMap(() => UpdateAddressRequest)
  addresses?: UpdateAddressRequest[]
  updatedById: string
}