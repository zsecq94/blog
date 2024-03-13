import express from "express";
import { login } from "../controllers/admin.controller.js";

const loginRoutes = express.Router();

loginRoutes.route("/login").post(login);

export default loginRoutes;
