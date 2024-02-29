import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Admin = sequelize.define("Admin", {
  firstName: { type: DataTypes.STRING },
  lastName: { type: DataTypes.STRING },
});

export default Admin;
