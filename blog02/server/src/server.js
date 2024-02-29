import express from "express";
import cors from "cors";

// import boardRoutes from "./routes/board.routes.js";
// import userRoutes from "./routes/user.routes.js";

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3000;

// app.use("/api/v1/board", boardRoutes);
// app.use("/api/v1/admin", userRoutes);

// app.use("/fileMd", express.static("fileMd"));
// app.use("/fileThumb", express.static("fileThumb"));

app.listen(PORT, () => {
  console.log("Server up and running on port", PORT);
});
