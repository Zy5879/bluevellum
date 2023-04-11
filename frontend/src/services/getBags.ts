import axios from "axios";
import { BagInfo } from "../types/type";
const baseUrl = "/products/bags";

// export type BagInfo = {
//   id: number;
//   name: string;
//   cost: number;
//   type: string;
//   category: string;
//   inventory: number;
//   img: string;
// };

export const getAll = async () => {
  const response = await axios.get<BagInfo[]>(baseUrl);
  return response.data;
};

const bagService = {
  getAll,
};

export default bagService;
