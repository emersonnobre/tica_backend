import { AutoMap } from '@automapper/classes'
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm'
import { UpdateProductRequest } from '../util/requests/product/update-product.request'
import Transaction from './transaction.model'

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
  @AutoMap()
  @Column('integer', { default: 1 })
  createdBy: number // todo: implementar funcionario
  @AutoMap()
  @Column('timestamp', { nullable: true })
  updatedAt?: Date
  @AutoMap()
  @Column('integer', { nullable: true })
  updatedBy?: number // todo: implementar funcionario
  @OneToMany(() => Transaction, (transaction) => transaction.product)
  transactions: Transaction[]

  public inactivate() {
    this.active = false
  }

  public update(updatedProduct: UpdateProductRequest) {
    this.name = updatedProduct.name
    this.purchasePrice = updatedProduct.purchasePrice
    this.salePrice = updatedProduct.salePrice
    this.isFeedstock = updatedProduct.isFeedstock
    this.category = updatedProduct.categoryId

    this.auditUpdate(updatedProduct.updatedBy)
  }

  public auditUpdate(employeeId: number) {
    this.updatedBy = employeeId
    this.updatedAt = new Date()
  }
}