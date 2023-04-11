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
    const res = await request(app).get("/products/wallets");
    const wallets = data.filter((item) => {
      return item.type === "wallet";
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

describe("test routes by id", () => {
  test("get tote data by id", async () => {
    const res = await request(app).get("/products/bags/tote/10");
    const tote = data.find((d) => d.id === 10);
    expect(res.body).toEqual(tote);
  });
  test("get wallet by id", async () => {
    const res = await request(app).get("/products/wallets/14");
    const wallet = data.find((d) => d.id === 14);
    expect(res.body).toEqual(wallet);
  });
  test("get belt by id", async () => {
    const res = await request(app).get("/products/accessories/belt/23");
    const belt = data.find((d) => d.id === 23);
    expect(res.body).toEqual(belt);
  });
  test("get watchband by id", async () => {
    const res = await request(app).get("/products/accessories/watch/12");
    const watch = data.find((d) => d.id === 12);
    expect(res.body).toEqual(watch);
  });
  test("get gentlemanbag by id", async () => {
    const res = await request(app).get("/products/bags/gentlemanbag/1");
    const gb = data.find((d) => d.id === 1);
    expect(res.body).toEqual(gb);
  });
  test("get handbag by id", async () => {
    const res = await request(app).get("/products/bags/handbag/3");
    const hb = data.find((d) => d.id === 3);
    expect(res.body).toEqual(hb);
  });
  test("get custom by id", async () => {
    const res = await request(app).get("/products/customs/9");
    const hb = data.find((d) => d.id === 9);
    expect(res.body).toEqual([hb]);
  });
});
