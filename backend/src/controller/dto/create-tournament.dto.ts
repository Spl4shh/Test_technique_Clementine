import { Type } from "class-transformer";
import { IsDate } from "class-validator";

export class CreateTournamentDto {
      public name: string;

      @Type(() => Date)
      @IsDate()
      public date: Date;
      
      public description: string;
}