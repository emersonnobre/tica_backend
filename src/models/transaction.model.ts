import { AutoMap } from '@automapper/classes'
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm'
import Product from './product.model'

@Entity()
export default class Transaction {
  @AutoMap()
  @PrimaryColumn()
  id: string
  @AutoMap()
  @Column({ length: 200 })
  reason: string
  @AutoMap()
  @Column('integer')
  quantity: number
  @AutoMap()
  @Column('bit')
  type: number
  @AutoMap()
  @Column('timestamp')
  createdAt: Date
  @AutoMap()
  @Column('integer')
  createdBy: number // todo: implementar funcionario
  @ManyToOne(() => Product, (product) => product.transactions)
  product: Product

  public setProduct(product: Product) {
    this.product = product
  }
}