import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export default class Product {
    @PrimaryColumn()
    id: string
    @Column({ length: 100 })
    name: string
    @Column('decimal')
    purchasePrice: number
    @Column('decimal')
    salePrice: number
    @Column('integer')
    stock: number
    @Column({ length: 100 })
    barcode: string
    @Column('timestamp', { nullable: true })
    createdAt: Date
    
    constructor(id: string, name: string, purchasePrice: number, salePrice: number, stock: number) {
        this.id = id
        this.name = name
        this.purchasePrice = purchasePrice
        this.salePrice = salePrice
        this.stock = stock
        this.barcode = 'barcode teste' // todo: implementar lógica de código de barras
        this.createdAt = new Date()
    }
}