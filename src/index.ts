import * as express from "express";
import * as cors from "cors";

import router from "./routes";

const PORT = process.env.PORT || 4000;

const app: express.Application = express();

app.use(express.json());
app.use(cors());

app.use(router);

app.listen(PORT, () => console.log(`=> LOG: listening to port ${PORT}`));
