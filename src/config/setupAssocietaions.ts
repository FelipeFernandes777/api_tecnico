import { EnterpriseModel } from "../models/enterprise/enterpriseModel";
import { LeadModel } from "../models/lead/leadModel";

export function setupAssociations() {
    EnterpriseModel.hasMany(LeadModel, {
        foreignKey: "enterprise_id",
        as: "leads",
    });

    LeadModel.belongsTo(EnterpriseModel, {
        foreignKey: "enterprise_id",
        as: "enterprise",
    });
}
