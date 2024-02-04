import connection from "../db.js";

export const getTech = async (req, res) => {
  try {
    const query = "select * from tech";
    connection.query(query, (err, data) => {
      if (err) return res.json(err);
      res.send(data);
    });
  } catch (error) {
    console.log("error in getTech", error);
  }
};

export const saveTechData = async (req, res) => {
  try {
    const { title, content } = req.body;
    const query = `INSERT INTO tech (title, content) VALUES (?, ?)`;
    connection.query(query, [title, content], (err, data) => {
      if (err) {
        res.send({
          message: "등록실패",
        });
      }
      res.send({
        message: "등록완료",
      });
    });
    console.log(query);
  } catch (error) {
    console.log("error in saveTechData", error);
  }
};
