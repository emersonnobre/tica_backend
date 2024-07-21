import { AutoMap } from '@automapper/classes'
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import Address from './address.model'
import Employee from './employee.model'

@Entity()
export default class Customer {
  @AutoMap()
  @PrimaryGeneratedColumn('identity')
  id: number
  @AutoMap()
  @Column({ length: 100 })
  name: string
  @AutoMap()
  @Column({ length: 11 })
  cpf: string
  @AutoMap()
  @Column({ length: 20, nullable: true })
  phone?: string
  @AutoMap()
  @Column({ length: 100, nullable: true })
  email?: string
  @AutoMap()
  @Column({ length: 70, nullable: true })
  socialMedia?: string
  @AutoMap()
  @Column({ length: 1000, nullable: true })
  wishList?: string
  @AutoMap()
  @Column({ type: 'date', nullable: true })
  birthday?: Date
  @AutoMap()
  @Column({ type: 'timestamp' })
  createdAt: Date
  @AutoMap()
  @Column({ type: 'date', nullable: true })
  updatedAt?: Date
  @AutoMap(() => Address)
  @OneToMany(() => Address, (address) => address.customer, { cascade: true })
  addresses: Address[]
  @AutoMap(() => Employee)
  @ManyToOne(() => Employee)
  createdBy: Employee
  @AutoMap(() => Employee)
  @ManyToOne(() => Employee)
  updatedBy?: Employee
}