import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export default class Product {
  @PrimaryColumn()
  id: string
  @Column({ length: 100 })
  name: string
  @Column('decimal')
  purchasePrice: number
  @Column('decimal', { nullable: true })
  salePrice?: number
  @Column('integer')
  stock: number
  @Column('bool')
  isFeedstock: boolean
  @Column({ length: 100 })
  barcode: string
  @Column('integer', { nullable: true })
  category: number // todo: implementar categoria
  @Column('timestamp', { nullable: true })
  createdAt: Date
  @Column('integer')
  createdBy: number // todo: implementar funcionario
  @Column('timestamp', { nullable: true })
  updatedAt?: Date
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