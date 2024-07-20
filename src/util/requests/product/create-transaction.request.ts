import { AutoMap } from '@automapper/classes'

export default class CreateTransactionRequest {
    @AutoMap()
    reason: string
    @AutoMap()
    quantity: number
    @AutoMap()
    type: number
    createdById: string
}