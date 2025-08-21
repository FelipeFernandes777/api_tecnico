import {Sequelize} from "sequelize";

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "../db/dev.sqlite"
});

(
    async () => {
        try {
            await sequelize.authenticate();

            await sequelize.sync({force: true});
        }catch (error) {
            console.error("Erro ao conectar ao SQLite: ", error)
        }
    }
)();


export { sequelize };