import { Request, Response } from "express";

export async function index(req: Request, res: Response): Promise<void> {
  res.sendStatus(200);
}
