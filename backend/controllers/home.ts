import jwt, { JwtPayload } from "jsonwebtoken";
import { Router } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import asyncHandler from "express-async-handler";
import { IUser } from "../types";
import User from "../models/user";
import { getTokenFrom } from "../utils/middleware";
export const homeRouter = Router();

homeRouter.get<ParamsDictionary, any, IUser>(
  "/",
  asyncHandler(async (req, res): Promise<any> => {
    const token = getTokenFrom(req) as string;
    const decodedToken = jwt.verify(
      token,
      `${process.env.SECRET}`
    ) as JwtPayload;

    const user = await User.findById(decodedToken.id).populate({
      path: "cart",
      populate: { path: "cart.leatherId" },
    });

    if (!user) {
      return res.status(404).json({ error: "No User Found" }).end();
    } else {
      return res.json(user);
    }
  })
);

export default homeRouter;
