import express from "express";
import cors from "cors";
import sequelize from "./db.js";

// import boardRoutes from "./routes/board.routes.js";
// import userRoutes from "./routes/user.routes.js";

// app.use("/api/v1/board", boardRoutes);
// app.use("/api/v1/admin", userRoutes);

// app.use("/fileMd", express.static("fileMd"));
// app.use("/fileThumb", express.static("fileThumb"));

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3000;

try {
  await sequelize.sync({ force: false });
  console.log("✅ DB 연결 성공");
} catch (error) {
  console.error("⛔ DB 연결 실패 : ", error);
}

app.listen(PORT, () => {
  console.log("Server up and running on port", PORT);
});
