const request = require("supertest");
const app = require("../src/app");

describe("Health API", () => {
  test("should return API health status", async () => {
    const response = await request(app)
      .get("/api/v1/health");

    expect(response.statusCode).toBe(200);

    expect(response.body).toEqual({
      success: true,
      message: "AlgoQuest API is healthy",
    });
  });
});