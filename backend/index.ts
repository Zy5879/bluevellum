import express from "express";
import { homeRouter } from "./controllers/home";
import { bagsRouter } from "./controllers/bags";
import * as dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.use("/", homeRouter);
app.use("/products", bagsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
