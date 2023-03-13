import express = require('express');
import teamsRouter from './TeamsRoute';
import loginRouter from './LoginRoute';
import matchesRouter from './MatchesRoute';
import leaderboardRouter from './LeaderboardRoute';

const router = express.Router();
router.use('/teams', teamsRouter);
router.use('/login', loginRouter);
router.use('/matches', matchesRouter);
router.use('/leaderboard', leaderboardRouter);

export default router;
