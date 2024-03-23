import express from "express";
import { createUser, loginUser } from "../controllers/user.controller.js";

const userRoutes = express.Router();

userRoutes.post("/", createUser);
userRoutes.post("/login", loginUser);

export default userRoutes;
