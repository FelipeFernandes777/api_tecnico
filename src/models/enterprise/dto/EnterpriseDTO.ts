import {ILeadDTO} from "../../../services/lead/leadServicesModel";

export interface IEnterpriseDTO {
    id: number
    name: string
    active: boolean
}

export interface IEnterpriseByIdDTO {
    id: number
    name: string
    leads: ILeadDTO[]
    active: boolean
    created_at: string
    updated_at: string
}

export interface IEnterpriseWhenActiveIsTrueDTO {
    id: number
    name: string
    active: boolean
    created_at: string
    updated_at: string
}