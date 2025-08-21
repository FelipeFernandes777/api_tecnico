import {sequelize} from "../../config/dbConnection";
import {DataTypes} from "sequelize";
import {LeadModel} from "../lead/leadModel";

export const EnterpriseModel = sequelize.define("Enterprise", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
},
    {
    tableName: "enterprises",
    timestamps: true,
    underscored: true
});

EnterpriseModel.hasMany(LeadModel, { foreignKey: "enterprise_id" });

// created_at: {
//     type: DataTypes.DATE,
//     allowNull: false,
//     defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
// },
// updated_at: {
//     type: DataTypes.DATE,
//     allowNull: false,
//     defaultValue: sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
// }