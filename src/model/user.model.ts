import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm"
import Task from "./task.model"

@Entity()
export default class User {
    @PrimaryColumn()
    id: string
    @Column({ length: 100 })
    name: string
    @Column({ length: 100 })
    username: string
    @Column({ length: 100 })
    password: string
    @OneToMany(() => Task, (task) => task.owner)
    tasks!: Task[]


    constructor(id: string, name: string, username: string, password: string) {
        this.id = id
        this.name = name
        this.username = username
        this.password = password
    }
}