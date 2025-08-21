import { EnterpriseServicesModel, ICreateEnterpriseDTO, IUpdateEnterpriseDTO } from "./EnterpriseServicesModel";
import {
    IEnterpriseByIdDTO,
    IEnterpriseDTO,
    IEnterpriseWhenActiveIsTrueDTO
} from "../../models/enterprise/dto/EnterpriseDTO";
import { EnterpriseModel } from "../../models/enterprise/enterpriseModel";
import { Model } from "sequelize";

//TODO criar middleware de erros para EnterpriseServices
export default class EnterpriseServices implements EnterpriseServicesModel {

    private readonly model = EnterpriseModel;

    private toEnterpriseDTO(model: Model<any, any>): IEnterpriseDTO {
        const raw = model.get();
        return {
            id: raw.id,
            name: raw.name,
            active: raw.active
        };
    }
    private toEnterpriseByIdDTO(model: Model<any, any>): IEnterpriseByIdDTO {
        const raw = model.get();
        return {
            id: raw.id,
            name: raw.name,
            leads: [],
            active: raw.active,
            created_at: raw.created_at,
            updated_at: raw.updated_at
        };
    }
    private toEnterpriseWhenActiveIsTrueDTO(model: Model<any, any>): IEnterpriseWhenActiveIsTrueDTO {
        const raw = model.get();
        return {
            id: raw.id,
            name: raw.name,
            active: raw.active,
            created_at: raw.created_at,
            updated_at: raw.updated_at
        };
    }

    async create(data: ICreateEnterpriseDTO): Promise<IEnterpriseDTO> {
        try {
            const userAlreadyExists = await this.model.findOne({ where: { name: data.name } });

            if (userAlreadyExists) {
                throw new Error("Empresa já existe");
            }

            const enterprise = await this.model.create({ ...data });
            return this.toEnterpriseDTO(enterprise);
        } catch (e: any) {
            throw new Error(e.message);
        }
    }
    async listAll(): Promise<IEnterpriseDTO[]> {
        try {
            const enterprises = await this.model.findAll();
            return enterprises.map(e => this.toEnterpriseDTO(e));
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
    async listAllWhenActiveIsTrue(): Promise<IEnterpriseWhenActiveIsTrueDTO[]> {
        try {
            const enterprises = await this.model.findAll({ where: { active: true } });
            return enterprises.map(e => this.toEnterpriseWhenActiveIsTrueDTO(e));
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
    async listById(id: number): Promise<IEnterpriseByIdDTO> {
        try {
            const enterprise = await this.model.findByPk(id);
            if (!enterprise) throw new Error("Enterprise not found");
            return this.toEnterpriseByIdDTO(enterprise);
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
    async update(id: number, data: IUpdateEnterpriseDTO): Promise<IEnterpriseDTO> {
        try {
            if (!id) throw new Error(`id is required`);
            if (!data.name) throw new Error("name is required");

            await this.model.update(data, { where: { id } });
            const updatedEnterprise = await this.model.findByPk(id);
            if (!updatedEnterprise) throw new Error("Enterprise not found after update");

            return this.toEnterpriseDTO(updatedEnterprise);

        } catch (error: any) {
            throw new Error(error.message);
        }
    }
    async delete(id: number): Promise<void> {
        try {
            if (id == null) {
                throw new Error("id is required");
            }
            await this.model.update(
                {
                    active: false
                },
                {
                    where: {
                        id: id
                    }
                }
            )
        } catch (error) {
            console.error(error);
        }
    }
}
