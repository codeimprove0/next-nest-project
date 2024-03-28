import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm'

@Entity({name:'ib_users'})
export class User{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    role_id:number;

    @Column()
    name:string;

    @Column()
    email:string;

    @Column()
    mobile:string;

    @Column()
    password:string;

    @Column()
    status:number;

    @Column()
    created_at: Date

    @Column()
    updated_at: Date 
}