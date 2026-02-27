import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import CreateTournament from "@/component/tournament/create-tournament/CreateTournament.vue"
import Tournaments from "@/component/tournament/Tournaments.vue"
import ShowTournament from "@/component/tournament/show-tournament/ShowTournament.vue"

const routes: RouteRecordRaw[] = [
      {
            path: "/tournaments",
            component: Tournaments,
      },
      {
            path: "/tournaments/:id",
            component: ShowTournament,
      },
      {
            path: "/tournaments/create",
            component: CreateTournament
      },
      {
            path: '/:pathMatch(.*)*',
            redirect: '/tournaments' 
      }
]

export const router = createRouter({
      history: createWebHistory(),
      routes
})