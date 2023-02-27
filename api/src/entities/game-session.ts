import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Attendance } from "./attendance";
import { Game } from "./game";
import { SessionDate } from "./session-date";

@Entity()
export class GameSession{
    @PrimaryGeneratedColumn()
    id?: number;
    
    @Column()
    title?: string;
    
    @Column()
    note?:string;
    
    @Column()
    invURL?:string;

    @Column({type: "timestamp"})
    fromTime?: Date;

    @Column({type: "timestamp"})
    toTime?: Date;
    
    @ManyToMany(() => Attendance, (attendance) => attendance.gameSessions, {
        cascade: true
    })
    @JoinTable()
    attendances?: Attendance[];

    @ManyToMany(() => Game, (game) => game.gameSessions,{
        cascade: true,
    })
    @JoinTable()
    games?: Game[];

    @ManyToMany(() => SessionDate, (sd) => sd.gameSessions)
    @JoinTable()
    sessionDates?: SessionDate[]
}
