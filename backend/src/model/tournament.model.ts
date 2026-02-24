import { Match } from "./match.model";
import { Team } from "./team.model";
import { User } from "./user.model";

export class Tournament {
      public id: number;
      public name: string;
      public date: Date;
      public description: string | null = null;
      public creator: User;
      public teams: Team[] = [];
      public matches: Match[] = [];

      public addTeam(team: Team): void {
            if (!this.teams.includes(team)) {
                  this.teams.push(team);
            }
      }
}