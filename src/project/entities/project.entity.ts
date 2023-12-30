import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Project {
       //主键列
       @PrimaryGeneratedColumn({type:'bigint',unsigned:true,})
       id: number
   
       @Column({name:'name'})
       name: string
   
       @Column({name:'value'})
       value: number
   
}
