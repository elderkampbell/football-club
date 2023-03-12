import express = require('express');
import emailValidation from '../middlewares/EmailValidation';
import passwordValidation from '../middlewares/PasswordValidation';
import LoginController from '../controllers/LoginController';
import tokenValidation from '../middlewares/TokenValidation';

const loginRouter = express.Router();
const loginController = new LoginController();

loginRouter.post('/', emailValidation, passwordValidation, loginController.LoginValidation);
loginRouter.get('/role', tokenValidation, loginController.userRole);

export default loginRouter;
