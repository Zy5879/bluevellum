import { ObjectId } from "mongoose";
// import Stripe from "stripe";

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

export interface OrderInterface {
  metadata: {
    customId: string;
    cart: string;
  };
  data: {
    customer: string;
    payment_intent: string;
  };
}

// export interface Customer {
//   id: string;
//   object: 'customer';
//   address?: Stripe.Address;
//   balance?: number;
//   created: number;
//   default_source?: string | Stripe.Card;
//   delinquent?: boolean;
//   description?: string;
//   email?: string;
//   invoice_prefix?: string;
//   invoice_settings?: Stripe.CustomerInvoiceSettings;
//   livemode: boolean;
//   metadata?: Stripe.Metadata;
//   name?: string;
//   phone?: string;
//   preferred_locales?: string[];
//   shipping?: Stripe.ShippingDetails;
//   sources?: Stripe.CustomerSources;
//   subscriptions?: Stripe.CustomerSubscriptions;
//   tax_exempt?: 'none' | 'exempt' | 'reverse';
// }

// export interface InvoiveSetting {
//   custom_fields:CustomField[];
//   default_payment_method?: string;
//   footer?:string;
// }

// export interface CustomField {
//   name:string;
//   value:string;
// }

export type NewBagData = Omit<BagData, "id">;
