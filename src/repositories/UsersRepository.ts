import { User } from "../entities/User";

export interface UsersRepository {
  findByName(id: string): Promise<User>;
  save(user: User): Promise<void>;
}
