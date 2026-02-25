import { Type } from "class-transformer";
import { IsDate } from "class-validator";
import { TeamDto } from "./team.dto";
import { MatchDto } from "./match.dto";

export class TournamentDto {
      public name: string;

      @Type(() => Date)
      @IsDate()
      public date: Date;
      
      public description?: string;

      public teams: TeamDto[];

      public matches: MatchDto[];
}