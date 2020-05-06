import { config } from "dotenv";
import { resolve } from "path";
import app from "./app";

config({ path: resolve(__dirname, "../.env") });

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`=> LOG: listening to port ${PORT}`));
