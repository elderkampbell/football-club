import express = require('express');
import MatchesController from '../controllers/MatchesController';

const matchesRouter = express.Router();

const matchesController = new MatchesController();

matchesRouter.get('/', matchesController.getAll);

export default matchesRouter;
