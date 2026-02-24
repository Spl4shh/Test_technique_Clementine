import { Match } from "./match.model";
import { Team } from "./team.model";

export class Tournament {
      id: number;
      name: string;
      date: Date;
      description: string;
      teams: Team[];
      matches: Match[];
}