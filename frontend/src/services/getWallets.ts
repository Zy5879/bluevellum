import axios from "axios";
import { LeatherInfo } from "../types/type";
const baseUrl = "/products/wallets";

const getAllWallets = async () => {
  const response = await axios.get<LeatherInfo[]>(baseUrl);
  return response.data;
};

const walletService = {
  getAllWallets,
};

export default walletService;
