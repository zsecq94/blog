import bcrypt from "bcrypt";
import sequelize from "../db.js";

export const hashedPassword = async (password) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  return await bcrypt.hash(password, salt);
};

const { User } = sequelize.models;

export const createUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const finallyHashing = await hashedPassword(password);

    const saveUser = await User.create({ username, password: finallyHashing });

    return res.json({ message: "성공" });
  } catch (error) {
    return res.json({ error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username: username } });

    if (!user) {
      return res.json({ state: false, msg: "사용자를 찾을 수 없습니다." });
    }

    // 비밀번호 비교
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      return res.json({ state: true, msg: "로그인 성공." });
    } else {
      return res.json({ state: false, msg: "비밀번호가 일치하지 않습니다." });
    }
  } catch (error) {
    return res.json({ error: error.message });
  }
};
