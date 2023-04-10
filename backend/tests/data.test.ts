/* eslint-disable @typescript-eslint/no-unsafe-call */
import request from "supertest";
import app from "../app";
import data from "../data/mockData";

describe("test routes", () => {
  test("get all bags data", async () => {
    const res = await request(app).get("/products/bags");
    const bags = data.filter((item) => {
      return item.type === "bag";
    });
    expect(res.body).toEqual(bags);
  });
  test("get all accesories data", async () => {
    const res = await request(app).get("/products/accessories");
    const accesories = data.filter((acc) => {
      return acc.type === "accessory";
    });
    expect(res.body).toEqual(accesories);
  });
  test("get wallet data", async () => {
    const res = await request(app).get("/products/accessories/wallets");
    const wallets = data.filter((item) => {
      return item.category === "wallet";
    });
    expect(res.body).toEqual(wallets);
  });
  test("get custom data", async () => {
    const res = await request(app).get("/products/customs");
    const customs = data.filter((item) => {
      return item.category === "custom";
    });
    expect(res.body).toEqual(customs);
  });
});
