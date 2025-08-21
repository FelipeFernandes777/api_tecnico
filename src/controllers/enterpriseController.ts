import EnterpriseServices from "../services/enterprise/enterpriseServices";
import { Request, Response } from "express";

export default class EnterpriseController {
    private readonly enterpriseService: EnterpriseServices = new EnterpriseServices();

    public async list(_: Request, response: Response) {
        try {
            const enterprises = await this.enterpriseService.listAll();
            response.status(200).send({
                status: "success",
                statusCode: 200,
                enterprises: enterprises
            });
        } catch (error:any) {
            response.status(400).send({
                status: "alert",
                statusCode: 400,
                message: error.message
            });
        }
    }
    public async listForId(request: Request, response: Response) {

        const { id } = request.params;

        try {
            if (!id) {
                return response.status(400).send({
                    status: "alert",
                    statusCode: 400,
                    message: "id is required"
                });
            }


            const enterprises = await this.enterpriseService.listById(Number(id));

            response.status(200).send({
                status: "success",
                statusCode: 200,
                enterprises: enterprises
            });
        } catch (error:any) {
            response.status(400).send({
                status: "alert",
                statusCode: 400,
                message: error.message
            });
        }
    }
    public async listWhenActiveIsTrue(_: Request, response: Response) {

        try {

            const enterprises = await this.enterpriseService.listAllWhenActiveIsTrue();

            response.status(200).send({
                status: "success",
                statusCode: 200,
                enterprises: enterprises
            });
        } catch (error:any) {
            response.status(400).send({
                status: "alert",
                statusCode: 400,
                message: error.message
            });
        }
    }
    public async createEnterprise(request: Request, response: Response) {
        try {
            const { name, active } = request.body;

            if(!name) {
                return response.status(400).send({
                    status: "alert",
                    statusCode: 400,
                    message: "All fields is required required"
                })
            }

            const newEnterprise = await this.enterpriseService.create({name, active});

            response.status(201).send({
                status: "success",
                statusCode: 201,
                enterprises: [newEnterprise]
            });
        } catch (error:any) {
            response.status(400).send({
                status: "alert",
                statusCode: 400,
                message: error.message
            });
        }
    }
    public async deleteEnterprise (request: Request, response: Response) {
        try {
            const { id } = request.params;

            if(!id) {
                return response.status(400).send({
                    status: "alert",
                    statusCode: 400,
                    message: "ID is required required"
                })
            }
            const deletedEnterprise = await this.enterpriseService.delete(Number(id));

            response.status(200).send({
                status: "success",
                statusCode: 200,
                enterprises: deletedEnterprise
            });
        } catch (error:any) {
            response.status(400).send({
                status: "alert",
                statusCode: 400,
                message: error.message
            });
        }
    }
    public async updateEnterprise (request: Request, response: Response) {
        try {
            const { id } = request.params;
            const { name, active } = request.body;

            if(!name) {
                return response.status(400).send({
                    status: "alert",
                    statusCode: 400,
                    message: "All fields is required required"
                })
            }

            if(!id) {
                return response.status(400).send({
                    status: "alert",
                    statusCode: 400,
                    message: "ID is required required"
                })
            }
            const updatedEnterprise = await this.enterpriseService.update(Number(id), {name});

            response.status(200).send({
                status: "success",
                statusCode: 200,
                enterprises: updatedEnterprise
            });
        } catch (error:any) {
            response.status(400).send({
                status: "alert",
                statusCode: 400,
                message: error.message
            });
        }
    }
}
