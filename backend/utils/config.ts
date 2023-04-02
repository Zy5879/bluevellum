import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });

const PORT = process.env.PORT;

module.exports = {
  PORT,
};
