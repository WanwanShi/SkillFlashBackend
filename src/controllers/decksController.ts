import express from "express";
import { fetchDecksByUsername, postDeck , patchDeck} from "../models/decksModels";

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

export function updateDeck(req: express.Request, res: express.Response, next: express.NextFunction){
    const {deck_id} = req.params;
    const {deckName, cards, chatHistory, tags} = req.body;
    console.log('deck id (string) -->',deck_id)
    patchDeck(deck_id, deckName, cards, chatHistory, tags)
    .then((result) => {
        res.status(204).send(result)
    })
    .catch(next)
}