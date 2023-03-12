import express = require('express');
import emailValidation from '../middlewares/EmailValidation';
import passwordValidation from '../middlewares/PasswordValidation';
import LoginController from '../controllers/LoginController';

const loginRouter = express.Router();
const loginController = new LoginController();

loginRouter.post('/', emailValidation, passwordValidation, loginController.LoginValidation);

export default loginRouter;
