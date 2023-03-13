import { ModelStatic, QueryTypes } from 'sequelize';
import ILeaderboardService from '../interfaces/ILeaderboardService';
import Matches from '../database/models/MatchesModel';

export default class LeaderboardService implements ILeaderboardService {
  protected model: ModelStatic<Matches> = Matches;
  async getAll(): Promise<object[] | undefined> {
    const query = `SELECT
  t.team_name AS name,
  CAST(SUM(IF(m.home_team_goals > m.away_team_goals, 3, 0) +
  IF(m.home_team_goals = m.away_team_goals, 1, 0)) AS SIGNED) AS totalPoints,
  COUNT(m.home_team_id) AS totalGames,
  CAST(SUM(IF(m.home_team_goals > m.away_team_goals, 1, 0)) AS SIGNED) AS totalVictories,
  CAST(SUM(IF(m.home_team_goals = m.away_team_goals, 1, 0)) AS SIGNED) AS totalDraws,
  CAST(SUM(IF(m.home_team_goals < m.away_team_goals, 1, 0)) AS SIGNED) AS totalLosses,
  CAST(SUM(m.home_team_goals) AS SIGNED) AS goalsFavor,
  CAST(SUM(m.away_team_goals) AS SIGNED) AS goalsOwn
  FROM TRYBE_FUTEBOL_CLUBE.matches m
  LEFT JOIN TRYBE_FUTEBOL_CLUBE.teams t
  ON t.id = m.home_team_id
  WHERE m.in_progress = false
  GROUP BY t.team_name;`;
    const result = await this.model.sequelize?.query(query, { type: QueryTypes.SELECT });
    return result;
  }
}
