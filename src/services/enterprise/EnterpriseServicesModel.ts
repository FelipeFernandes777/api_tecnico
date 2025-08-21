import {
    IEnterpriseByIdDTO,
    IEnterpriseDTO,
    IEnterpriseWhenActiveIsTrueDTO
} from "../../models/enterprise/dto/EnterpriseDTO";


export interface EnterpriseServicesModel {
    listAll(): Promise<Array<IEnterpriseDTO>>

    listAllWhenActiveIsTrue(): Promise<Array<IEnterpriseWhenActiveIsTrueDTO>>

    listById(id: number): Promise<IEnterpriseByIdDTO>

    create(data: ICreateEnterpriseDTO): Promise<IEnterpriseDTO>

    update(id: number, data: IUpdateEnterpriseDTO): Promise<IEnterpriseDTO>

    delete(id: number): Promise<void>
}

export interface ICreateEnterpriseDTO {
    name: string
    active?: boolean
}

export interface IUpdateEnterpriseDTO {
    name: string
}