import { Column, Entity, JoinTable, PrimaryGeneratedColumn, ManyToMany } from "typeorm";
import { AttendanceStatus } from "../enums/attendance-status";
import { GameSession } from "./game-session";

@Entity()
export class Attendance{
    @PrimaryGeneratedColumn()
    id?: number;
    
    @Column({
        type: "enum",
        enum: AttendanceStatus,
        default: AttendanceStatus.PENDING
    })
    status?: AttendanceStatus;

    @Column({type: "timestamp"})
    issueDate?: Date;

    @ManyToMany(() => GameSession, (gs) => gs.attendances)
    @JoinTable()
    gameSessions?: GameSession[];

}