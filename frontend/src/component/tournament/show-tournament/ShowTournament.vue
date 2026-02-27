<script setup lang="ts">
import { showTournamentScript } from "@/component/tournament/show-tournament/ShowTournament";
import { dateFormater } from "@/utils/date-formater.utils";

const { 
      tournament,
      goToTournaments,
} = showTournamentScript();
const { formatDate } = dateFormater();
</script>

<template>
      <v-btn @click="goToTournaments">
            Liste des tournois
      </v-btn>
  <v-container v-if="tournament">

    <v-card class="pa-4">

      <v-card-title class="text-h5">
        {{ tournament.name }}
      </v-card-title>

      <v-card-subtitle>
        {{ formatDate(tournament.date) }}
      </v-card-subtitle>

      <v-card-text>
        <p>{{ tournament.description }}</p>
      </v-card-text>

    </v-card>

    <!-- Équipes -->
    <v-card class="mt-4">
      <v-card-title>Équipes</v-card-title>

      <v-list v-if="tournament.teams.length > 0">
        <v-list-item
          v-for="team in tournament.teams"
          :key="team.id"
        >
          {{ team.name }}
        </v-list-item>
      </v-list>

      <v-card-text v-else>
        Aucune équipe
      </v-card-text>
    </v-card>

    <!-- Matchs -->
    <v-card class="mt-4">
      <v-card-title>Matchs</v-card-title>

      <v-table v-if="tournament.matches.length > 0">
        <thead>
          <tr>
            <th>Équipe A</th>
            <th>Score</th>
            <th>Équipe B</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="match in tournament.matches" :key="match.id">
            <td>{{ match.aTeam.name }}</td>
            <td>{{ match.scoreA }} - {{ match.scoreB }}</td>
            <td>{{ match.bTeam.name }}</td>
          </tr>
        </tbody>
      </v-table>

      <v-card-text v-else>
        Aucun match
      </v-card-text>
    </v-card>

  </v-container>
</template>