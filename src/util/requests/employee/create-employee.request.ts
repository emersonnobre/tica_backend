import { AutoMap } from '@automapper/classes'

export default class CreateEmployeeRequest {
  @AutoMap()
  name: string
}