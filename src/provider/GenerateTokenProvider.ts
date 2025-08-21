import jwt from "jsonwebtoken"

export class GenerateTokenProvider {
    async execute(userId: string){
        const secretKey = process.env.SECRET_KEY || "";

        const token = jwt.sign({}, secretKey, {
            subject: userId,
            expiresIn: 60 * 60 * 24 * 30 // 1 month
        })

        return token;
    }
}