import mongoose from "mongoose";
import { Category, Types, LeatherItems } from "../types";
import { v4 as uuidv4 } from "uuid";

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
  userId: { type: String },
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

export default Leather;
