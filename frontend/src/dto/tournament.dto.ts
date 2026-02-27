import { TeamDto } from "./team.dto";
import { MatchDto } from "./match.dto";

export class TournamentDto {
      
      public id?: number;
      
      public name: string;

      public date: string;
      
      public description?: string;

      public teams: TeamDto[];

      public matches: MatchDto[];
}