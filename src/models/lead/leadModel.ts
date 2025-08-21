import {DataTypes} from "sequelize";
import {sequelize} from "../../config/dbConnection";

export const LeadModel = sequelize.define("leads", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fullerName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    areaOfInterest: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: "leads",
    timestamps: true
})