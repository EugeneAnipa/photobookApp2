import { Sequelize, DataTypes } from "sequelize";
import "dotenv/config";

const sequelize = new Sequelize(
  process.env.SEQUELIZEDATABASE,
  process.env.SEQUELIZEUSER,
  process.env.SEQUELIZEPASSWORD,
  {
    dialect: "mysql",
    host: process.env.SEQUELIZEHOST,
    logging: (...msg) => console.log(msg),
  }
);

await sequelize.sync({ force: true });
console.log("All models were sync successfully");
const sequelizeTest = await sequelize
  .authenticate()
  .then(() => console.log("connected to the database..sequelize"))
  .catch((err) => console.log(err));

export { sequelize, sequelizeTest, DataTypes };
