import { DataTypes } from "sequelize";

const initPostModel = (sequelize) => {
  sequelize.define("Post", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    explanation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subCategory: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      get() {
        return moment(this.getDataValue("createdAt")).format(
          "YYYY.MM.DD HH:mm:ss"
        );
      },
    },
    updatedAt: {
      type: DataTypes.DATE,
      get() {
        return moment(this.getDataValue("updatedAt")).format(
          "YYYY.MM.DD HH:mm:ss"
        );
      },
    },
  });
};

export default initPostModel;

// type: 필드의 데이터 타입을 설정합니다. 예: DataTypes.STRING, DataTypes.INTEGER, DataTypes.DATE 등.
// allowNull: 필드 값이 null이 될 수 있는지 설정합니다. 기본값은 true입니다.
// unique: 필드 값이 유일해야 하는지 설정합니다. 기본값은 false입니다.
