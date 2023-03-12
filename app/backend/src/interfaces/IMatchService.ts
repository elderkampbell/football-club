import Matches from '../database/models/MatchesModel';

export default interface IMatchService {
  getAll(): Promise<Matches[]>
}
