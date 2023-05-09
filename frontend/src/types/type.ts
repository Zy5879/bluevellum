import { ObjectId } from "mongoose";

export interface LeatherInfo {
  id: string;
  name: string;
  cost: number;
  type: string;
  category: string;
  inventory: number;
  img: string;
}

export interface ProductInfo {
  leatherId: string | ObjectId;
  qty: number;
}

export interface CartItems {
  id: string;
  leatherId: {
    id: string;
    name: string;
    cost: number;
    type: string;
    category: string;
    inventory: number;
    img: string;
  };
  // leatherId: ObjectId | string | LeatherInfo;
  qty: number;
}

export interface User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  cart: CartItems[];
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  email: string;
  firstname: string;
  token: Request | undefined;
}

export interface SignUpRequest {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface Token {
  token: Request | undefined;
}
