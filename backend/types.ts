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
  // cart: ObjectId | string | number[];
  // total: number;
}

export interface Leather {
  name: string;
  type: Types;
  cost: number;
  category: Category;
  inventory: number;
  img: string;
}

export interface Carts {
  user: ObjectId;
  cart: unknown[];
  total: number;
}

export type NewBagData = Omit<BagData, "id">;
