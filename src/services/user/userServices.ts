import UserModel from "../../models/user/userModel";
import {UserServicesModel} from "./userServicesModel";
import {IGetUserDTO} from "../../models/lead/dto/IGetUserDTO";
import {ICreateUserDTO} from "../../models/lead/dto/ICreateUserDTO";
import {IGetUserByIdDTO} from "../../models/lead/dto/IGetUserByIdDTO";
import {IUpdateUserDTO} from "../../models/lead/dto/IUpdateUserDTO";
import {Model} from "sequelize";

import bcrypt from 'bcrypt';

export class UserServices implements UserServicesModel{
    private readonly model = UserModel;

    private toIGetUserDTO(model: Model<any, any>): IGetUserDTO {
        const raw = model.get();

        return {
            id: raw.id,
            name: raw.name,
            email: raw.email,
            active: raw.active
        }
    }
    private toIGetUserByIdDTO(model: Model<any, any>): IGetUserByIdDTO {
        const raw = model.get();

        return {
            id: raw.id,
            name: raw.name,
            email: raw.email,
            active: raw.active,
            password: raw.password
        }
    }

    async create(data: ICreateUserDTO): Promise<IGetUserDTO> {
        try {
            const userAlreadyExists = await this.model.findOne({
                where: {
                    email: data.email,
                }
            })
            if(userAlreadyExists) {
                throw new Error("User already exists");
            }

            const passwordHash = await bcrypt.hash(data.password,10)
            console.log(passwordHash)

            const newUser = await this.model.create({
                email: data.email,
                password: passwordHash,
                name: data.name,
                active: data.active,
            });

            return this.toIGetUserDTO(newUser);


        }catch (e:any) {
            throw new Error(e.message);
        }
    }

    async inactive(id: number): Promise<void> {
        try {
            if(!id) {
                throw new Error("Id is required");
            }

            await this.model.update({ active: false },{ where: { id: id }});
        }catch (e:any) {
            throw new Error(e.message);
        }
    }

    async listAll(offset: number, limit: number): Promise<IGetUserDTO[]> {
        try{
            const users = await this.model.findAll({
                offset, limit: limit ? limit : 20
            })


            if(users.length === 0){
                throw new Error("No users found.");
            }

            return users.map((u) => this.toIGetUserDTO(u))
        }catch(err:any){
            throw new Error(err.message);
        }
    }


    async listById(id: number): Promise<IGetUserByIdDTO> {
        try {
            if(!id) {
                throw new Error("Id is required");
            }

            const user =  await this.model.findByPk(id)

            if(!user) {
                throw new Error("No user found.");
            }

            return this.toIGetUserByIdDTO(user);

        }catch (e:any) {
            throw new Error(e.message);
        }
    }

    async update(id: number, data: IUpdateUserDTO): Promise<IGetUserDTO> {
        try {
            if(!id) {
                throw new Error("Id is required");
            }

            const user = await this.model.findByPk(id)
            if(!user) {
                throw new Error("No user found.");
            }

            await user.update({...data});

            return this.toIGetUserDTO(user);

        }catch (e:any) {
            throw new Error(e.message);
        }
    }
}