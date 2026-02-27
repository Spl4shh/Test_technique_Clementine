import { Team } from "./team.model";

export interface Match {
    id: number;
    aTeam: Team;
    bTeam: Team;
    scoreA: number;
    scoreB: number;
}