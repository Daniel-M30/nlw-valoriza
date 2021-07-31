import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest {
  user_sender: string;
  user_receiver: string;
  tag_id: string;
  message: string;
}

export class CreateComplimentService {
  async execute({
    user_sender,
    user_receiver,
    message,
    tag_id,
  }: IComplimentRequest) {
    if (user_receiver === user_sender) {
      throw new Error("User Incorrect");
    }

    const complimentsRepositories = getCustomRepository(
      ComplimentsRepositories
    );
    const usersRepositories = getCustomRepository(UsersRepositories);

    const userExist = await usersRepositories.findOne(user_receiver);

    if (!userExist) {
      throw new Error("User does not Exists");
    }

    const compliment = complimentsRepositories.create({
      user_sender,
      user_receiver,
      message,
      tag_id,
    });

    await complimentsRepositories.save(compliment);

    return compliment;
  }
}
