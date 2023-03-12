import { NextFunction, Request, Response } from 'express';

export default function passwordValidation(req: Request, res: Response, next: NextFunction) {
  const { password } = req.body;
  console.log(password);
  if (!password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  if (req.body.password.length < 6) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  next();
}
