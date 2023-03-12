import { Request, Response } from 'express';
import { compare } from 'bcryptjs';
import LoginService from '../services/LoginService';
import ILoginService from '../interfaces/ILoginService';
import TokenGenerator from '../validations/TokenJWT';

export default class LoginController {
  private _service: ILoginService = new LoginService();

  LoginValidation = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const result = await this._service.LoginValidation(email);
    if (result) {
      const comparePassword = await compare(password, result.password);
      if (comparePassword) {
        const token = TokenGenerator.tokenGenerator(email);
        return res.status(200).json({ token });
      }
    }
    return res.status(401).json({ message: 'Invalid email or password' });
  };

  userRole = async (req: Request, res: Response) => {
    const { jwt } = req.body;
    console.log(jwt);
    const result = await this._service.LoginValidation(jwt.data);
    if (result) {
      const { role } = result;
      return res.status(200).json({ role });
    }
  };
}
