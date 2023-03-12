import { NextFunction, Request, Response } from 'express';

export default function emailValidation(req: Request, res: Response, next: NextFunction) {
  const { email } = req.body;
  console.log(email);
  if (!email) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  const emailRegex = /^\S+@\S+\.\S+$/;
  console.log(req.body.email);
  if (!emailRegex.test(req.body.email)) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  next();
}
