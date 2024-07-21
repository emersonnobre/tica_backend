import { AutoMap } from '@automapper/classes'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import Customer from './customer.model'

@Entity()
export default class Address {
  @AutoMap()
  @PrimaryGeneratedColumn('identity')
  id: number
  @AutoMap()
  @Column({ length: 200 })
  street: string
  @AutoMap()
  @Column({ length: 60 })
  neighborhood: string
  @AutoMap()
  @Column({ length: 8, nullable: true })
  cep?: string
  @AutoMap(() => Customer)
  @ManyToOne(() => Customer, (customer) => customer.addresses)
  customer: Customer
}