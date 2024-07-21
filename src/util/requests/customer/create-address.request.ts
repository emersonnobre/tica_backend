import { AutoMap } from '@automapper/classes'

export class CreateAddressRequest {
  @AutoMap()
  street: string
  @AutoMap()
  neighborhood: string
  @AutoMap()
  cep?: string
}