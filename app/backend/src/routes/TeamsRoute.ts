import express = require('express');
import TeamsController from '../controllers/TeamsController';

const teamsRouter = express.Router();

const teamsController = new TeamsController();

teamsRouter.get('/', teamsController.getAll);
teamsRouter.get('/:id', teamsController.getById);

export default teamsRouter;
