import express from "express";
import cors from "cors";

import testRoutes from "./routes/tech.routes.js";

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3000;

app.use("/tech", testRoutes);

app.listen(PORT, () => {
  console.log("Server up and running on port", PORT);
});
