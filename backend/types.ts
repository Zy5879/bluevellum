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
  cart: ObjectId;
}

export interface ResUser {
  firstname: string;
  lastname: string;
  email: string;
  cart: unknown[];
}
export interface LeatherItems {
  id: string;
  // productId: string;
  uniqueId: string;
  name: string;
  type: Types;
  cost: number;
  category: Category;
  inventory: number;
  img: string;
  qty: number;
}

export interface CartItems {
  userId: ObjectId;
  // productId: ObjectId | string;
  items: LeatherItems;
  // cart: ObjectId;
  // qty: number;
}

export interface StripeItems {
  // userId: string;
  leatherId: LeatherItems;
  // leatherId: {
  //   id: string;
  //   name: string;
  //   type: Types;
  //   cost: number;
  //   category: Category;
  //   inventory: number;
  //   img: string;
  // };
  // qty: number;
}

export interface StripeCart {
  items: LeatherItems[];
}

export type NewBagData = Omit<BagData, "id">;
