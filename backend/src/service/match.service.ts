import { Match } from "src/model/match.model";

export class MatchService {

      public saveMatch(match: Match): void {
        // TODO : save match in database
      }

      public updateMatchResult(match: Match, team1Score: number, team2Score: number): void {
            if (team1Score < 0 || team2Score < 0) {
                throw new Error("Scores must be positive numbers");
            }
            
            match.scoreA = team1Score;
            match.scoreB = team2Score;

            this.saveMatch(match);
      }
}