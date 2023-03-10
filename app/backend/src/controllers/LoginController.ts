import { Request, Response } from 'express';
import { compare } from 'bcryptjs';
import LoginService from '../services/LoginService';
import ILoginService from '../interfaces/ILoginService';
import TokenGenerator from '../validations/TokenJWT';

export default class LoginController {
  private _service: ILoginService = new LoginService();

  LoginValidation = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }

    const result = await this._service.LoginValidation(email);
    if (result) {
      const comparePassword = await compare(password, result.password);
      if (comparePassword) {
        const token = TokenGenerator.tokenGenerator({ email, password });
        return res.status(200).json({ token });
      }
    }
    return res.status(404).json('NOT FOUND');
  };
}
