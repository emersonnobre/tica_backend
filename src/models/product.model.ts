import { AutoMap } from '@automapper/classes'
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm'
import { UpdateProductRequest } from '../util/requests/product/update-product.request'
import Transaction from './transaction.model'
import Employee from './employee.model'

@Entity()
export default class Product {
  @AutoMap()
  @PrimaryColumn()
  id: string
  @AutoMap()
  @Column({ length: 100 })
  name: string
  @AutoMap()
  @Column('decimal')
  purchasePrice: number
  @AutoMap()
  @Column('decimal', { nullable: true })
  salePrice?: number
  @AutoMap()
  @Column('integer')
  stock: number
  @AutoMap()
  @Column('bool', { default: false })
  isFeedstock: boolean
  @AutoMap()
  @Column({ length: 100 })
  barcode: string
  @AutoMap()
  @Column('integer', { nullable: true })
  category: number // todo: implementar categoria
  @AutoMap()
  @Column('boolean', { default: true })
  active: boolean
  @AutoMap()
  @Column('timestamp', { nullable: true })
  createdAt: Date
  @AutoMap(() => Employee)
  @ManyToOne(() => Employee, { eager: true })
  createdBy: Employee
  @AutoMap()
  @Column('timestamp', { nullable: true })
  updatedAt?: Date
  @AutoMap(() => Employee)
  @ManyToOne(() => Employee)
  updatedBy?: Employee
  @OneToMany(() => Transaction, (transaction) => transaction.product)
  transactions: Transaction[]

  public inactivate() {
    this.active = false
  }

  public update(updatedProduct: UpdateProductRequest, employee: Employee) {
    this.name = updatedProduct.name
    this.purchasePrice = updatedProduct.purchasePrice
    this.salePrice = updatedProduct.salePrice
    this.isFeedstock = updatedProduct.isFeedstock
    this.category = updatedProduct.categoryId

    this.auditUpdate(employee)
  }

  public auditUpdate(employee: Employee) {
    this.updatedBy = employee
    this.updatedAt = new Date()
  }
}