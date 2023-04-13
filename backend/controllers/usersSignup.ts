import { Router } from "express";
import bcrypt from "bcrypt";

import { ParamsDictionary } from "express-serve-static-core";
import { IUser } from "../types";
import User from "../models/user";
import asyncHandler from "express-async-handler";
export const userSignupRouter = Router();

userSignupRouter.post<ParamsDictionary, unknown, IUser>(
  "/",
  asyncHandler(async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = new User({
      firstname,
      lastname,
      email,
      password: passwordHash,
    });

    const saveUser = await user.save();
    res.status(201).json(saveUser);
  })
);

userSignupRouter.get(
  "/",
  asyncHandler(async (_req, res) => {
    const users = await User.find({}).populate("cart", {
      name: 1,
      cost: 1,
      category: 1,
      inventory: 1,
      img: 1,
    });
    res.json(users);
  })
);

export default userSignupRouter;
