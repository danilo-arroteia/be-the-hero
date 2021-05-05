const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("ONG", () => {
  //executar as Migrations do KNEX
  beforeEach(async () => {
    await connection.migrate.rollback(); //deletar o banco de dados
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("should be able to create new ONG", async () => {
    const res = await request(app).post("/ongs").send({
      name: "APAD3",
      email: "teste@teste.com",
      whatsapp: "4700000000",
      city: "Cerquilho",
      uf: "SP",
    });

    expect(res.body).toHaveProperty("id");
    expect(res.body.id).toHaveLength(8);
  });
});
