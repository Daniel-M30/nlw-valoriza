import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";

export default {
  async handle(req: Request, res: Response) {
    const { user_receiver, message, tag_id } = req.body;
    const { user_id } = req;

    const createComplimentService = new CreateComplimentService();

    const compliment = await createComplimentService.execute({
      user_sender: user_id,
      user_receiver,
      message,
      tag_id,
    });

    return res.send(compliment);
  },
};
