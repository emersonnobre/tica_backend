import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm'
import { Category } from '../util/enum/category.enum'
import { Priority } from '../util/enum/priority.enum'
import User from './user.model'

@Entity()
export default class Task {
    @PrimaryColumn()
    id: string
    @Column({ length: 100 })
    title: string
    @Column()
    done: boolean
    @Column('int')
    priority: Priority
    @Column('int')
    category: Category
    @ManyToOne(() => User, (user) => user.tasks)
    owner: User
    
    constructor (id: string, title: string, priority: Priority, category: Category, owner: User) {
        this.id = id
        this.title = title
        this.done = false
        this.priority = priority
        this.category = category
        this.owner = owner
    }
}