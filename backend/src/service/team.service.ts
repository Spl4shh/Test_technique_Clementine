import { InjectRepository } from "@nestjs/typeorm";
import { Team } from "src/model/team.model";
import { Repository } from "typeorm";

export class TeamService {
      constructor(
            @InjectRepository(Team)
            private teamRepo: Repository<Team>,
      ) {}

      getTeamByName(name: string) {
            return this.teamRepo.findOne({
                  where: { name: name }
            });
      }

      getAllTeams() {
            return this.teamRepo.find();
      }
}