import express = require('express');
import MatchesController from '../controllers/MatchesController';
import tokenValidation from '../middlewares/TokenValidation';

const matchesRouter = express.Router();

const matchesController = new MatchesController();

matchesRouter.get('/', matchesController.getAll);
matchesRouter.patch('/:id/finish', tokenValidation, matchesController.finishMatch);

export default matchesRouter;
