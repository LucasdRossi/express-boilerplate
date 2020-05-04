import * as express from "express";

const router: express.Router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
  res.sendStatus(200);
});

export default router;
