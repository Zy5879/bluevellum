/* eslint-disable @typescript-eslint/no-unsafe-call */
import request from "supertest";
import app from "../app";
import data from "../data/mockData";

describe("test routes", () => {
  test("home gets all data", async () => {
    const res = await request(app).get("/");
    expect(res.body).toEqual(data);
  });
});
