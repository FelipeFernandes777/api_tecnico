import { EnterpriseModel } from "../models/enterprise/enterpriseModel";
import { LeadModel } from "../models/lead/leadModel";

export function setupAssociations() {
    EnterpriseModel.hasMany(LeadModel, {foreignKey: "enterprise_id"});
    LeadModel.belongsTo(EnterpriseModel, {foreignKey: "enterprise_id"});
}