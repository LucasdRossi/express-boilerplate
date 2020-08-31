import { FakeUsersRepository } from "../../repositories/implementations/FakeUsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const fakeUsersRepository = new FakeUsersRepository();

const createUserUseCase = new CreateUserUseCase(fakeUsersRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController, createUserUseCase };
