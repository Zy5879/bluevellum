import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Router } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import asyncHandler from "express-async-handler";
import { IUser } from "../types";
import User from "../models/user";
export const userLoginRouter = Router();
import { Secret } from "jsonwebtoken";

userLoginRouter.post<ParamsDictionary, any, IUser>(
  "/",
  asyncHandler(async (req, res): Promise<any> => {
    const { email, password }: IUser = req.body;
    const user = await User.findOne({ email });
    const passwordCorrect =
      user === null ? false : await bcrypt.compare(password, user.password);

    if (!(user && passwordCorrect)) {
      return res.status(401).json({ error: "invalid email or password" });
    }
    const userForToken = {
      email: user.email,
      id: user._id,
    };

    const secret = process.env.SECRET as Secret;
    
    const token = jwt.sign(userForToken, secret, {
      expiresIn: 60 * 60,
    });
    res
      .status(200)
      .send({ token, email: user.email, firstname: user.firstname });
  })
);

export default userLoginRouter;
