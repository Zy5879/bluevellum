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
  token: Request;
}

export interface Token extends User {
  token: Request;
  // firstname: string;
  // lastname: string;
}
