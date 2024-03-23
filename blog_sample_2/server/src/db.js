import { Sequelize } from "sequelize";
import { initModels } from "./models/index.js";

const sequelize = new Sequelize("blog", "root", "1234", {
  host: "127.0.0.1",
  dialect: "mysql",
  logging: false,
});

initModels(sequelize);

export default sequelize;
