const request = require('supertest');
const app = require('../src/index');


describe("POST /api/auth/signup", () => {

    describe("when passed username, email and password", () => {
      test("should respond with a 200 status code", async () => {
        const response = await request(app).post("/api/auth/signup").send(
          {
            "username": "username_02",
            "email": "user02@gmail.com",
            "password" : "user_pass"
          }
        )
      expect(response.statusCode).toBe(200)
      })
  })
})