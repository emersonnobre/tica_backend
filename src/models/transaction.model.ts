import { AutoMap } from '@automapper/classes'
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm'
import Product from './product.model'
import Employee from './employee.model'

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
  @Column('timestamp', { nullable: true})
  createdAt?: Date
  @AutoMap(() => Employee)
  @ManyToOne(() => Employee)
  createdBy: Employee
  @AutoMap(() => Product)
  @ManyToOne(() => Product, (product) => product.transactions, { eager: true })
  product: Product

  public setProduct(product: Product) {
    this.product = product
  }
}