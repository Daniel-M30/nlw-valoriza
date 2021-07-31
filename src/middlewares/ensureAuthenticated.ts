import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(token, "4dd00d19c01b1847c1d31b44cc2aca24");

    req.user_id = sub as string;

    return next();
  } catch (err) {
    return res.status(401).end();
  }
}
