import express = require('express');
import teamsRouter from './TeamsRoute';
import loginRouter from './LoginRoute';
import matchesRouter from './MatchesRoute';

const router = express.Router();
router.use('/teams', teamsRouter);
router.use('/login', loginRouter);
router.use('/matches', matchesRouter);

export default router;
