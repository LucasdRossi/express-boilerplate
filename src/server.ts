import { config } from "dotenv";
import { resolve } from "path";
config({ path: resolve(__dirname, "..", ".env") });

import { App } from "./app";

import { UserRoutes } from "./routes/implementations/UserRoutes";

const userRoutes = new UserRoutes();

const app = new App([userRoutes]);

const PORT = parseInt(process.env.PORT) || 4000;

app.start(PORT);
