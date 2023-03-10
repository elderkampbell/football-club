import express = require('express');
import teamsRouter from './TeamsRoute';

const router = express.Router();
router.use('/teams', teamsRouter);

export default router;
