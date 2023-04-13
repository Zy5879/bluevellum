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
  passwordHash: string;
  cart?: string | number[];
}

export interface Leather {
  name: string;
  type: Types;
  cost: number;
  category: Category;
  inventory: number;
  img: string;
}

export type NewBagData = Omit<BagData, "id">;
