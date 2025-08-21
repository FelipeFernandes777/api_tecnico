import {NextFunction, Request,Response} from "express";
import {verify} from "jsonwebtoken";

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction){
    const authToken = req.headers.authorization;

    if(!authToken){
        return res.status(401).send("Not Authenticated, Token is missing");
    }

    const [bearrer, token] = authToken.split(" ");

    try {
        const secretKey = process.env.SECRET_KEY || "";

        verify(token, secretKey);

        return next();

    } catch(err:any){
        res.status(401).send({
            status: "alert",
            statusCode: 401,
            message: `Authentication failed with code ${err.code}`,
        });
    }
}