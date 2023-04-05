/* eslint-disable @typescript-eslint/no-unsafe-call */
import request from "supertest";
import app from "../app";
import data from "../data/mockData";

describe("test routes", () => {
  test("home gets all data", async () => {
    const res = await request(app).get("/");
    expect(res.body).toEqual(data);
  });
  test("get all bags data", async () => {
    const res = await request(app).get("/products/bags");
    const bags = data.map((item) => item.bags);
    expect(res.body).toEqual(bags);
  });
  test("get all accesories data", async () => {
    const res = await request(app).get("/products/accessories");
    const accesories = data.map((item) => item.accesories);
    expect(res.body).toEqual(accesories);
  });
  test("get all accesories data", async () => {
    const res = await request(app).get("/products/wallets");
    const wallets = data.map((item) => item.wallets);
    expect(res.body).toEqual(wallets);
  });
  test("get all accesories data", async () => {
    const res = await request(app).get("/products/customs");
    const customs = data.map((item) => item.bags.customBags);
    expect(res.body).toEqual(customs);
  });
});
