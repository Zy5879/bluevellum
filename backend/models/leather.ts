import mongoose from "mongoose";
import { Category, Types } from "../types";
import mongooseUniqueValidator from "mongoose-unique-validator";

const leatherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: Types,
  },
  cost: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: Category,
  },
  inventory: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

leatherSchema.plugin(mongooseUniqueValidator);
