import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.get("/", (_req, res) => {
  console.log("Let's Begin");
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
