import express from "express";
import {
  deleteDeck,
  fetchDecksByUsername,
  patchDeck,
  postDeck,
  patchDeckWithoutAI
} from "../models/decksModel";

export async function getDecksByUsername(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const { username } = req.params;
  try {
    const decks = await fetchDecksByUsername(username);
    res.status(200).send({ decks });
  } catch (err) {
    next(err);
  }
}

export async function addNewDeck(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const { username } = req.params;
  const { deckName, tags } = req.body;
  try {
    const deck = await postDeck(username, deckName, tags);
    res.status(201).send({ deck });
  } catch (err) {
    next(err);
  }
}

export async function updateDeck(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const { deck_id } = req.params;
  const { deckName, tags, cards} = req.body;

  try {
    const deck = !cards
    ?await patchDeck(deck_id, deckName, tags)
    :await patchDeckWithoutAI(deck_id, deckName, cards)
    res.status(200).send({ deck });
  } catch (err) {
    next(err);
  }
}

export async function removeDeck(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const { deck_id } = req.params;
  try {
    await deleteDeck(deck_id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}
