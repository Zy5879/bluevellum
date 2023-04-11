import axios from "axios";
import { LeatherInfo } from "../types/type";
const baseUrl = "/products/customs";

const getAllCustoms = async () => {
  const response = await axios.get<LeatherInfo[]>(baseUrl);
  return response.data;
};

const customService = {
  getAllCustoms,
};

export default customService;
