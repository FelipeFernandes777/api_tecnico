import {UserServices} from "../services/user/userServices";
import { Request, Response } from 'express'
import {ICreateUserDTO} from "../models/lead/dto/ICreateUserDTO";

export default class UserController {

    private readonly service = new UserServices();

    public async getAllUsers(request: Request, response: Response): Promise<void> {
        try {
            const {offset, limit} = request.body;

            const result = await this.service.listAll(offset, limit);

            response.status(200).send({
                status: "success",
                users: {
                    result
                },
                statusCode: 200
            })
        }catch (error:any) {
            response.status(400).send({
                status: "error",
                error: error.message,
                statusCode: 400
            })
        }
    }
    public async getUserById(request: Request, response: Response): Promise<void> {
        try {
            const {id} = request.params;

            if(!id) {
                response.status(400).send({
                    status: "error",
                    message: "id not found",
                    statusCode: 400
                })
                return;
            }

            const result = await this.service.listById(Number(id));

            response.status(200).send({
                status: "success",
                user: {
                    result
                },
                statusCode: 200
            })
        }catch (error:any) {
            response.status(400).send({
                status: "error",
                error: error.message,
                statusCode: 400
            })
        }
    }
    public async createUser(request: Request, response: Response): Promise<void> {
        try {
            const { name,active,password,email } = request.body

            if(!name || !active || !password ||!email) {
                response.status(400).send({
                    status: "alert",
                    statusCode: 400,
                    message: "All fields are required"})
            }

            const result = await this.service.create({name,active,password,email});

            response.status(201).send({
                status: "success",
                user: {
                    result
                },
                statusCode: 201
            })
        }catch (error:any) {
            response.status(400).send({
                status: "error",
                error: error.message,
                statusCode: 400
            })
        }
    }
    public async updateUser(request: Request, response: Response): Promise<void> {
        try {
            const {id} = request.params;
            const {name} = request.body;

            if(!id) {
                response.status(400).send({
                    status: "alert",
                    message: "id not found",
                    statusCode: 400
                })
                return;
            }


            if(!name) {
                response.status(400).send({
                    status: "alert",
                    message: "Field name is required",
                    statusCode: 400
                })

                return;
            }

            const result = await this.service.update(Number(id), name);

            response.status(200).send({
                status: "success",
                users: {
                    result
                },
                statusCode: 200
            })
        }catch (error:any) {
            response.status(400).send({
                status: "error",
                error: error.message,
                statusCode: 400
            })
        }
    }
    public async inactiveUser(request: Request, response: Response): Promise<void> {
        try {
            const {id} = request.params;

            if(!id) {
                response.status(400).send({
                    status: "alert",
                    message: "id not found",
                    statusCode: 400
                })
                return;
            }

            await this.service.inactive(Number(id));

            response.status(200).send({
                status: "success",
                message: "User inactive with success",
                statusCode: 200
            })
        }catch (error:any) {
            response.status(400).send({
                status: "error",
                error: error.message,
                statusCode: 400
            })
        }
    }
}