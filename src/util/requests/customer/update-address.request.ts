import { AutoMap } from '@automapper/classes'

export class UpdateAddressRequest {
  @AutoMap()
  id?: number
  @AutoMap()
  street: string
  @AutoMap()
  neighborhood: string
  @AutoMap()
  cep?: string
}