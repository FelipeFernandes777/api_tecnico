import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    "rafa5537_tecnico",
    "rafa5537_tecnico",
    "5Teo?}!fy%]I",
    {
        host: "108.179.241.227",
        port: 3306,
        dialect: "mysql",
        logging: false,
    }
);

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Conectado ao MySQL com sucesso! ✅");

        // cuidado: force:true DROPPA tabelas sempre
        await sequelize.sync({ alter: true });
        console.log("Sincronização concluída ✅");
    } catch (error) {
        console.error("Erro ao conectar ao MySQL: ", error);
    }
})();

export { sequelize };
