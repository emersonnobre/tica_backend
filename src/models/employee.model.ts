import { AutoMap } from '@automapper/classes'
import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export default class Employee {
  @AutoMap()
  @PrimaryColumn()
  id: string
  @AutoMap()
  @Column({ length: 100 })
  name: string
  @AutoMap()
  @Column('timestamp with time zone', { nullable: true })
  createdAt: Date

  constructor (id: string) {
    this.id = id
  }
}