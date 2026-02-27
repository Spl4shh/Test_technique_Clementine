import { inject } from "vue";
import { MatchDto } from "../match.dto";
import { TeamMapper } from "./team.mapper";
import { Match } from "@/model/match.model";

export class MatchMapper {
      constructor(teamMapper: TeamMapper) {
            this.teamMapper = teamMapper;
      }

      private teamMapper: TeamMapper;

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
            return {
                  id: matchDto.id,
                  aTeam: this.teamMapper.toTeam(matchDto.aTeam),
                  bTeam: this.teamMapper.toTeam(matchDto.bTeam),
                  scoreA: matchDto.scoreA,
                  scoreB: matchDto.scoreB,
            };
      }
}