import Matches from '../database/models/MatchesModel';
import IMatch from './IMatch';

export default interface IMatchService {
  getAll(): Promise<Matches[]>

  finishMatch(id: number): Promise<void>

  updateMatch(id: number, homeTeamGoals: number, awayTeamGoals: number): Promise<void>

  createMatch(homeTeamId: number,
    homeTeamGoals: number,
    awayTeamId: number,
    awayTeamGoals: number
  ): Promise<IMatch>

}
