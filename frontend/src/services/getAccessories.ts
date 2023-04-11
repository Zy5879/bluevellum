import axios from "axios";
import { LeatherInfo } from "../types/type";
const baseUrl = "/products/accessories";

const getAllAccessories = async () => {
  const response = await axios.get<LeatherInfo[]>(baseUrl);
  return response.data;
};

const accService = {
  getAllAccessories,
};

export default accService;
