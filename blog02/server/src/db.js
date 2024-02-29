import Sequelize from "sequelize";

const sequelize = new Sequelize("blog", "root", "1234", {
  host: "127.0.0.1",
  dialect: "mysql",
});

export default sequelize;
