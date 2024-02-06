import express from "express";
import cors from "cors";

import testRoutes from "./routes/tech.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3000;

app.use("/tech", testRoutes);
app.use("/admin", userRoutes);

app.listen(PORT, () => {
  console.log("Server up and running on port", PORT);
});
