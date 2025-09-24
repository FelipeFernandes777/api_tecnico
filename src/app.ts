import cors from 'cors';
import express, {Express} from "express";
import dotenv from 'dotenv';
import {mainRouter} from "./routes/mainRouter";
import swaggerUi from 'swagger-ui-express';
import {swaggerDocs} from "./docs/swagger";
import {setupAssociations} from "./config/setupAssocietaions";

export default class Server {
    private sv:Express = express();

    constructor() {
        dotenv.config();
        this.sv.use(cors({
            origin: true,
            methods: ["GET","PUT","DELETE", "POST"]
        }));
        this.sv.use(express.json());
        this.routes();
    }

    public startServer(port:number, message:string) {
        return this.sv.listen(port, () => {
            console.log(message)
        })
    }

    private routes():void {
        this.sv.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
	this.sv.use(mainRouter)	
    }

    public getSv() {
        return this.sv;
    }
}
