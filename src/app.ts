import * as express from "express";
import * as cors from "cors";

import router from "./routes";

const app: express.Application = express();

app.use(express.json());
app.use(cors());

app.use(router);

export default app;
