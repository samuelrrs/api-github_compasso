const supertest = require("supertest");

const request = supertest("https://api.github.com/");

test("A resposta deve retornar 403", () => {
  return request
    .get("users/samuelrrs")
    .then((res) => expect(res.status).toBe(403));
});
test("A resposta deve retornar 200", () => {
  return request
    .get("users/samuelrrs")
    .then((res) => expect(res.status).toBe(200));
});
