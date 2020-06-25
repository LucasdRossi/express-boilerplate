import express from "express";
import morgan from "morgan";
import cors from "cors";

import router from "./routes";

class App {
  public express: express.Application;

  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(cors());
    this.express.use(express.json());
    // files
    // this.express.use(express.urlencoded({ extended: true }));
    this.express.use(morgan("dev"));
  }

  private routes(): void {
    this.express.use(router);
  }
}

export default new App().express;
