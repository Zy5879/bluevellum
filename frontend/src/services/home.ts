import axios from "axios";
import { User } from "../types/type";
const baseUrl = "http://localhost:3000";

let token: string | null = null;

const setToken = (newToken: Request | undefined) => {
  token = `Bearer ${newToken}`;
  return token;
};

const getUserCart = async () => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.get<User>(baseUrl, config);
  return response.data;
};

const getCart = async () => {
  const response = await axios.get<User>(baseUrl);
  return response.data;
};

export default { getCart, setToken, getUserCart };
