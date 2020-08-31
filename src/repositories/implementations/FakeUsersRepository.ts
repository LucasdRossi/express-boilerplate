import { UsersRepository } from "../UsersRepository";
import { User } from "../../entities/User";

export class FakeUsersRepository implements UsersRepository {
  private users: User[] = [];

  findByName = async (name: string) => this.users.find((user) => user.name === name);

  save = async (user: User) => {
    this.users.push(user);
  };
}
