import { ModelStatic } from 'sequelize';
import IMatchService from '../interfaces/IMatchService';
import MatchesModel from '../database/models/MatchesModel';
import TeamsModel from '../database/models/TeamsModel';

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
}
