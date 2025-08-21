import {LeadServicesModel, ICreateLeadDTO, ILeadDTO} from "./leadServicesModel";
import {Model} from "sequelize";
import {EnterpriseModel} from "../../models/enterprise/enterpriseModel";
import {LeadModel} from "../../models/lead/leadModel";

export default class LeadServices implements LeadServicesModel{

    private readonly enterpriseModel = EnterpriseModel;
    private readonly leadModel = LeadModel;

    private toILeadDto(model: Model<any,any>):ILeadDTO {
        const raw = model.get()

        return {
            id: raw.id,
            name: raw.name,
            phone: raw.phone,
            areaOfInterest: raw.areaOfInterest,
        }
    }
    private toILeadDtoList(model: Model<any,any>[]):ILeadDTO[] {
        const result: ILeadDTO[] = [];

        model.forEach((item) => {
            result.push(item.get());
        })

        return result;
    }
    async create(enterpriseId: number, data: ICreateLeadDTO): Promise<ILeadDTO> {
        try{
            if(!enterpriseId) {
                throw new Error("Enterprise Id is required");
            }
            if(!data.name || !data.phone || !data.areaOfInterest) {
                throw new Error("All fields is required");
            }
            const enterprise = await this.enterpriseModel.findOne({
                where: {
                    id: enterpriseId
                }
            });
            if(!enterprise) {
                throw new Error("Enterprise not found");
            }

            const newLead = await this.leadModel.create({
                enterpriseId: enterpriseId,
                ...data
            })

            return this.toILeadDto(newLead);

        }catch(error){
            throw error;
        }
    }
    async listAll(offset:number, limit:number = 20): Promise<Array<ILeadDTO>> {
        try {
            const result = await this.leadModel.findAll({
                limit: limit, // Aparece 20
                offset: offset // Skip ( limit anterior + offset )
            })

            return this.toILeadDtoList(result);
        }catch (error) {
            throw error;
        }
    }
    async listById(id: number): Promise<ILeadDTO> {
        try {
            if(!id) throw new Error("Lead Id is required");

            const lead = await this.leadModel.findByPk(id);

            if(!lead) {
                throw new Error("Lead not found");
            }

            return this.toILeadDto(lead);

        }catch (error) {
            throw error;
        }
    }
}