import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
import ILogin from '../interfaces/ILogin';

const { JWT_SECRET = '' } = process.env;

export default class TokensGenerator {
  static tokenGenerator = (payload: ILogin) => {
    const jwtConfig: jwt.SignOptions = {
      expiresIn: '1h',
      algorithm: 'HS256',
    };
    const token = jwt.sign({ data: payload }, JWT_SECRET, jwtConfig);
    return token;
  };
}
