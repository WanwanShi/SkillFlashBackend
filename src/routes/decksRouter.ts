import express from "express";
import { getDecksByUsername } from "../controllers/decksController";
export const decksRouter = express.Router();

decksRouter.route("/:username").get(getDecksByUsername);