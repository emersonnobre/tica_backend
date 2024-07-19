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
    @Column({ length: 100 })
    barcode: string
    @Column('timestamp', { nullable: true })
    createdAt: Date
    @Column('integer')
    createdBy: number
    @Column('bool')
    isFeedstock: boolean
    @Column('timestamp', { nullable: true })
    updatedAt?: boolean
    @Column('integer', { nullable: true })
    updatedBy?: number
    
    constructor(id: string, name: string, purchasePrice: number, stock: number, isFeedstock: boolean, createdBy: number, salePrice?: number) {
        this.id = id
        this.name = name
        this.purchasePrice = purchasePrice
        this.salePrice = salePrice
        this.stock = stock
        this.barcode = 'barcode teste' // todo: implementar lógica de código de barras
        this.createdAt = new Date()
        this.isFeedstock = isFeedstock
        this.createdBy = createdBy
    }
}