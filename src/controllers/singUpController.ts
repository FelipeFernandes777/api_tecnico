import { Request, Response } from 'express'
import {AuthUserServices} from "../services/user/authUserServices";


export default class SingUpController {

    private readonly service = new AuthUserServices();

    public async singUp(request:Request, response:Response) {
        try {
            const {email, password} = request.body;

            if(!email || !password){
                response.status(400).send({
                    status: "alert",
                    statusCode: 400,
                    message: "Email or password is missing"
                })
            }

            const token = await this.service.execute({email,password})

            console.log("token >>>> :", token)

            response.status(200).send({
                status: "success",
                statusCode: 200,
                authToken: {
                    token
                }
            })

        }catch (error:any) {
            response.status(500).send({
                status: "error",
                statusCode: 500,
                message: `${error.message} \n Erro de autenticação`
            })
        }
    }
}