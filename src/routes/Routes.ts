import { Router } from "express";

export interface Routes {
  apply(): Router;
}
