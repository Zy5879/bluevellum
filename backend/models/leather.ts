import mongoose from "mongoose";
import { Category, Types, LeatherItems } from "../types";
import { v4 as uuidv4 } from "uuid";

// interface Leather {
//   name: string;
//   type: Types;
//   cost: number;
//   category: Category;
//   inventory: number;
//   img: string;
// }

export const leatherSchema = new mongoose.Schema<LeatherItems>({
  name: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
  },
  type: {
    type: String,
    enum: Types,
  },
  uniqueId: {
    type: String,
  },
  category: {
    type: String,
    enum: Category,
  },
  inventory: {
    type: Number,
  },
  img: {
    type: String,
  },
  qty: {
    type: Number,
    default: 1,
  },
});

leatherSchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Leather = mongoose.model<LeatherItems>("Leather", leatherSchema);

export const leather = [
  {
    name: '"VEG-TAN" GENTLEMANS BAG',
    cost: 350,
    category: "gentlemanbag",
    type: "bag",
    inventory: 1,
    img: "https://cdn.shopify.com/s/files/1/0053/6654/6521/products/Gentleman_sBagVeg-Tan1800.1_400x.jpg?v=1599965048",
    qty: 1,
    uniqueId: uuidv4(),
  },
  {
    name: '"KODIAK" GENTLEMANS BAG',
    cost: 350,
    type: "bag",
    category: "gentlemanbag",
    inventory: 0,
    img: "https://cdn.shopify.com/s/files/1/0053/6654/6521/products/Kodiak.2_400x.jpg?v=1599967007",
    qty: 1,
    uniqueId: uuidv4(),
  },
  {
    name: 'AFRO-CENTRIC, "SADDLE TAN"',
    cost: 160,
    category: "handbag",
    type: "bag",
    inventory: 2,
    img: "https://cdn.shopify.com/s/files/1/0053/6654/6521/products/Afro-CentricAfro1.1800x1800_1200x.jpg?v=1608343877",
    qty: 1,
    uniqueId: uuidv4(),
  },
  {
    name: 'CLUTCH PURSE, "SADDLE TAN"',
    cost: 60,
    inventory: 2,
    category: "handbag",
    type: "bag",
    img: "https://cdn.shopify.com/s/files/1/0053/6654/6521/products/CLUTCH_PURSE_SADDLE_TAN_600x.png?v=1577064347",
    qty: 1,
    uniqueId: uuidv4(),
  },
  {
    name: 'CLUTCH PURSE, "RED"',
    cost: 60,
    inventory: 1,
    category: "handbag",
    type: "bag",
    img: "https://cdn.shopify.com/s/files/1/0053/6654/6521/products/CLUTCH_PURSE_RED_600x.PNG?v=1565666034",
    qty: 1,
    uniqueId: uuidv4(),
  },
  {
    name: "WOMEN'S CLUTCH 'SADDLE TAN'",
    cost: 70,
    inventory: 0,
    category: "handbag",
    type: "bag",
    img: "https://cdn.shopify.com/s/files/1/0053/6654/6521/products/Womens_Clutch_Wallet_400x.png?v=1575756391",
    qty: 1,
    uniqueId: uuidv4(),
  },
  {
    name: "BIKER MOTORCYCLE BEDROLL",
    cost: 120,
    inventory: 2,
    category: "custom",
    type: "bag",
    img: "https://cdn.shopify.com/s/files/1/0053/6654/6521/products/Biker_Bedroll_400x.png?v=1577937244",
    qty: 1,
    uniqueId: uuidv4(),
  },
  {
    name: "AFRO.78 | 'AFRO' WOMEN SATCHEL HANDBAG",
    cost: 250,
    inventory: 2,
    category: "custom",
    type: "bag",
    img: "https://cdn.shopify.com/s/files/1/0053/6654/6521/products/Womens_leather_Purse_Front_400x.PNG?v=1564943992",
    qty: 1,
    uniqueId: uuidv4(),
  },
  {
    name: "GENTLEMANS'S LEATHER BAG",
    cost: 350,
    inventory: 1,
    category: "custom",
    type: "bag",
    img: "https://cdn.shopify.com/s/files/1/0053/6654/6521/products/20190515_204242_400x.jpg?v=1564943981",
    qty: 1,
    uniqueId: uuidv4(),
  },
  {
    name: "BROWN TOTE",
    cost: 185,
    inventory: 2,
    category: "tote",
    type: "bag",
    img: "https://cdn.shopify.com/s/files/1/0053/6654/6521/products/TOTE781800_600x.jpg?v=1599926971",
    qty: 1,
    uniqueId: uuidv4(),
  },
  {
    name: 'TOTE "STEEL GRAY"',
    cost: 170,
    inventory: 2,
    category: "tote",
    type: "bag",
    img: "https://cdn.shopify.com/s/files/1/0053/6654/6521/products/GrayTote1800x1800_600x.jpg?v=1610564090",
    qty: 1,
    uniqueId: uuidv4(),
  },
  {
    name: "APPLE WATCHBAND 'NATURAL'",
    cost: 49,
    category: "watch",
    type: "accessory",
    inventory: 2,
    img: "https://cdn.shopify.com/s/files/1/0053/6654/6521/products/NATURAL_APPLE_WATCH_BAND_400x.jpg?v=1578444662",
    qty: 1,
    uniqueId: uuidv4(),
  },
  {
    name: "APPLE WATCHBAND 'BLACK'",
    cost: 49,
    category: "watch",
    type: "accessory",
    inventory: 2,
    img: "https://cdn.shopify.com/s/files/1/0053/6654/6521/products/BLACK_APPLE_WATCH_BAND_400x.jpg?v=1578444070",
    qty: 1,
    uniqueId: uuidv4(),
  },
  {
    name: "'SADDLE TAN' MENS'S LEATHER BELT",
    cost: 65,
    category: "belt",
    type: "accessory",
    inventory: 2,
    img: "https://cdn.shopify.com/s/files/1/0053/6654/6521/products/SADDLE_TAN_MEN_S_LEATHER_BELT1_jpeg_600x.png?v=1569188249",
    qty: 1,
    uniqueId: uuidv4(),
  },
  {
    name: '"RUSSET", MINMALIST WALLET',
    cost: 55,
    category: "wallet",
    type: "wallet",
    inventory: 2,
    img: "https://cdn.shopify.com/s/files/1/0053/6654/6521/products/NO.66RUSSET1275x275_200x.jpg?v=1611802352",
    qty: 1,
    uniqueId: uuidv4(),
  },
  {
    name: '"BLACK BROWN", MINMALIST WALLET',
    cost: 55,
    category: "wallet",
    type: "wallet",
    inventory: 2,
    img: "https://cdn.shopify.com/s/files/1/0053/6654/6521/products/NO.66BUCKBROWN1275x275_1ba6a1fa-d806-4042-840b-38b52efaaa1e_200x.jpg?v=1611802263",
    qty: 1,
    uniqueId: uuidv4(),
  },
  {
    name: '"SADDLE TAN", MINMALIST WALLET',
    cost: 55,
    category: "wallet",
    type: "wallet",
    inventory: 2,
    img: "https://cdn.shopify.com/s/files/1/0053/6654/6521/products/NO.66SADDLETANMINIMALIST275X275_200x.jpg?v=1611802412",
    qty: 1,
    uniqueId: uuidv4(),
  },
  {
    name: 'NO.66 | "RUSSET", MINMALIST WALLET',
    cost: 55,
    category: "wallet",
    type: "wallet",
    inventory: 2,
    img: "https://cdn.shopify.com/s/files/1/0053/6654/6521/products/NO.67RUSSETSTANDARD1275X275_200x.jpg?v=1611803672",
    qty: 1,
    uniqueId: uuidv4(),
  },
  {
    name: 'NO.65 | "BLACK", MINMALIST WALLET',
    cost: 55,
    category: "wallet",
    type: "wallet",
    inventory: 2,
    img: "https://cdn.shopify.com/s/files/1/0053/6654/6521/products/BLACK_MINI_WALLET_200x.jpg?v=1578441675",
    qty: 1,
    uniqueId: uuidv4(),
  },
  {
    name: 'NO.65 | "SADDLE TAN", MINMALIST WALLET',
    cost: 55,
    category: "wallet",
    type: "wallet",
    inventory: 2,
    img: "https://cdn.shopify.com/s/files/1/0053/6654/6521/products/Saddle_Tan_Wallet275_200x.jpg?v=1578441302",
    qty: 1,
    uniqueId: uuidv4(),
  },
  {
    name: 'NO.65 | "MAHOGANY", MINMALIST WALLET',
    cost: 55,
    category: "wallet",
    type: "wallet",
    inventory: 2,
    img: "https://cdn.shopify.com/s/files/1/0053/6654/6521/products/Saddle_Tan_Wallet275_200x.jpg?v=1578441302",
    qty: 1,
    uniqueId: uuidv4(),
  },
  {
    name: 'NO.65 | "BRITISH TAN", MINMALIST WALLET',
    cost: 50,
    category: "wallet",
    type: "wallet",
    inventory: 2,
    img: "https://cdn.shopify.com/s/files/1/0053/6654/6521/products/BRITISH_TAN_MINI_WALLET_200x.jpg?v=1578442583",
    qty: 1,
    uniqueId: uuidv4(),
  },
];

// Leather.insertMany(leather)
//   .then((_result) => {
//     console.log("data has been inserted");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

export default Leather;
