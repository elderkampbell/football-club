import { Request, Response } from 'express';
import LeaderboardService from '../services/LeaderboardService';

export default class LeaderboardController {
  private _service: LeaderboardService;
  constructor(service: LeaderboardService) {
    this._service = service;
  }

  async getAll(req: Request, res: Response) {
    const results = await this._service.getAll();
    return res.status(200).json(results);
  }
}
