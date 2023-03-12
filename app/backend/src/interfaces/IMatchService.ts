import Matches from '../database/models/MatchesModel';

export default interface IMatchService {
  getAll(): Promise<Matches[]>
  finishMatch(id: number): Promise<void>
  updateMatch(id: number, homeTeamGoals: number, awayTeamGoals: number): Promise<void>
}
