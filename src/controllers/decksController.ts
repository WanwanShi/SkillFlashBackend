import express from "express";
import {
  deleteDeck,
  fetchDecksByUsername,
  patchDeck,
  postDeck,
} from "../models/decksModel";

export function getDecksByUsername(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const { username } = req.params;
  fetchDecksByUsername(username)
    .then((decks) => {
      res.status(200).send({ decks });
    })
    .catch(next);
}

export function addNewDeck(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const { username } = req.params;
  const { deckName, tags } = req.body;
  postDeck(username, deckName, tags)
    .then((deck) => {
      res.status(201).send({ deck });
    })
    .catch(next);
}

export function updateDeck(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const { deck_id } = req.params;
  const { deckName, tags } = req.body;
  patchDeck(deck_id, deckName, tags)
    .then((deck) => {
      res.status(200).send({ deck });
    })
    .catch(next);
}

export function removeDeck(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const { deck_id } = req.params;
  deleteDeck(deck_id)
    .then(() => {
      res.status(204).send();
    })
    .catch(next);
}
