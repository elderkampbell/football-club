import { ModelStatic, QueryTypes } from 'sequelize';
import ILeaderboardService from '../interfaces/ILeaderboardService';
import Matches from '../database/models/MatchesModel';

export default class LeaderboardService implements ILeaderboardService {
  protected model: ModelStatic<Matches> = Matches;
  async getAll(): Promise<object[] | undefined> {
    const totalPoints = `SUM(CASE WHEN m.home_team_goals > m.away_team_goals THEN 3
      WHEN m.home_team_goals = m.away_team_goals THEN 1 ELSE 0 END)`;
    const query = `SELECT 
    t.team_name AS name, CAST(${totalPoints} AS SIGNED) AS totalPoints, COUNT(*) AS totalGames,
    SUM(CASE WHEN m.home_team_goals > m.away_team_goals THEN 1 ELSE 0 END) AS totalVictories,
    SUM(CASE WHEN m.home_team_goals = m.away_team_goals THEN 1 ELSE 0 END) AS totalDraws,
    SUM(CASE WHEN m.home_team_goals < m.away_team_goals THEN 1 ELSE 0 END) AS totalLosses,
    SUM(m.home_team_goals) AS goalsFavor,
    SUM(m.away_team_goals) AS goalsOwn,
    SUM(m.home_team_goals - m.away_team_goals) AS goalsBalance,
    CAST(${totalPoints} / (COUNT(*) * 3) * 100 AS DECIMAL(6,2)) AS efficiency
    FROM TRYBE_FUTEBOL_CLUBE.matches AS m 
    LEFT JOIN TRYBE_FUTEBOL_CLUBE.teams AS t ON t.id = m.home_team_id 
    WHERE m.in_progress = FALSE
    GROUP BY t.team_name 
ORDER BY totalPoints DESC, totalVictories DESC, goalsBalance DESC, goalsFavor DESC, goalsOwn DESC;`;
    const result = await this.model.sequelize?.query(query, { type: QueryTypes.SELECT });
    return result;
  }
}
