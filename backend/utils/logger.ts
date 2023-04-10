// import { Category, NewBagData } from "../types";

// const isString = (text: unknown): text is string => {
//   return typeof text === "string";
// };

// const isNumber = (num: unknown): num is number => {
//   return typeof num === "number";
// };

// const isCategory = (param: string): param is Category => {
//   return Object.values(Category)
//     .map((v) => v.toString())
//     .includes(param);
// };

// const parseName = (name: unknown): string => {
//   if (!isString(name)) {
//     throw new Error("Incorrect or missing name");
//   }
//   return name;
// };
// const parseCategory = (category: unknown): Category => {
//   if (!isString(category) || !isCategory(category)) {
//     throw new Error("Incorrect or missing category: " + category);
//   }
//   return category;
// };

// const parseImg = (img: unknown): string => {
//   if (!isString(img)) {
//     throw new Error("Incorrect or missing image");
//   }
//   return img;
// };

// const parseCost = (cost: unknown): number => {
//   if (!isNumber(cost)) {
//     throw new Error("Incorrect or missing a price");
//   }
//   return cost;
// };

// const parseInventory = (inventory: unknown): number => {
//   if (!isNumber(inventory)) {
//     throw new Error("Incorrect or missing inventory number");
//   }
//   return inventory;
// };

// const toNewBagData = (object: unknown): NewBagData => {
//   if (!object || typeof object !== "object") {
//     throw new Error("Incorrect or missing data");
//   }
//   if (
//     "name" in object &&
//     "cost" in object &&
//     "category" in object &&
//     "inventory" in object &&
//     "img" in object
//   ) {
//     const newData: NewBagData = {
//       name: parseName(object.name),
//       cost: parseCost(object.cost),
//       category: parseCategory(object.category),
//       inventory: parseInventory(object.inventory),
//       img: parseImg(object.img),
//     };
//     return newData;
//   }
//   throw new Error("Incorrect data: some fields are missing",);
// };

// export default toNewBagData;
