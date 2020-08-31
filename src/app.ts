import express from "express";
import morgan from "morgan";
import cors from "cors";

import { Routes } from "./routes/Routes";

export class App {
  public express: express.Application;

  constructor(routes: Routes[]) {
    this.express = express();

    this.applyMiddlewares();
    this.applyRoutes(routes);
  }

  private applyMiddlewares = () => {
    this.express.use(cors());
    this.express.use(express.json());
    this.express.use(morgan("dev"));
  };

  private applyRoutes = (routes: Routes[]) => {
    routes.forEach((route) => this.express.use(route.apply()));
  };

  start = (p: number) => {
    this.express.listen(p, () => console.log(`Starting express on port ${p}`));
  };
}
