import "dotenv/config";
import express from "express";
import { indexHandler } from "./handler/indexhandler";
import { randomColorHandler } from "./handler/randomColorHandler";

const app = express();

const port = process.env.PORT || 3030;

app.get("/", indexHandler);
app.get("/color", randomColorHandler);

app.listen(port, () => {
  console.log(`server running on port:${port}`);
});
