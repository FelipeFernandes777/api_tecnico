import jwt from "jsonwebtoken"
import dotenv from "dotenv";


dotenv.config()
export class GenerateTokenProvider {
    async execute(userId: string){
        const secretKey = "0e4d3251719880a2726d67aaca628af31b24d1e46bb6f922a1846a556d3d1605";

        const token = jwt.sign({}, secretKey, {
            subject: String(userId),
            expiresIn: 60 * 60 * 24 * 30 // 1 mont
        })

        return token;
    }
}