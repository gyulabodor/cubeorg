import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "../enums/roles";
import { Comment } from "./comment";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id?: number;
    
    @Column()
    email?: string;
    
    @Column()
    password?: string;
    
    @Column({type: "timestamp"})
    registerDate?: Date;
    
    @Column({
        type: "enum",
        enum: Role,
        default: Role.GUEST
    })
    role?: Role;

    @ManyToMany(() => User, (user) => user.comments)
    @JoinTable()
    comments?: Comment[]
}