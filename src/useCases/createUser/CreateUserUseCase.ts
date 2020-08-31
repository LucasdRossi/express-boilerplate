import { UsersRepository } from "../../repositories/UsersRepository";
import { CreateUserRequestDTO } from "./CreateUserDTO";
import { User } from "../../entities/User";

export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  execute = async (data: CreateUserRequestDTO) => {
    const userExist = await this.usersRepository.findByName(data.name);

    if (userExist) {
      throw new Error("User already exist");
    }

    const user = new User(data);

    await this.usersRepository.save(user);
  };
}
