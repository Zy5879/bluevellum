import axios from "axios";
import { User } from "../types/type";
const baseUrl = "/login";

const login = async (credentials: object) => {
  const response = await axios.post<User>(baseUrl, credentials);
  return response.data;
};

export default { login };
