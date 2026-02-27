import { onMounted, provide } from "vue";
import { TeamMapper } from "./dto/mapper/team.mapper";
import { MatchMapper } from "./dto/mapper/match.mapper";
import { TournamentMapper } from "./dto/mapper/tournament.mapper";

export function appRun() {
  const teamMapper = new TeamMapper()
  const matchMapper = new MatchMapper(teamMapper)
  const tournamentMapper = new TournamentMapper(teamMapper, matchMapper)

  provide("teamMapper", teamMapper)
  provide("matchMapper", matchMapper)
  provide("tournamentMapper", tournamentMapper)

  console.log("App is running");
}