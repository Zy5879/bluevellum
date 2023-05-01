export interface LeatherInfo {
  id: string;
  name: string;
  cost: number;
  type: string;
  category: string;
  inventory: number;
  img: string;
}

export interface CartItems {
  leatherId: LeatherInfo[];
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

export interface Token {
  token: Request | undefined;
}
