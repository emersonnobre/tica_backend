import { AutoMap } from '@automapper/classes'
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import Address from './address.model'
import Employee from './employee.model'
import UpdateCustomerRequest from '../util/requests/customer/update-customer.request'

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
  birthday?: Date // todo verificar pq ta salvando com um dia a menos
  @AutoMap()
  @Column({ type: 'timestamp' })
  createdAt: Date
  @AutoMap()
  @Column({ type: 'date', nullable: true })
  updatedAt?: Date // todo alterar para timestamp
  @AutoMap(() => Address)
  @OneToMany(() => Address, (address) => address.customer, { cascade: true })
  addresses: Address[]
  @AutoMap(() => Employee)
  @ManyToOne(() => Employee)
  createdBy: Employee
  @AutoMap(() => Employee)
  @ManyToOne(() => Employee)
  updatedBy?: Employee

  public update(request: UpdateCustomerRequest, employee: Employee) {
    this.name = request.name
    this.email = request.email
    this.birthday = request.birthday ? new Date(request.birthday) : undefined
    this.phone = request.phone
    this.socialMedia = request.socialMedia
    this.wishList = request.wishList

    this.auditUpdate(employee)
  }

  public auditUpdate(employee: Employee) {
    this.updatedBy = employee
    this.updatedAt = new Date()
  }

  public addAddresses(addresses: Address[]) {
    addresses.forEach(address => this.addresses.push(address))
  }

  public removeAddresses(addressesToRemove: Address[]) {
    this.addresses = this.addresses.filter(address => !addressesToRemove.find(x => x.id == address.id))
  }
}