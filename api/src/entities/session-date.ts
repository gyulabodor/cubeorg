import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { GameSession } from "./game-session";

@Entity()
export class SessionDate{
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({type: "timestamp"})
    date?: Date;

    @ManyToMany(() => GameSession, (gs) => gs.sessionDates)
    @JoinTable()
    gameSessions?: GameSession[];
}