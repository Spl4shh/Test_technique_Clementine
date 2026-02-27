<script setup lang="ts">
import { tournamentsScript } from './Tournaments';

const { 
      tabHeader, tournaments, 
      goToCreateTournament, formatDate
} = tournamentsScript()
</script>

<template>
      <v-btn @click="goToCreateTournament">
            Nouveau tournoi
      </v-btn>
      <v-container>
            <v-card>
                  <v-card-title>Liste des tournois</v-card-title>

                  <v-data-table :headers="tabHeader" 
                                :items="tournaments" 
                                class="elevation-1"
                                no-data-text="Aucun tournoi">
                        <template #item.date="{ item }">
                              {{ formatDate(item.date) }}
                        </template>

                        <template #item.details="{ item }">
                              <v-btn color="primary" :to="`/tournaments/${item.id}`" text>
                                    Détails
                              </v-btn>
                        </template>
                  </v-data-table>
            </v-card>
      </v-container>
</template>