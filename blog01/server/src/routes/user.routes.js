import express from "express";
import { login } from "../controllers/user.controller.js";

const loginRoutes = express.Router();

loginRoutes.route("/login").post(login);

export default loginRoutes;
