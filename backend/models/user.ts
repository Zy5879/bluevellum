/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import mongoose from "mongoose";
import { IUser } from "../types";
import mongooseUniqueValidator from "mongoose-unique-validator";

const userSchema = new mongoose.Schema<IUser>({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // cart: [
  //   {
  //     item: {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: "Leather",
  //     },
  //   },
  // ],
  // total: {
  //   default: 0,
  //   type: Number,
  // },
});

userSchema.plugin(mongooseUniqueValidator);
userSchema.set("toJSON", {
  transform: (_document, returnedObject) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    //passwordhash should not be revealaed
    delete returnedObject.passwordHash;
  },
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;
