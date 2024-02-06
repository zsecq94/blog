import connection from "../db.js";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  try {
    const { id, password } = req.body;
    const query = "SELECT * FROM admin WHERE id = ?";

    connection.query(query, [id], (err, data) => {
      if (err) return res.json(err);
      if (data.length > 0) {
        bcrypt.compare(password, data[0].password, (err, result) => {
          if (err) return res.json(err);
          if (result) {
            return res.send(true);
          } else {
            return res.send(false);
          }
        });
      } else {
        return res.send(false);
      }
    });
  } catch (error) {
    console.log("error in login", error);
  }
};

// const saltRounds = 10; // 솔트 라운드 설정. 값이 클수록 해싱에 걸리는 시간이 길어짐.
// // 비밀번호를 암호화
// bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
//   if (err) {
//     console.log(err);
//     return res.send(false);
//   }
//   // 암호화된 비밀번호를 데이터베이스에 저장
//   const query = "INSERT INTO admin (id, password) VALUES (?, ?)";
//   connection.query(query, [id, hashedPassword], (err, data) => {
//     if (err) {
//       console.log(err);
//       return res.send(false);
//     }
//     return res.send(true);
//   });
// });
