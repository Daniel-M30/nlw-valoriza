import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

export default {
  async createUser(req: Request, res: Response) {
    const { name, email, password, admin } = req.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      name,
      email,
      password,
      admin,
    });

    res.send(user);
  },
};