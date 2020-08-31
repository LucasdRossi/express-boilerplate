import { config } from "dotenv";
import { resolve } from "path";
config({ path: resolve(__dirname, "../.env") });

import { App } from "./app";

const app = new App();

const PORT = parseInt(process.env.PORT) || 4000;

app.start(PORT);
