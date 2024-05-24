import express from "express";
import {
  getDecksByUsername,
  addNewDeck,
  updateDeck,
  removeDeck,
  updateCards,
} from "../controllers/decksController";

export const decksRouter = express.Router();

decksRouter.route("/:username").get(getDecksByUsername).post(addNewDeck);

decksRouter.route("/:deck_id/cards").patch(updateCards);

decksRouter.route("/:deck_id").patch(updateDeck).delete(removeDeck);
