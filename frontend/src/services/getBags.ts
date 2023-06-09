import axios from "axios";
import { LeatherInfo } from "../types/type";
const baseUrl = "/products/bags";

export const getAll = async () => {
  const response = await axios.get<LeatherInfo[]>(baseUrl);
  return response.data;
};

const bagService = {
  getAll,
};

export default bagService;
