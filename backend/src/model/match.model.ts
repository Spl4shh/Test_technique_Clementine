import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Team } from "./team.model";
import { Tournament } from "./tournament.model";

@Entity()
export class Match {
      @PrimaryGeneratedColumn()
      id: number;

      @ManyToOne(() => Team, { eager: true })
      @JoinColumn()
      aTeam: Team;

      @ManyToOne(() => Team, { eager: true })
      @JoinColumn()
      bTeam: Team;

      @Column({ nullable: true })
      scoreA?: number;

      @Column({ nullable: true })
      scoreB?: number;
      
      @ManyToOne(() => Tournament)
      tournament: Tournament;

      constructor(aTeam: Team, bTeam: Team) {
            this.aTeam = aTeam;
            this.bTeam = bTeam;
      }
}