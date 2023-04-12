import * as dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

const config = {
  PORT,
  MONGODB_URI,
};

export default config;

// export = PORT;
// module.exports = {
//   PORT,
// };
