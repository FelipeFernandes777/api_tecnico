import LeadServices from "../services/lead/leadServices";
import {Request, Response} from "express";

export default class LeadController {
    private readonly services = new LeadServices();

    public async listAllLeads(request: Request, response: Response) {
        try {

            const {offset, limit} = request.body;

            if(!offset && !limit){
                response.status(400).send({
                    status: "alert",
                    statusCode: 400,
                    message: "Data missing"
                })
            }

            const result = await this.services.listAll(offset,limit);

            response.send({
                status: "success",
                statusCode: 200,
                lead: result,
            })

        }catch (error:any) {
            response.status(400).json({
                status: "error",
                statusCode: 400,
                message: error.message
            });
        }
    }
    public async listLeadById(request: Request, response: Response) {
        try {

            const { id } = request.params;

            if(!id){
                response.status(400).send({
                    status: "alert",
                    statusCode: 400,
                    message: "ID is required"
                })
            }

            const result = await this.services.listById(Number(id));

            response.send({
                status: "success",
                statusCode: 200,
                lead: result,
            })

        }catch (error:any) {
            response.status(400).json({
                status: "error",
                statusCode: 400,
                message: error.message
            });
        }
    }
    public async createLead(request: Request, response: Response) {
        try {

            const {name, areaOfInterest, phone, enterpriseId} = request.body;

            if(!enterpriseId){
                response.status(400).send({
                    status: "alert",
                    statusCode: 400,
                    message: "Enterprise Id is required"
                })
            }

            if(!name && !areaOfInterest && !phone){
                response.status(400).send({
                    status: "alert",
                    statusCode: 400,
                    message: "All fields are required"
                })
            }

            const result = await this.services.create(Number(enterpriseId), {
                name,
                areaOfInterest,
                phone
            });

            response.send({
                status: "success",
                statusCode: 201,
                lead: result,
            })

        }catch (error:any) {
            response.status(400).json({
                status: "error",
                statusCode: 400,
                message: error.message
            });
        }
    }
}