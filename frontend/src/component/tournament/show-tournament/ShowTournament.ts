import { TournamentMapper } from "@/dto/mapper/tournament.mapper";
import { TournamentDto } from "@/dto/tournament.dto";
import { Tournament } from "@/model/tournament.model";
import { router } from "@/router"
import { inject, onMounted, ref } from "vue";
import { T } from "vue-router/dist/index-DFCq6eJK";

export function showTournamentScript() {
      const tournamentId = Number(router.currentRoute.value.params.id)
      const tournament = ref<Tournament>(); 
      const tournamentMapper = inject("tournamentMapper") as TournamentMapper;

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

      onMounted(() => {
            fetchTournament();
      }) 

      return {
            tournament,
            goToTournaments
      }
}
