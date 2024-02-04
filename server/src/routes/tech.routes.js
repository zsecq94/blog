import express from "express";
import { getTech, saveTechData } from "../controllers/tech.controller.js";

const testRoutes = express.Router();

testRoutes.route("/").get(getTech);
testRoutes.route("/save").post(saveTechData);

// testRoutes.route("/update").put(userUpdate);
// testRoutes.route("/delete-user-team").put(deleteUserTeam);
// testRoutes.route("/get-user/:id").get(getUser);
// testRoutes.route("/get-member/:name").get(getTeamMember);

export default testRoutes;
