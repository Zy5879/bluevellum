// import { Router } from "express";
// import asyncHandler from "express-async-handler";
// import { ParamsDictionary } from "express-serve-static-core";
// import Cart from "../models/cart";
// import { Carts } from "../types";
// import { ObjectId } from "mongoose";
// import User from "../models/user";
// import jwt from "jsonwebtoken";
// import type { JwtPayload } from "jsonwebtoken";
// import Leather from "../models/leather";
// export const cartRouter = Router();

// cartRouter.post<ParamsDictionary, any, Carts>(
//   "/",
//   // eslint-disable-next-line @typescript-eslint/require-await
//   asyncHandler(async (req, res) => {
//     const currentCart = await Cart.findById(req.params._id);

//     if (!currentCart) {
//       const carts = new Cart({
//         cart: req.body.cart,
//       });
//       console.log(carts);
//       const savedCart = await carts.save();
//       res.json(savedCart);
//       console.log("cart does not exist");
//     } else {
//       const carts = new Cart({
//         cart: req.body.cart,
//       });
//       const savedCart = await carts.save();
//       currentCart.cart = currentCart.cart.concat(savedCart._id);

//       res.json(savedCart);
//       console.log("cart does exist");
//     }

// const {userId,cartId,leatherId} = req.body;

// const users = await User.findById(userId);
// const product = await Cart.findById(cartId);
//   const item = await Leather.findById(req.params.id);

//   const carts = new Cart({
//     cart: item?.$getPopulatedDocs()
//   });
//   console.log(carts);
//   res.send(carts);
//   })
// );

// cartRouter.post<Carts>(
//   "/",
//   asyncHandler(async (req, _res) => {
//     // const item = await Leather.findById(req.params.id);
//     const carts = new Cart({

//     });

// const savedCart = await cart.populate();
// console.log(cart);
// if (item) {
//   const cart = new Cart({

//   });
//   res.json(cart);
// } else {
//   res.status(404).end();
// }
// const cart = new Cart({

// });
// console.log(cart);
// res.json(item);
//   })
// );

// cartRouter.post(
//   "/",
//   asyncHandler(async (req, res) => {
//     const { cart } = req.body;
//     const item = await Leather.findById(req.params.id);
//     const carts = new Cart({
//       cart:
//     });
//     const savedCart = carts.save();
//   })
// );

// cartRouter.post<ParamsDictionary, any, Leather>(
//   "/",
//   asyncHandler(async (req, res) => {
//     const { name, cost, type, category, inventory, img } = req.body;
//     const carts = new Cart({
//       cart: [
//         {
//           name,
//           cost,
//           type,
//           category,
//           inventory,
//           img,
//         },
//       ],
//       total: 0,
//     });
//     const savedCart = await carts.save();
//     res.json(savedCart);
//   })
// );

// const getToken = (req: express.Request) => {
//   const authorization = req.get("authorization");
//   if (authorization && authorization.startsWith("Bearer ")) {
//     return authorization.replace("Bearer ", "");
//   }
//   return null;
// };

// cartRouter.post<ParamsDictionary, any, Leather>(
//   "/",
//   asyncHandler(
//     async (_req, res) => {
//   const cart = new User({});
//   const savedCart = await cart.save();
//   res.json(savedCart);
// const token = getToken(req);
// // const sec = process.env.SECRET as Secret;
// const decodedToken =  jwt.verify(`${token}`, `${process.env.SECRET}`) as JwtPayload;
// if (!decodedToken.id) {
//   const cartData = {
//     name,
//     type,
//     cost,
//     category,
//     inventory,
//     img
//   };

// }
// if(!decodedToken.id) {}
//   )
// );

// import User from "../models/user";
// import { ParamsDictionary } from "express-serve-static-core";
// import express from "express";
// import Cart from "../models/cart";
// import { IUser } from "../types";
// import jwt, { JwtPayload } from "jsonwebtoken";
// import asyncHandler from "express-async-handler";
// import { Router } from "express";
// export const cartRouter = Router();

// cartRouter.get(
//   "/",
//   asyncHandler(async (_req, res) => {
//     const cart = await Cart.find({}).populate("user", {
//       firstname: 1,
//       lastname: 1,
//       email: 1,
//     });
//     res.json(cart);
//   })
// );

// const getToken = (req: express.Request) => {
//   const authorization = req.get("authorization");
//   if (authorization && authorization.startsWith("Bearer ")) {
//     return authorization.replace("Bearer ", "");
//   }
//   return null;
// };

// cartRouter.post<Response, IUser>(
//   "/",
//   asyncHandler(async (req, res): Promise<any> => {
//     const body = req.body;
//     const token = getToken(body) as string;
//     console.log(token);
//     const decodedToken = jwt.verify(
//       token,
//       `${process.env.SECRET}`
//     ) as JwtPayload;

//     if (!decodedToken.id) {
//       return res.status(401).json({ error: "invalid token" });
//     }

//     const user = await User.findById(decodedToken);

//     const cart = new Cart({
//       user: user.id;

//     })

// const user = await User.findById(decodedToken.id);
// const cart = new Cart({
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//   user: user?.id,
//   cart: body.cart,
// });

// if (!user) {
//   return res.json({ error: "token invalid" });
// } else {
//   const savedCart = await cart.save();
//   user.cart = user.cart.concat(savedCart._id.toString());
//   await user.save();
//   res.json(savedCart);
// }

//   const savedCart = await cart.save();
//   const concatCart = user?.cart.toString();
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//   // user?.cart = concatCart.concat(savedCart._id);
//   user?.cart = user?.cart.toString().concat(savedCart._id.toString());
//   await user?.save();
//   })
// );

import { Router } from "express";
import { getTokenFrom } from "../utils/middleware";
import User from "../models/user";
import asyncHandler from "express-async-handler";
import Cart from "../models/cart";
import { CartItems } from "../types";
import jwt, { JwtPayload } from "jsonwebtoken";
import { ParamsDictionary } from "express-serve-static-core";
import Leather from "../models/leather";
export const cartRouter = Router();

cartRouter.post<ParamsDictionary, any, CartItems>(
  "/",
  asyncHandler(async (req, res): Promise<any> => {
    const { leatherId, qty } = req.body;
    console.log(leatherId);

    const token = getTokenFrom(req) as string;
    const decodedToken = jwt.verify(
      token,
      `${process.env.SECRET}`
    ) as JwtPayload;
    const user = await User.findById(decodedToken.id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const leather = await Leather.findById(leatherId);

    if (!leather) {
      return res.status(404).json({ error: "Product does not exist" });
    }

    let carts = await Cart.findOne({ userId: user._id });
    if (!carts) {
      carts = new Cart({
        userId: user._id,
        cart: [],
      });
    }
    // console.log(carts);
    // // res.json(carts);

    // // res.json(carts);

    // // if (!carts?.leatherId) {
    // //   carts = new Cart({ userId: user._id, cart: { leatherId: leatherId } });
    // // }

    // const existingItem = carts.cart.find((item) =>
    //   console.log(item.leatherId.toString() === leatherId)
    // );
    // const existingItem = carts?.cart.find(
    //   (item) => item.leatherId.toString() === leatherId
    // );

    // const existingItem = user.cart.find((item) => item.leatherId);
    // console.log(existingItem);
    // console.log(existingItem);

    // console.log(carts);
    // res.json(carts);
    // res.json(existingItem);

    // const savedCart = await carts.save();

    const existingItem = await Cart.findOne({ leatherId: leatherId });

    if (existingItem) {
      const updatedCart = await Cart.findOneAndUpdate(
        { leatherId: leatherId },
        { $inc: { qty: 1 } },
        { new: true }
      );
      console.log("existing item");
      res.json(updatedCart);
    } else {
      console.log("item does not exist");
      //   //   res.json();
      const newCart = new Cart({
        userId: user._id,
        leatherId: leatherId,
        qty: qty,
        // cart: { leatherId: leather, qty: qty },
      });
      // console.log("no existing item");
      const savedCart = await newCart.save();
      const updatedUser = await User.findByIdAndUpdate(
        user._id,
        { $push: { cart: savedCart._id } },
        { new: true }
      ).populate({ path: "cart" });
      res.json(updatedUser);
      // console.log(savedCart);
      // user.cart = user.cart.concat(savedCart._id);
      // await user.save();
      // res.json(savedCart);
      // const updatedUser = await User.findOneAndUpdate(
      //   { cart: carts },
      //   {
      //     $push: savedCart._id,
      //   }
      // );
      // return res.json(updatedUser);
      // carts.cart.push({
      //   leatherId,
      //   qty,
      // });
      // const savedCart = await carts.save();
    }

    // console.log(updatedCart), res.json(updatedCart);

    // const updatedUser = await User.findOneAndUpdate(
    //   { cart: carts._id },
    //   { $inc: { qty: 1 } },
    //   { new: true }
    // );

    // console.log(carts);
    // res.json(updatedUser);
    // const price = leather.cost;

    // console.log(existingItem);

    // if (existingItem) {
    //   existingItem.qty++;
    // } else {
    // carts.cart.push({
    //   leatherId,
    //   qty,
    // });

    // const savedCart = await carts.save();
    // user.cart = user.cart.concat(savedCart._id);
    // await user.save();
    // res.json(savedCart);
    // const updatedUser = await User.findByIdAndUpdate(
    //   user._id,
    //   { $push: { cart: savedCart._id } },
    //   { new: true }
    // );
    // return updatedUser;
    // const newCart = new Cart({
    //   userId: carts,
    //   cart:
    // })
  })
);

cartRouter.put<ParamsDictionary, any, CartItems>(
  "/",
  asyncHandler(async (req, res): Promise<any> => {
    const { leatherId } = req.body;
    console.log(leatherId);

    const token = getTokenFrom(req) as string;
    const decodedToken = jwt.verify(
      token,
      `${process.env.SECRET}`
    ) as JwtPayload;
    const user = await User.findById(decodedToken.id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    let carts = await Cart.findOne({ userId: user._id });

    if (!carts) {
      carts = new Cart({ userId: user._id, cart: [] });
    }

    const leather = await Leather.findById(leatherId);

    if (!leather) {
      return res.status(404).json({ error: "Product does not exist" });
    }

    const updatedCart = await Cart.findOneAndUpdate(
      { "cart.leatherId": leatherId },
      {
        $inc: { "cart.$.qty": -1 },
        // $pull: { cart: { _id: carts._id, qty: { $lt: 2 } } },
      },
      { new: true }
    );

    console.log(updatedCart), res.json(updatedCart);
  })
);

cartRouter.get<ParamsDictionary, any, CartItems>(
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
      return res.status(404).json({ error: "User not found" }).end();
    } else {
      return res.json(user);
    }
  })
);

// cartRouter.delete<ParamsDictionary, any, CartItems & Carts>(
//   "/:id",
//   asyncHandler(async (req, res): Promise<any> => {
// const { leatherId } = req.body;
// const token = getTokenFrom(req) as string;
// const decodedToken = jwt.verify(
//   token,
//   `${process.env.SECRET}`
// ) as JwtPayload;
// const user = await User.findById(decodedToken.id);
// if (!user) {
//   return res.status(404).json({ error: "User not found" });
// }
// const carts = await Cart.findOne({ userId: user._id });
// if (!carts) {
//   return res.status(404).json({ error: "Cart is already empty" });
// }
// const leather = await Leather.findById(leatherId);
// if (!leather) {
//   return res.status(404).json({ error: "Product does not exist" });
// }
// const updatedUser = await User.findByIdAndUpdate(
//   { user, "carts.items._id": carts._id },
//   {
//     $inc: { "carts.item.$.qty": -1 },
//     $pull: { carts: { _id: leatherId, qty: { $lt: 2 } } },
//   },
//   { new: true }
// );
// res.json(updatedUser);
// const existingItem = carts.cart.find(
//   (item) => item.leatherId.toString() === leatherId
// );
// if(existingItem) {
//   if(existingItem.qty > 1) {
//    await Cart.findByIdAndUpdate(carts._id,)
//   } else {
//     await User.findByIdAndDelete(carts._id);
//     await Cart.findByIdAndDelete(carts._id);
//   }
// } else {
//   return res.status(404).json({error: "Product has already been taken out of cart"});
// }
// const { userId, leatherId } = req.body;
// const carts = await Cart.findOne({ userId: userId });
// const existingItem = carts?.cart.find(
//   (item) => item.leatherId.toString() === leatherId
// );
// if (existingItem) {
//   if (existingItem.qty > 1) {
//     existingItem.qty--;
//   }
// }
// console.log(carts);
// res.json(existingItem);
// await Cart.findByIdAndUpdate(userId, {$inc: {}});
// const { leatherId } = req.body;
// console.log(leatherId);
// const token = getTokenFrom(req) as string;
// const decodedToken = jwt.verify(
//   token,
//   `${process.env.SECRET}`
// ) as JwtPayload;
// const user = await User.findById(decodedToken.id);
// if (!user) {
//   return res.status(404).json({ error: "User not found" });
// }
// const carts = await Cart.findOne({ userId: user._id });
// if (!carts) {
//   return res.status(404).json({ error: "Your cart is already empty" });
// }
// const leather = await Leather.findById(leatherId);
// if (!leather) {
//   return res.status(404).json({ error: "Product does not exist" });
// }
// const existingItem = carts.cart.find(
//   (item) => item.leatherId.toString() === leatherId
// );
// if (existingItem) {
//   if (existingItem.qty > 1) {
//     existingItem.qty--;
//   } else {
//     await Cart.findByIdAndRemove(existingItem);
//     await User.findByIdAndRemove(carts._id.toString());
//     res.status(204).end();
//   }
//   // const savedCart = await carts.save();
// } else {
//   return res.json({ error: "Server Error" });
// }
// console.log(carts._id);
//   })
// );

// cartRouter.post<ParamsDictionary, any, Carts>(
//   "/",
//   asyncHandler(async (req, res): Promise<any> => {
//     const { productId, quantity } = req.body;
// //     // const leatherId = req.params.id;
// //     // const userId = req.params.user;
//     const token = getTokenFrom(req) as string;
//     // const secret = process.env.SECRET as Secret;
//     const decodedToken = jwt.verify(
//       token,
//       `${process.env.SECRET}`
//     ) as JwtPayload;

//     const user = await User.findById(decodedToken.id);

//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     const leather = await Leather.findById(productId);

//     if (!leather) {
//       return res.status(404).json({ error: "Product not found" });
//     }

//     // const carts = await Cart.findOne({ user: user._id }).populate("cart");

//     // if (carts) {
//     //   if (carts.cart === req.body.cart) {
//     //     carts.qty++;
//     //   }
//     // }

//     // if(carts?.cart === req.body.cart) {

//     // }

//     const cart = new Cart({
//       cart: req.body.cart,
//       user: user._id,
//     });

//     const savedCart = await cart.save();
//     user.cart = user.cart.concat(savedCart._id);
//     await user.save();

//     res.json(savedCart);

//     // if (!carts) {
//     //   carts = new Cart({ user: user._id, cart: [] });
//     // } else {
//     //   console.log(leather);
//     //   user.cart.push(leather);
//     //   res.json(await carts.save());
//     // }

//     // const leather = await Leather.findById(req.body.cart);

//     // return res.json({
//     //   message: `Added ${leather.name} to ${user.firstname} cart`,
//     // });

//     // const savedCart = await cart.save();
//     // const user = await User.findByIdAndUpdate(
//     //   userId,
//     //   {$push: {cart: savedCart._id}},{new: true}
//     // );
//   })
// );

// cartRouter.get(
//   "/",
//   asyncHandler(async (req, res) => {
//     const carts = await Cart.find({user: req.params}).populate("cart");
//     res.json(carts);
//   })
// );
// cartRouter.put<ParamsDictionary, any, Carts>(
//   "/:id",
//   asyncHandler(async (req, _res) => {
//     // const body = req.body;

//     const cart = {
//       cart: req.body.cart,
//       qty: req.body.qty++,
//     };
//     const updatedCart = await Cart.findByIdAndUpdate(req.params.id, cart, {
//       new: true,
//     });
//     response.json(updatedCart);
//   })
// );

// cartRouter.post("/", async(req:Request, res: Response): Promise<unknown> => {
//   const userId = req.params.userId;
// const token = getTokenFrom(req) as string;
// const secret = process.env.SECRET as Secret
// const decodedToken = jwt.verify(token, secret) as JwtPayload;

//   if(!decodedToken.id) {
//     return res.status(401).json({error: "token invalid"});
//   };

//   try {
//     const cart = new Cart({
//       cart: req.body.items,
//     })
//     const savedCart = await cart.save();
//     const user = await User.findByIdAndUpdate(userId, {$push: {"cart": savedCart._id}},{new: true}).populate("cart")
//     res.json(user);
//   }catch(error: Error) {
//     res.status(400).json({error:"no user"});
//   };
// });
