export interface LeatherInfo {
  id: string;
  name: string;
  cost: number;
  type: string;
  category: string;
  inventory: number;
  img: string;
}

export interface CartInfo {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
}

export interface CartItems {
  leatherId: LeatherInfo[];
  qty: number;
}

export interface User {
  firstname: string;
  lastname: string;
  email: string;
  cart: CartItems[];
}

export interface Token {
  token: Request;
}
