import { ObjectId } from "mongoose";

export interface LeatherInfo {
  id: string;
  uniqueId: string;
  name: string;
  cost: number;
  type: string;
  category: string;
  inventory: number;
  img: string;
  qty: number;
  userId?: string;
}

export interface StripeRequest {
  userId: string;
  uniqueId: string;
  name: string;
  cost: number;
  type: string;
  category: string;
  inventory: number;
  img: string;
  qty: number;
}

export type LeatherPreview = Omit<LeatherInfo, "id">;

export interface ProductInfo {
  leatherId: string | ObjectId;
  qty: number;
}

export interface StripeCart {
  leatherId: LeatherInfo[];
}

export interface Cart {
  leatherId: LeatherInfo;
}

export interface CartItems {
  userId: string;
  items: LeatherInfo[];
}

export interface ProductItem {
  items: LeatherInfo;
}

export interface DeleteProductItem {
  items: Partial<LeatherPreview>;
}

export interface CheckoutArgs {
  items: LeatherInfo[];
  userId: CartItems;
}

export interface StripeItems {
  id: string;
  leatherId: string;
  name: string;
  cost: number;
  type: string;
  category: string;
  inventory: number;
  img: string;
  qty: number;
}

export interface StripeResponse {
  url: string;
  error: string;
}

export interface User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  cart?: CartItems;
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
