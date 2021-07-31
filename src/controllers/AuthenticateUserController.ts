import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

export default {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const autheticateUserService = new AuthenticateUserService();

    const token = await autheticateUserService.execute({ email, password });

    return res.send({ token });
  },
};
