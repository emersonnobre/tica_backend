import { AutoMap } from '@automapper/classes'
import { Column, Entity, PrimaryColumn } from 'typeorm'

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
  @Column('bool')
  isFeedstock: boolean
  @AutoMap()
  @Column({ length: 100 })
  barcode: string
  @AutoMap()
  @Column('integer', { nullable: true })
  category: number // todo: implementar categoria
  @AutoMap()
  @Column('timestamp', { nullable: true })
  createdAt: Date
  @AutoMap()
  @Column('integer')
  createdBy: number // todo: implementar funcionario
  @AutoMap()
  @Column('timestamp', { nullable: true })
  updatedAt?: Date
  @AutoMap()
  @Column('integer', { nullable: true })
  updatedBy?: number // todo: implementar funcionario

  constructor(id: string, 
              name: string, 
              purchasePrice: number, 
              stock: number, 
              isFeedstock: boolean,
              category: number,
              createdBy: number, 
              salePrice?: number) 
  {
    this.id = id
    this.name = name
    this.purchasePrice = purchasePrice
    this.salePrice = salePrice
    this.stock = stock
    this.barcode = 'barcode teste' // todo: implementar lógica de código de barras
    this.createdAt = new Date()
    this.isFeedstock = isFeedstock
    this.category = category
    this.createdBy = createdBy
  }
}