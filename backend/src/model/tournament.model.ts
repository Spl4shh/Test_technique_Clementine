import { Match } from "./match.model";
import { Team } from "./team.model";
import { User } from "./user.model";

export class Tournament {
      id: number;
      name: string;
      date: Date;
      description: string | null = null;
      creator: User;
      teams: Team[] = [];
      matches: Match[] = [];

      addTeam(team: Team): void {
            if (!this.teams.includes(team)) {
                  this.teams.push(team);
            }
      }
}