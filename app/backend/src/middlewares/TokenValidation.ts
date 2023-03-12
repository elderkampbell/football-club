import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

export default function tokenValidation(req: Request, res: Response, next: NextFunction) {
  const { JWT_SECRET } = process.env;
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    req.body.jwt = jwt.verify(token, JWT_SECRET as string);
  } catch {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }

  return next();
}
