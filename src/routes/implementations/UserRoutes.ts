import { Routes } from "../Routes";
import { Router } from "express";

import { createUserController } from "../../useCases/createUser";

export class UserRoutes implements Routes {
  apply = () => {
    const router = Router();

    router.post("/users", createUserController.handle);

    return router;
  };
}
