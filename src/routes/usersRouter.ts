import express from "express";
import { getUserByUsername, signup } from "../controllers/usersController";

export const usersRouter = express.Router();
usersRouter.route("/").get(getUserByUsername);
usersRouter.route("/signup").post(signup);

// usersRouter.route('/login').post(login)
