import { CreateUserUseCase } from "./CreateUserUseCase";
import { Request, Response } from "express";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle = async (request: Request, response: Response) => {
    const { name } = request.body;

    try {
      await this.createUserUseCase.execute({ name });

      return response.sendStatus(201);
    } catch ({ message }) {
      return response.status(400).json({ message });
    }
  };
}
