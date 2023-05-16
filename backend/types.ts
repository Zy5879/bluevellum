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
  uniqueId: string;
  name: string;
  type: Types;
  cost: number;
  category: Category;
  inventory: number;
  img: string;
  qty: number;
  userId: string;
}

export interface CartItems {
  userId: ObjectId;
  items: LeatherItems;
}

export interface StripeItems {
  leatherId: LeatherItems;
}

export interface StripeCart {
  items: LeatherItems[];
}

export interface IOrder {
  customId: string;
  customerId: string;
  paymentIntentId: string;
  products: [
    {
      id: string;
      uniqueId: string;
      name: string;
      type: string;
      category: string;
      inventory: number;
      img: string;
      qty: number;
    }
  ];
  subtotal: number;
  total: number;
  shipping: object;
  delivery_status: string;
  payment_status: string;
}

export interface OrderInterface {
  metadata: {
    customId: string;
    cart: string;
  };
  customer: string;
  payment_intent: string;
  amount_subtotal: number;
  amount_total: number;
  customer_details: unknown;
  payment_status: string;
}

export type NewBagData = Omit<BagData, "id">;
