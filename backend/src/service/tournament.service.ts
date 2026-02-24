import { Match } from "src/model/match.model";
import { Team } from "src/model/team.model";
import { Tournament } from "src/model/tournament.model";

export class TournamentService {
	/**
	 * getRanking returns the ranking of teams in a tournament, sorted by points (descending).
	 * A team gets 3 points for a win, 1 point for a draw, and 0 points for a loss.
	 * 
	 * @param tournament The tournament for which to calculate the ranking.
	 * @returns An array of Team sorted by points in descending order.
	 */
	public getRanking(tournament: Tournament): { team: Team; points: number }[] {
		const points = new Map<number, { team: Team; points: number }>();

		for (const team of tournament.teams) {
			points.set(team.id, {
				team: team,
				points: 0
			});
		}

		for (const match of tournament.matches) {
			const pointA = points.get(match.teamA.id)!;
			const pointB = points.get(match.teamB.id)!;

			if (match.scoreA !== undefined && match.scoreB !== undefined) {
				if (match.scoreA > match.scoreB) {
					pointA.points += 3;
				} else if (match.scoreA < match.scoreB) {
					pointB.points += 3;
				} else {
					pointA.points += 1;
					pointB.points += 1;
				}
			}
		}

		return Array.from(points.values())
				.sort((x, y) => y.points - x.points);
	}

	public generateMatches(tournament: Tournament): void {
		const teams = tournament.teams;
		tournament.matches = [];
	
		for (let i = 0; i < teams.length; i++) {
			for (let j = i + 1; j < teams.length; j++) {
				const match = new Match(teams[i], teams[j]);

				tournament.matches.push(match);
			}
		}
	}
}