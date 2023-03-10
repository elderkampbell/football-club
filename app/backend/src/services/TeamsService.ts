import { ModelStatic } from 'sequelize';
import ITeam from '../interfaces/ITeam';
import ITeamServices from '../interfaces/ITeamService';
import TeamsModel from '../database/models/TeamsModel';

export default class Team implements ITeamServices {
  protected model: ModelStatic<TeamsModel> = TeamsModel;
  async getAll(): Promise<TeamsModel[]> {
    return this.model.findAll();
  }

  async getById(id: number): Promise<ITeam | null> {
    const team = await this.model.findByPk(id);
    return team;
  }
}
