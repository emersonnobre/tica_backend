import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export default class User {
    @PrimaryColumn()
    id: string = ''
    @Column({ length: 100 })
    username: string = ''
    @Column()
    password: string = ''

    constructor(id: string, username: string, password: string) {
        this.id = id
        this.username = username
        this.password = password
    }
}