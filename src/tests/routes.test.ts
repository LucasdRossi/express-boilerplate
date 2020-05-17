import request from "supertest";
import app from "../app";

describe("Basic flow", () => {
  it("should return 200", async () => {
    const res = await request(app).get("/");

    expect(res.status).toEqual(200);
  });
});
