import axios from "axios";
import { CartInfo } from "../types/type";
const baseUrl = "/cart";

let token = null;

export const setToken = (newToken: Request) => {
  token = `Bearer ${newToken}`;
  return token;
};

export const getCart = async () => {
  const response = await axios.get<CartInfo>(baseUrl);
  return response.data;
};
