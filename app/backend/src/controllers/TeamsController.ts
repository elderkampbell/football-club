import { Request, Response } from 'express';
import TeamsService from '../services/TeamsService';
import ITeamServices from '../interfaces/ITeamService';

export default class TeamsController {
  private _service: ITeamServices = new TeamsService();

  getAll = async (req: Request, res: Response) => {
    const result = await this._service.getAll();
    return res.status(200).json(result);
  };

  getById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const result = await this._service.getById(id);

    if (!result) {
      return res.status(404).json({
        message: 'Team not found',
      });
    }
    return res.status(200).json(result);
  };
}
