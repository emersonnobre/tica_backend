import { AutoMap } from '@automapper/classes'

export class GetAddressResponse {
  @AutoMap()
  id: number
  @AutoMap()
  street: string
  @AutoMap()
  neighborhood: string
  @AutoMap()
  cep?: string
}