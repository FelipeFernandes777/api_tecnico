import {NextFunction, Request,Response} from "express";
import json from "jsonwebtoken";

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction){
    const authToken = req.headers.authorization;

    if(!authToken){
        return res.status(401).send("Not Authenticated, Token is missing");
    }

    const [bearrer, token] = authToken.split(" ");

    try {
        const secretKey = process.env.SECRET_KEY || "0e4d3251719880a2726d67aaca628af31b24d1e46bb6f922a1846a556d3d1605";

        json.verify(token, secretKey);

        return next();

    } catch(err:any){
        res.status(401).send({
            status: "alert",
            statusCode: 401,
            message: `Authentication failed with code ${err.code}`,
        });
    }
}