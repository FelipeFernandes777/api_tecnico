import UserModel from "../../models/user/userModel";
import {compare} from "bcrypt";
import {GenerateTokenProvider} from "../../provider/GenerateTokenProvider";


//TODO fazer classes de errors
export class AuthUserServices {

    private readonly model = UserModel;

    public async execute({email,password}: {email: string, password: string}) {
        const userAlreadyExists = await this.model.findOne({
            where: {email},
        })

        if(!userAlreadyExists) {
            console.error("User not exists");
            return;
        }

        const passwordMatch = compare(password, userAlreadyExists.get().password)

        if(!passwordMatch) {
            console.error("Password not match");
            return;
        }


        const generateToken = new GenerateTokenProvider();
        const token = await generateToken.execute(userAlreadyExists.get().id)

        return token
    }
}