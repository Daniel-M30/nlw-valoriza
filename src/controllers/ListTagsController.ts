import { Request, Response } from "express";
import { ListTagsService } from "../services/ListTagsService";

export default {
  async handle(req: Request, res: Response) {
    const listTagsService = new ListTagsService();

    const tags = await listTagsService.execute();

    return res.send(tags);
  },
};
