import * as dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const SECRET = process.env.SECRET;

const config = {
  PORT,
  MONGODB_URI,
  SECRET,
};

export default config;
