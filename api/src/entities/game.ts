import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { GameSession } from "./game-session";

@Entity()
export class Game{
    @PrimaryGeneratedColumn()
    id?:number;

    @Column()
    name?: string;

    @Column()
    imageURL?: string;

    @ManyToMany(() => GameSession, (gs) => gs.games)
    @JoinTable()
    gameSessions?: GameSession[];
}