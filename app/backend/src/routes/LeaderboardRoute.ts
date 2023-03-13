import express = require('express');
import { Request, Response } from 'express';
import LeaderboardService from '../services/LeaderboardService';
import LeaderboardController from '../controllers/LeaderboardController';

const LeaderboardRouter = express.Router();
const leaderboardService = new LeaderboardService();
const leaderboardController = new LeaderboardController(leaderboardService);

LeaderboardRouter
  .get('/home', (req: Request, res: Response) => leaderboardController
    .getAll(req, res));

export default LeaderboardRouter;
