import { Request, Response } from "express";
import { ListUsersService } from "../services/ListUsersService";

export default {
  async handle(req: Request, res: Response) {
    const listUsersService = new ListUsersService();

    const users = await listUsersService.execute();

    return res.send(users);
  },
};
