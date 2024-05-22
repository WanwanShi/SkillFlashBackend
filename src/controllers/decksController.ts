import express from "express";
import { fetchDecksByUsername } from "../models/decksModels";

export function getDecksByUsername(req: express.Request, res: express.Response, next: express.NextFunction) {
    const { username } = req.params;
    fetchDecksByUsername(username)
        .then((decks) => {
            res.status(200).send({ decks });
        })
        .catch(next)
}