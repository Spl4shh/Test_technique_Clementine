import { Team } from "@/model/team.model";
import { TeamDto } from "../team.dto";

export class TeamMapper {
      toTeamDto(team: Team): TeamDto {
            const teamDto = new TeamDto();

            teamDto.id = team.id;
            teamDto.name = team.name;

            return teamDto;
      }
      
      toTeam(teamDto: TeamDto): Team {
            return {
                  id: teamDto.id,
                  name: teamDto.name
            }
      }
}