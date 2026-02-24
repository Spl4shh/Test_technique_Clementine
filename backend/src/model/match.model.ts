import { Team } from "./team.model";

export class Match {
      id: number;
      teamA: Team;
      teamB: Team;
      scoreA?: number;
      scoreB?: number;

      constructor(teamA: Team, teamB: Team) {
            this.teamA = teamA;
            this.teamB = teamB;
      }
}