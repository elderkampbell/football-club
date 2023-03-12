import { NextFunction, Request, Response } from 'express';

export default function passwordValidation(req: Request, res: Response, next: NextFunction) {
  if (req.body.homeTeamId === req.body.awayTeamId) {
    return res.status(422).json(
      { message: 'It is not possible to create a match with two equal teams' },
    );
  }
  next();
}
