import { ModelStatic } from 'sequelize';
import IMatchService from '../interfaces/IMatchService';
import MatchesModel from '../database/models/MatchesModel';
import TeamsModel from '../database/models/TeamsModel';
import IMatch from '../interfaces/IMatch';

export default class MatchesService implements IMatchService {
  protected model: ModelStatic<MatchesModel> = MatchesModel;
  async getAll(): Promise<MatchesModel[]> {
    return this.model.findAll({
      include: [
        { model: TeamsModel, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: TeamsModel, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
  }

  async finishMatch(id: number): Promise<void> {
    await this.model.update({ inProgress: false }, { where: { id } });
  }

  async updateMatch(id: number, homeTeamGoals: number, awayTeamGoals: number): Promise<void> {
    await this.model.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
  }

  async createMatch(
    homeTeamId: number,
    homeTeamGoals: number,
    awayTeamId: number,
    awayTeamGoals: number,
  ): Promise<IMatch> {
    const match = await this.model.create({ homeTeamId,
      homeTeamGoals,
      awayTeamId,
      awayTeamGoals,
      inProgress: true });
    console.log(match);
    return match;
  }
}
