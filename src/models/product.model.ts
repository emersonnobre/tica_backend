import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export default class Product {
    @PrimaryColumn()
    id: string
    @Column({ length: 100 })
    name: string
    @Column('decimal')
    costPrice: number
    @Column('decimal')
    sellPrice: number
    @Column('datetime', { nullable: true })
    createdAt: Date
    
    constructor(id: string, name: string, costPrice: number, sellPrice: number) {
        this.id = id
        this.name = name
        this.costPrice = costPrice
        this.sellPrice = sellPrice
        this.createdAt = new Date()
    }
}