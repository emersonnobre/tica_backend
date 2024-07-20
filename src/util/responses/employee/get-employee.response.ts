import { AutoMap } from '@automapper/classes'

export default class GetEmployeeResponse {
  @AutoMap()
  id: string
  @AutoMap()
  name: string
  @AutoMap()
  createdAt: Date
}