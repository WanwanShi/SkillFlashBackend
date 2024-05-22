import express from "express";
import { getDecksByUsername, addNewDeck, updateDeck } from "../controllers/decksController";
export const decksRouter = express.Router();

decksRouter
    .route("/:username")
    .get(getDecksByUsername)
    .post(addNewDeck)

decksRouter
    .route("/:deck_id")
    .patch(updateDeck)