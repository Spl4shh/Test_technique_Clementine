import { MatchMapper } from "@/dto/mapper/match.mapper";
import { TournamentMapper } from "@/dto/mapper/tournament.mapper";
import { TournamentDto } from "@/dto/tournament.dto";
import { Team } from "@/model/team.model";
import { Tournament } from "@/model/tournament.model";
import { router } from "@/router"
import { inject, onMounted, ref } from "vue";

export function showTournamentScript() {
      const tournamentId = Number(router.currentRoute.value.params.id)
      const tournament = ref<Tournament>();
      const teamsRanking = ref<{ team: Team, points: number }[]>([]);
      const tournamentMapper = inject("tournamentMapper") as TournamentMapper;
      const matchMapper = inject("matchMapper") as MatchMapper;

      function goToTournaments() {
            router.push("/tournaments")
      }

      function fetchTournament() {
            fetch(`http://localhost:8081/api/tournaments/${tournamentId}`, {
                  method: "GET"
            })
                  .then(async response => await response.json() as TournamentDto)
                  .then(tournamentDto => {
                        tournament.value = tournamentMapper.toTournament(tournamentDto);
                  })
      }

      function generateMatches() {
            fetch(`http://localhost:8081/api/tournaments/${tournamentId}/generate-matches`, {
                  method: "POST"
            }).then(response => {
                  if (response.ok) {
                        fetchTournament();
                  }
            })
      }

      function fetchTeamsRanking() {
            fetch(`http://localhost:8081/api/tournaments/${tournamentId}/ranking`, {
                  method: "GET"
            }).then(async response => await response.json() as { team: Team, points: number }[])
             .then(teamsRankingData => {
                  teamsRanking.value = teamsRankingData;
            })
      }

      function updateMatches() {
            tournament.value?.matches.forEach(match => {
                  if (match.scoreA !== null && match.scoreB !== null) {
                        fetch(`http://localhost:8081/api/matches/${match.id}`, {
                              method: "PATCH",
                              headers: {
                                    "Content-Type": "application/json"
                              },
                              body: JSON.stringify(matchMapper.toMatchDto(match))
                        }).then(response => {
                              if (!response.ok) {
                                    console.error("Failed to update match", match.id);
                              }
                        })
                  }
            });
      }

      onMounted(() => {
            fetchTournament();
            fetchTeamsRanking();
      })

      return {
            teamsRanking,
            tournament,
            goToTournaments,
            generateMatches,
            updateMatches
      }
}
