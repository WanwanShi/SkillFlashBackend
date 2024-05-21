import express from "express";
import {
	getUserByUsername,
	signup,
	login,
} from "../controllers/usersController";

export const usersRouter = express.Router();
usersRouter.route("/:username").get(getUserByUsername);
usersRouter.route("/signup").post(signup);
usersRouter.route("/login").post(login);
