import { Controller, Get, Inject } from "@nestjs/common";
import { TeamService } from "src/service/team.service";
import { TeamMapper } from "./dto/mapper/team.mapper";

@Controller('teams')
export class TeamController {
      constructor(@Inject(TeamService) 
                  private teamService: TeamService,
                  @Inject(TeamMapper) 
                  private teamMapper: TeamMapper) {}

      @Get()
      async getAllTeams() {
            return (await this.teamService.getAllTeams()).map(team => this.teamMapper.toTeamDto(team));
      }
}
