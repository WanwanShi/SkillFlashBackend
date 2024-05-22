import express from "express";
import { fetchDecksByUsername, postDeck } from "../models/decksModels";

export function getDecksByUsername(req: express.Request, res: express.Response, next: express.NextFunction) {
    const { username } = req.params;
    fetchDecksByUsername(username)
        .then((decks) => {
            res.status(200).send({ decks });
        })
        .catch(next)
}

export function addNewDeck(req: express.Request, res: express.Response, next: express.NextFunction) {
    const { username } = req.params;
    const { deckName, cards } = req.body;
    postDeck(username, deckName, cards)
        .then((deck) => {
            res.status(201).send({ deck })
        })
        .catch(next)
}
