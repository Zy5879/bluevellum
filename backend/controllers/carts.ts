import { Router } from "express";
import { getTokenFrom } from "../utils/middleware";
import User from "../models/user";
import asyncHandler from "express-async-handler";
import Cart from "../models/cart";
import { CartItems, LeatherItems } from "../types";
import jwt, { JwtPayload } from "jsonwebtoken";
import { ParamsDictionary } from "express-serve-static-core";
import Leather from "../models/leather";

export const cartRouter = Router();

cartRouter.post<ParamsDictionary, any, CartItems>(
  "/",
  asyncHandler(async (req, res): Promise<any> => {
    const { items } = req.body;

    const token = getTokenFrom(req) as string;
    const decodedToken = jwt.verify(
      token,
      `${process.env.SECRET}`
    ) as JwtPayload;

    const user = await User.findById(decodedToken.id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    items.userId = user._id.toString();

    const leather = await Leather.findOne({ uniqueId: items.uniqueId });
    console.log(leather);

    if (!leather) {
      return res.status(404).json({ error: "Product does not exist" });
    }

    let carts = await Cart.findOne({ userId: user._id });

    if (!carts) {
      carts = new Cart({ userId: user._id, items: items });
      const savedCart = await carts.save();
      await User.findByIdAndUpdate(user, {
        $push: { cart: savedCart._id },
      });
      return res.json(carts);
    }

    // const cartItem = user.cart.

    const existingItem = await Cart.findOne({
      userId: user._id,
      "items.uniqueId": items.uniqueId,
    });

    if (existingItem) {
      const updateCart = await Cart.findOneAndUpdate(
        { userId: user._id, "items.uniqueId": items.uniqueId },
        { $inc: { "items.$.qty": 1 } },
        { new: true }
      ).populate("items");

      console.log("item exists");
      return res.json(updateCart);
    } else {
      console.log("item does not exist");
      const updateCart = await Cart.findByIdAndUpdate(
        carts._id,
        { $push: { items: items } },
        { new: true }
      ).populate("items");
      return res.json(updateCart);
    }
  })
);
// console.log(user._id, leatherId);

// if (existingItem) {
//   const updatedUser = await User.findOneAndUpdate(
//     { id: user._id, "cart._id": leatherId },
//     { $inc: { "cart.qty": 1 } },
//     { new: true }
//   ).populate("cart");

//   console.log("item exists");
//   return res.json(updatedUser);
// } else {
//   console.log("item doesn't exist");
//   const updateCart = await User.findByIdAndUpdate(
//     user,
//     { $push: { cart: leather } },
//     { new: true }
//   ).populate("cart");
//   return res.json(updateCart);
// }

// const existingItem = user.cart.find(
//   (item) => item.leatherId.id === leather.toString()
// );

// let carts = await Cart.findOne({ userId: user._id });
// if (!carts) {
//   carts = new Cart({
//     userId: user._id,
//   });
// }

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

// const existingItem = await User.findOne({ id: user, cart: leather });

// const existingItem = await Cart.findOne({
//   leatherId: {
//     id: leatherId.id,
//     name: leatherId.name,
//     cost: leatherId.cost,
//     category: leatherId.category,
//     type: leatherId.type,
//     inventory: leatherId.inventory,
//     img: leatherId.img,
//     qty: leatherId.qty,
//   },
// });

// console.log(existingItem);

// if (existingItem) {
//   const updatedCart = await Cart.findOneAndUpdate(
//     { userId: user, "leatherId.id": leatherId.id },
//     { $inc: { "leatherId.$.qty": 1 } },
//     { new: true }
//   );
//   await User.findOneAndUpdate(
//     { _id: user._id, "cart.leatherId": leatherId },
//     { $inc: { "cart.$.qty": 1 } },
//     { new: true }
//   );
// const updatedUser = await User.findOneAndUpdate({}, {
//   $inc: { "cart.$.qty": 1 },
// }).populate("cart");
//   console.log("existing item");
//   res.json(updatedCart);
// } else {
//   console.log("item does not exist");
//   //   //   res.json();
//   const newCart = new Cart({
//     userId: user._id,
//     leatherId: leatherId,
//     // cart: { leatherId: leather, qty: qty },
//   });
//   // console.log("no existing item");
//   const savedCart = await newCart.save();
//   // res.json(savedCart);
//   await User.findByIdAndUpdate(
//     user,
//     { $push: { cart: leatherId } },
//     { new: true }
//   );

// res.json(savedCart);
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
// }

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
//   })
// );

cartRouter.put<ParamsDictionary, any, CartItems>(
  "/",
  asyncHandler(async (req, res): Promise<any> => {
    const { items } = req.body;
    console.log(items);

    const token = getTokenFrom(req) as string;
    const decodedToken = jwt.verify(
      token,
      `${process.env.SECRET}`
    ) as JwtPayload;
    const user = await User.findById(decodedToken.id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // let carts = await Cart.findOne({ userId: user._id });

    // if (!carts) {
    //   carts = new Cart({ userId: user._id });
    // }

    const leather = await Leather.findOne({ uniqueId: items.uniqueId });

    if (!leather) {
      return res.status(404).json({ error: "Product does not exist" });
    }

    // const existingItem = await Cart.findOne({ productId: leatherId.id });

    // if (existingItem) {
    const updatedCart = await Cart.findOneAndUpdate(
      { userId: user._id, "items.uniqueId": items.uniqueId },
      {
        $inc: { "items.$.qty": -1 },
        // $pull: { leatherId: leatherId, qty: { $lt: 0 } },
        // $pull: { cart: { leatherId: leatherId, qty: { $lt: 1 } } },
      },
      { new: true }
    ).populate("items");

    console.log(updatedCart);
    return res.json(updatedCart);
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
      populate: { path: "items" },
    });

    console.log(user?._id);

    if (!user) {
      return res.status(404).json({ error: "User not found" }).end();
    } else {
      return res.json(user);
    }
  })
);

cartRouter.delete<ParamsDictionary, any, LeatherItems>(
  "/",
  asyncHandler(async (req, res): Promise<any> => {
    const { name, cost, qty, inventory, type, img, uniqueId, category } =
      req.body;

    const token = getTokenFrom(req) as string;
    const decodedToken = jwt.verify(
      token,
      `${process.env.SECRET}`
    ) as JwtPayload;
    const user = await User.findById(decodedToken.id).populate("cart");
    console.log(decodedToken.id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const cart = await Cart.findOneAndUpdate(
      {
        userId: user._id,
        "items.uniqueId": uniqueId,
      },
      {
        $pull: {
          items: { name, cost, qty, inventory, type, img, category },
        },
      },
      { new: true }
    ).populate("items");

    console.log("cart item deleted succesfully");
    res.json(cart);

    if (!cart) {
      return res.status(404).json({ error: "Cart item not found" });
    }

    // const deleteCartItem = await Cart.findOneAndDelete({
    //   "items.uniqueId": items.uniqueId,
    // });

    // const deleteCartItem = await Cart.findOneAndUpdate(
    //   {
    //     userId: user._id,
    //     "items.uniqueId": items.uniqueId,
    //   },
    //   { $pull: { items: items.id } },
    //   { new: true }
    // );

    // const deleteCartItem = await Cart.findOneAndDelete({
    //   userId: user._id,
    //   "items.uniqueId": items.uniqueId,
    // });
    // res.json(deleteCartItem);
  })
);
// cartRouter.delete<ParamsDictionary,any,CartItems>("/", asyncHandler(async(req,res): Promise<any> => {
//   const { leatherId, qty } = req.body;
//   console.log(leatherId);

//   const token = getTokenFrom(req) as string;
//   const decodedToken = jwt.verify(
//     token,
//     `${process.env.SECRET}`
//   ) as JwtPayload;
//   const user = await User.findById(decodedToken.id);

//   if (!user) {
//     return res.status(404).json({ error: "User not found" });
//   }

// //   let carts = await Cart.findOne({ userId: user._id });

// //   const deleteItem = await Cart.findOneAndDelete({})

// }));

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
