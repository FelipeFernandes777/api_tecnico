import request from 'supertest';
import { describe, test, expect } from '@jest/globals';
import Server from '../../app';
import db from "../../db/dev.sqlite";

const app = new Server().getSv();

jest.mock('../../db/dev.sqlite', () => ({
    query: jest.fn()
}));

describe("Test enterprise routes", () => {
    test("It should respond to the GET METHOD for all enterprises", async () => {
        const res = await request(app).get("/empresas/todas");
        expect(res.statusCode).toBe(200);
    });
    test("It should respond to the GET Method if enterprise is active", async () => {
        const res = await request(app).get("/empresas/todasAtivas");
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({
            status: "success",
            statusCode: 200,
            enterprises: []
        });
    });
    test("It should respond to the GET Method for enterprise by id", async () => {
        const res = await request(app).get("/empresas/1");
        expect(res.statusCode).toBe(400);
        expect(res.body).toEqual({
            status: "alert",
            statusCode: 400,
            message: "Enterprise not found"
        });
    });
    test("It should a create a new enterprise to the POST METHOD", async () => {
        const newEnterprise = {
            name: "Empresa de teste",
            active: true
        }

        db.query.mockResolvedValueOnce([{insertId: 1}]);

        const res = await request(app)
            .post("/empresas/nova")
            .send(newEnterprise)
            .set("Accept", "application/json");

        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual({
            status: "success",
            statusCode: 201,
            enterprise: [{
                id: 1,
                ...newEnterprise
            }]
        })
    })
});
