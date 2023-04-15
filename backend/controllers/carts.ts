import { Router } from "express";
import asyncHandler from "express-async-handler";
import { ParamsDictionary } from "express-serve-static-core";
import Cart from "../models/cart";
import { Carts } from "../types";
// import User from "../models/user";
// import jwt from "jsonwebtoken";
// import type { JwtPayload } from "jsonwebtoken";
// import Leather from "../models/leather";
export const cartRouter = Router();

cartRouter.post<ParamsDictionary, any, Carts>(
  "/",
  // eslint-disable-next-line @typescript-eslint/require-await
  asyncHandler(async (req, res) => {
    const currentCart = await Cart.findById(req.params.id);

    if (!currentCart) {
      const carts = new Cart({
        cart: req.body.cart,
      });
      console.log(carts);
      const savedCart = await carts.save();
      res.json(savedCart);
    } else {
      const carts = new Cart({
        cart: req.body.cart,
        id: currentCart,
      });
      const savedCart = await carts.save();
      currentCart.cart = currentCart.cart.concat(savedCart._id);

      res.json(savedCart);
    }

    // const {userId,cartId,leatherId} = req.body;

    // const users = await User.findById(userId);
    // const product = await Cart.findById(cartId);
    //   const item = await Leather.findById(req.params.id);

    //   const carts = new Cart({
    //     cart: item?.$getPopulatedDocs()
    //   });
    //   console.log(carts);
    //   res.send(carts);
  })
);

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
