import express from "express";
import { getDecksByUsername, addNewDeck } from "../controllers/decksController";
export const decksRouter = express.Router();

decksRouter
    .route("/:username")
    .get(getDecksByUsername)
    .post(addNewDeck)