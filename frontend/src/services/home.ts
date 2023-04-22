import axios from "axios";
import { User } from "../types/type";
const baseUrl = "/cart";

let token = null;

const setToken = (newToken: Request) => {
  token = `Bearer ${newToken}`;
  return token;
};

const getCart = async () => {
  const response = await axios.get<User>(baseUrl);
  return response.data;
};

export default { getCart, setToken };
