import express = require('express');
import teamsRouter from './TeamsRoute';
import loginRouter from './LoginRoute';

const router = express.Router();
router.use('/teams', teamsRouter);
router.use('/login', loginRouter);

export default router;
