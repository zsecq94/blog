import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

const initUserModel = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      username: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
    },
    {
      timestamps: false,
    }
  );
};
export default initUserModel;
