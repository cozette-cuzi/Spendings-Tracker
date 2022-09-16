const request = require("supertest");
const app = require("./app");

describe("/spendings", () => {
  test("It should response the GET method", done => {
    request(app)
      .get("/spendings")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});


describe("/spendings", () => {
  test("It should response the GET method", done => {
    let bodyData = {
      description: 'Test Row',
      amount: 10,
      currency: 'USD',
    };
    request(app)
      .post("/spendings")
      .send(bodyData)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

