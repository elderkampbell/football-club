import * as jwt from 'jsonwebtoken';
import 'dotenv/config';

const { JWT_SECRET = '' } = process.env;

export default class TokensGenerator {
  static tokenGenerator = (payload: string) => {
    const jwtConfig: jwt.SignOptions = {
      expiresIn: '1h',
      algorithm: 'HS256',
    };
    const token = jwt.sign({ data: payload }, JWT_SECRET, jwtConfig);
    return token;
  };
}
