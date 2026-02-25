import { Min, IsNumber } from "class-validator";
import { TeamDto } from "./team.dto";

export class MatchDto {
      public id: number;

      public aTeam: TeamDto;

      public bTeam: TeamDto;

      @IsNumber()
      @Min(0)
      public scoreA?: number;

      @IsNumber()
      @Min(0)
      public scoreB?: number;
}