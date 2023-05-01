import { ObjectId } from "mongoose";
export enum Category {
  Wallet = "wallet",
  Custom = "custom",
  Watch = "watch",
  GentlemanBag = "gentlemanbag",
  Tote = "tote",
  Handbag = "handbag",
  Belt = "belt",
}

export enum Types {
  Bag = "bag",
  Accessories = "accessory",
  Wallet = "wallet",
}

export interface BagData {
  id: number;
  name: string;
  type: Types;
  cost: number;
  category: Category;
  inventory: number;
  img: string;
}
export interface IUser {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  cart: CartItems[];
}

export interface ResUser {
  firstname: string;
  lastname: string;
  email: string;
  cart: unknown[];
}
export interface Leather {
  name: string;
  type: Types;
  cost: number;
  category: Category;
  inventory: number;
  img: string;
}

export interface CartItems {
  userId: ObjectId;
  leatherId: ObjectId;
  qty: number;
}

export interface Carts {
  userId: ObjectId;
  cart: CartItems[];
}

export type NewBagData = Omit<BagData, "id">;
