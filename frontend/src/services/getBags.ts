import axios from "axios";
const baseUrl = "/products/bags";

export const getAll = async () => {
  const response = await axios.get<Response>(baseUrl);
  return response.data;
};

const bagService = {
  getAll,
};

export default bagService;
