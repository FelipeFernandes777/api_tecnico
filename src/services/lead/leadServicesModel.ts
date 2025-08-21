export interface LeadServicesModel {
    listAll(offset:number, limit?: number): Promise<Array<ILeadDTO>>

    listById(id: number): Promise<ILeadDTO>

    create(enterpriseId: number, data: ICreateLeadDTO): Promise<ILeadDTO>
}

export interface ILeadDTO {
    id: number
    name: string
    phone: string
    areaOfInterest: string
}
export interface ICreateLeadDTO {
    name: string
    phone: string
    areaOfInterest: string
}