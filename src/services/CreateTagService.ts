import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

export class CreateTagService {
  async execute(name: string) {
    if (!name) {
      throw new Error("Name Incorrect");
    }

    const tagsRepositories = getCustomRepository(TagsRepositories);

    const tagAlreadyExists = await tagsRepositories.findOne({ name });

    if (tagAlreadyExists) {
      throw new Error("Tag already exists");
    }

    const tag = tagsRepositories.create({ name });

    await tagsRepositories.save(tag);

    return tag;
  }
}
