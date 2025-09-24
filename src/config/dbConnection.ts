import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    "tecnico",
    "postgres",
    "admin",
    {
        host: "31.97.40.222",
        port: 5432,
        dialect: "postgres",
        logging: false,
    }
);

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Conectado ao PostgresSQL com sucesso! ✅");

        // cuidado: force:true DROPPA tabelas sempre
        await sequelize.sync({ alter: true });
        console.log("Sincronização concluída ✅");
    } catch (error) {
        console.error("Erro ao conectar ao PostgreSQL: ", error);
    }
})();

export { sequelize };
