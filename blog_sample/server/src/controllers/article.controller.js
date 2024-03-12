import connection from "../db.js";
import { upload } from "../../middleware/multer.js";

export const getBoard = async (req, res) => {
  try {
    const query = "select * from board";
    connection.query(query, (err, data) => {
      if (err) return res.json(err);
      return res.send(data);
    });
  } catch (error) {
    console.log("error in getTech", error);
  }
};

export const saveBoard = async (req, res) => {
  try {
    upload(req, res, function (err) {
      if (err) {
        return res.status(422).send("an Error occured");
      }
      const { title, category } = req.body;
      const mdFile = req.files.md[0].path;
      const thumbFile = req.files.thumb[0].path;
      const query = `INSERT INTO board (title, thumb, md, category) VALUES (?, ?, ?, ?)`;
      connection.query(query, [title, thumbFile, mdFile, category], (err, data) => {
        if (err) {
          console.log(err);
          return res.send({
            state: false,
            message: "등록실패",
          });
        }
        return res.send({
          state: true,
          message: "등록완료",
        });
      });
    });
  } catch (error) {
    console.log("error in saveTechData", error);
  }
};
