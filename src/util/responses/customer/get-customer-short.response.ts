import { AutoMap } from '@automapper/classes'

export default class GetCustomerShortResponse {
  @AutoMap()
  id: number
  @AutoMap()
  name: string
  @AutoMap()
  cpf: string
  @AutoMap()
  createdAt: string
  @AutoMap()
  updatedAt: string
}