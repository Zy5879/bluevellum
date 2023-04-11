import { Router } from "express";
import data from "../data/mockData";
export const productsRouter = Router();

productsRouter.get("/bags", (_req, res) => {
  const item = data.filter((obj) => {
    return obj.type === "bag";
  });
  res.json(item);
});
productsRouter.get("/bags/gentlemanbag", (_req, res) => {
  const item = data.filter((obj) => {
    return obj.category === "gentlemanbag";
  });
  res.json(item);
});
productsRouter.get("/bags/gentlemanbag/:id", (req, res) => {
  const item = data.filter((obj) => {
    return obj.category === "gentlemanbag";
  });
  const id = Number(req.params.id);
  const findId = item.find((g) => g.id === id);
  res.json(findId);
});
productsRouter.get("/bags/tote", (_req, res) => {
  const item = data.filter((obj) => {
    return obj.category === "tote";
  });
  res.json(item);
});
productsRouter.get("/bags/tote/:id", (req, res) => {
  const item = data.filter((obj) => {
    return obj.category === "tote";
  });
  const id = Number(req.params.id);
  const findId = item.find((t) => t.id === id);
  res.json(findId);
});
productsRouter.get("/bags/handbag", (_req, res) => {
  const item = data.filter((obj) => {
    return obj.category === "handbag";
  });
  res.json(item);
});
productsRouter.get("/bags/handbag/:id", (req, res) => {
  const item = data.filter((obj) => {
    return obj.category === "handbag";
  });
  const id = Number(req.params.id);
  const findId = item.find((t) => t.id === id);
  res.json(findId);
});
//END OF BAG ROUTES

productsRouter.get("/wallets", (_req, res) => {
  const item = data.filter((obj) => {
    return obj.type === "wallet";
  });
  res.json(item);
});

productsRouter.get("/accessories", (_req, res) => {
  const item = data.filter((obj) => {
    return obj.type === "accessory";
  });
  res.json(item);
});

productsRouter.get("/wallets/:id", (req, res) => {
  const item = data.filter((obj) => {
    return obj.type === "wallet";
  });
  const id = Number(req.params.id);
  const findWalletId = item.find((w) => w.id === id);
  res.json(findWalletId);
});
//END OF WALLET ROUTES

// productsRouter.get("/accessories", (_req, res) => {
//   const item = data.filter((obj) => {
//     return obj.type === "accessory";
//   });
//   res.json(item);
// });
//   const id = Number(req.params.id);
//   const findWalletId = item.find((w) => w.id === id);
//   res.json(findWalletId);
// });

productsRouter.get("/accessories/belt", (_req, res) => {
  const item = data.filter((obj) => {
    return obj.category === "belt";
  });
  res.json(item);
});
productsRouter.get("/accessories/belt/:id", (req, res) => {
  const item = data.filter((obj) => {
    return obj.category === "belt";
  });
  const id = Number(req.params.id);
  const findId = item.find((b) => b.id === id);
  res.json(findId);
});
productsRouter.get("/accessories/watch", (_req, res) => {
  const item = data.filter((obj) => {
    return obj.category === "watch";
  });
  res.json(item);
});
productsRouter.get("/accessories/watch/:id", (req, res) => {
  const item = data.filter((obj) => {
    return obj.category === "watch";
  });
  const id = Number(req.params.id);
  const findId = item.find((wtc) => wtc.id === id);
  res.json(findId);
});

//END OF ACCESSORIES ROUTES

productsRouter.get("/customs", (_req, res) => {
  const item = data.filter((obj) => {
    return obj.category === "custom";
  });
  res.json(item);
});
productsRouter.get("/customs/:id", (req, res) => {
  const item = data.filter((obj) => {
    return obj.category === "custom";
  });
  const id = Number(req.params.id);
  const findId = item.filter((cus) => cus.id === id);
  res.json(findId);
});

//END OF CUSTOM ROUTES
