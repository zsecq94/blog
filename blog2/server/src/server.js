import express from "express";
import cors from "cors";

import sequelize from "./db.js";

import userRoutes from "./routes/user.routes.js";
import postRoutes from "./routes/post.routes.js";

// app.use("/fileMd", express.static("fileMd"));
// app.use("/fileThumb", express.static("fileThumb"));

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
});
