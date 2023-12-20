import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
    //主键列
    @PrimaryGeneratedColumn()
    id: number

    @Column({name:'name'})
    name: string

    @Column({name:'password'})
    password: string


}
