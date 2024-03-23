import initUserModel from "./User.js";
import initPostModel from "./Post.js";

export const initModels = (sequelize) => {
  initUserModel(sequelize);
  initPostModel(sequelize);

  // 여기서 모델간의 관계를 정의할 수 있습니다.
  // 예: sequelize.models.User.hasMany(sequelize.models.Post);
  // sequelize.models.Post.belongsTo(sequelize.models.User);
};
