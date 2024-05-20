import express from "express";
import { signup } from "../controllers/usersController";


export const usersRouter = express.Router()

usersRouter.route('/signup').post(signup)

// usersRouter.route('/login').post()