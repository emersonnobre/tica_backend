import { Category } from '../dto/enum/category.enum'
import { Priority } from '../dto/enum/priority.enum'
import User from './user.model'

export default class Task {
    id: string
    title: string
    done: boolean
    priority: Priority
    category: Category
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