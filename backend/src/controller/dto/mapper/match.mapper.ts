import { Match } from "src/model/match.model";
import { MatchDto } from "../match.dto";
import { Inject } from "@nestjs/common";
import { TeamMapper } from "./team.mapper";

export class MatchMapper {
      constructor(@Inject(TeamMapper) 
                  private teamMapper: TeamMapper) {}

      toMatchDto(match: Match): MatchDto {
            const matchDto = new MatchDto();

            matchDto.id = match.id;
            matchDto.aTeam = this.teamMapper.toTeamDto(match.aTeam);
            matchDto.bTeam = this.teamMapper.toTeamDto(match.bTeam);
            matchDto.scoreA = match.scoreA;
            matchDto.scoreB = match.scoreB;

            return matchDto;
      }

      toMatch(matchDto: MatchDto): Match {
            const match = new Match(this.teamMapper.toTeam(matchDto.aTeam),
                                    this.teamMapper.toTeam(matchDto.bTeam));

            match.id = matchDto.id;
            match.scoreA = matchDto.scoreA;
            match.scoreB = matchDto.scoreB;

            return match;
      }
}