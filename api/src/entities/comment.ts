import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";

@Entity()
export class Comment{
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    message?: string;

    @Column({type: "timestamp"})
    issueDate?: Date;

    @ManyToMany(() => User, (user) => user.comments, {
        cascade: true
    })
    @JoinTable()
    authors?: User[];
}