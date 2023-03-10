import express = require('express');
import LoginController from '../controllers/LoginController';

const loginRouter = express.Router();
const loginController = new LoginController();

loginRouter.post('/', loginController.LoginValidation);

export default loginRouter;
