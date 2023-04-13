/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

interface IUser {
  firstname: string;
  lastname: string;
  email: string;
  passwordHash: string;
  cart: string | number[];
}

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
  passwordHash: {
    type: String,
    required: true,
  },
  cart: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Leather",
    },
  ],
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
