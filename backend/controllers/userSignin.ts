import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Router } from "express";
import asyncHandler from "express-async-handler";
import { IUser } from "../types";
import { ParamsDictionary } from "express-serve-static-core";
import User from "../models/user";
const userLoginRouter = Router();

userLoginRouter.post<ParamsDictionary, unknown, IUser>(
  "/",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
  })
);
