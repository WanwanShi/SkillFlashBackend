import express from "express";
import {
  getUserByUsername,
  signup,
  login,
  removeUserByUsername,
} from "../controllers/usersController";

export const usersRouter = express.Router();
usersRouter
  .route("/:username")
  .get(getUserByUsername)
  .delete(removeUserByUsername);
usersRouter.route("/signup").post(signup);
usersRouter.route("/login").post(login);
