import { Match } from "src/model/match.model";
import { Team } from "src/model/team.model";
import { Tournament } from "src/model/tournament.model";

export class TournamentService {
	/**
	 * 
	 * @param tournament 
	 * @returns 
	 */
	public saveTournament(tournament: Tournament): Tournament {
		// TODO : save tournament in database
		return tournament;
	}

	/**
	 * 
	 * @param id 
	 * @returns 
	 */
	public getTournament(id: number): Tournament {
		// TODO : get tournament from database
		try {
			return new Tournament();
		} catch (error) {
			throw new Error(`Tournament with id ${id} not found`);
		}
	}

	/**
	 * @return An array of all tournaments.
	 */
	public getAllTournaments(): Tournament[] {
		// TODO : get all tournaments from database
		return [];
	}

	/**
	 * returns the ranking of teams in a tournament, sorted by points (descending).
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

	/**
	 * Generates matches for a tournament based on the teams registered in the tournament.
	 * 
	 * @param tournament The tournament for which to generate matches.
	 * @return The tournament with the generated matches.
	 * @throws Error if the tournament has less than 2 teams.
	 */
	public generateMatches(tournament: Tournament): Tournament {
		const teams = tournament.teams;
		tournament.matches = [];
	
		if (teams.length < 2) {
			throw new Error("At least 2 teams are required to generate matches");
		}

		for (let i = 0; i < teams.length; i++) {
			for (let j = i + 1; j < teams.length; j++) {
				const match = new Match(teams[i], teams[j]);

				tournament.matches.push(match);
			}
		}

		this.saveTournament(tournament);

		return tournament;
	}
}