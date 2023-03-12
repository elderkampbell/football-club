import express = require('express');
import MatchesController from '../controllers/MatchesController';
import tokenValidation from '../middlewares/TokenValidation';
import IdValidation from '../middlewares/IdValidation';

const matchesRouter = express.Router();

const matchesController = new MatchesController();

matchesRouter.get('/', matchesController.getAll);
matchesRouter.patch('/:id/finish', tokenValidation, matchesController.finishMatch);
matchesRouter.patch('/:id', tokenValidation, matchesController.updateMatch);
matchesRouter.post('/', tokenValidation, IdValidation, matchesController.createMatch);

export default matchesRouter;
