import express from "express";
import morgan from "morgan";
import cors from "cors";
import { router } from "./router";

export class App {
  public express: express.Application;

  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  private middlewares = () => {
    this.express.use(cors());
    this.express.use(express.json());
    this.express.use(morgan("dev"));
  };

  private routes = () => {
    this.express.use(router);
  };

  start = (p: number) => {
    this.express.listen(p, () => console.log(`Starting express on port ${p}`));
  };
}
