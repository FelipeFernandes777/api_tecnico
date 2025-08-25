import {ICreateUserDTO} from "../../models/lead/dto/ICreateUserDTO";
import {IGetUserByIdDTO} from "../../models/lead/dto/IGetUserByIdDTO";
import {IGetUserDTO} from "../../models/lead/dto/IGetUserDTO";
import {IUpdateUserDTO} from "../../models/lead/dto/IUpdateUserDTO";

export interface UserServicesModel {
    create(data: ICreateUserDTO): Promise<IGetUserDTO>

    listAll(offset: number, limit: number): Promise<IGetUserDTO[]>
    listById(id: number): Promise<IGetUserByIdDTO>
    update(id: number ,data: IUpdateUserDTO): Promise<IGetUserDTO>
    inactive(id: number): Promise<void>
}