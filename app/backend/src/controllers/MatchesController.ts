import { Request, Response } from 'express';
import MatchesService from '../services/MatchesService';
import IMatchService from '../interfaces/IMatchService';

export default class TeamsController {
  private _service: IMatchService = new MatchesService();

  getAll = async (req: Request, res: Response) => {
    const result = await this._service.getAll();
    const matchInProgress = req.query.inProgress;
    if (matchInProgress) {
      return res.status(200).json(result
        .filter((match) => match.inProgress === (matchInProgress === 'true')));
    }

    return res.status(200).json(result);
  };

  finishMatch = async (req: Request, res: Response) => {
    const { id } = req.params;
    const idNumber = Number(id);
    await this._service.finishMatch(idNumber);
    return res.status(200).json({ message: 'Finished' });
  };

  updateMatch = async (req: Request, res: Response) => {
    const { id } = req.params;
    const idNumber = Number(id);
    const { homeTeamGoals, awayTeamGoals } = req.body;
    await this._service.updateMatch(idNumber, homeTeamGoals, awayTeamGoals);
    return res.status(200).json({ message: 'Updated' });
  };

  createMatch = async (req: Request, res: Response) => {
    const { homeTeamId, homeTeamGoals, awayTeamId, awayTeamGoals } = req.body;
    const createdMatch = await this._service.createMatch(
      homeTeamId,
      homeTeamGoals,
      awayTeamId,
      awayTeamGoals,
    );
    return res.status(201).json(createdMatch);
  };
}
