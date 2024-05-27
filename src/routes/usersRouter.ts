import express from "express";
import {
	getUserByUsername,
	signup,
	login,
	removeUserByUsername,
	patchUserByUsername,
} from "../controllers/usersController";

export const usersRouter = express.Router();
usersRouter
	.route("/:username")
	.get(getUserByUsername)
	.patch(patchUserByUsername)
	.delete(removeUserByUsername);
usersRouter.route("/signup").post(signup);
usersRouter.route("/login").post(login);
