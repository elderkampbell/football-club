import { Request, Response } from 'express';
import MatchesService from '../services/MatchesService';
import IMatchService from '../interfaces/IMatchService';

export default class TeamsController {
  private _service: IMatchService = new MatchesService();

  getAll = async (req: Request, res: Response) => {
    const result = await this._service.getAll();
    return res.status(200).json(result);
  };
}
