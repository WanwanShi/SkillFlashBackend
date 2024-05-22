import { getDb } from "../database/connection"
import { checkExistenceUser } from "./usersModel";
import { Card, deckFormat } from "../utils/AIDataFormatter";
export async function fetchDecksByUsername(username: string) {
    const db = getDb();
    if (username.length < 3) return Promise.reject({ status: 400, message: "no username provided" });
    if (! await checkExistenceUser(username)) return Promise.reject({ status: 404, message: "username does not exist" });
    return db.collection("decks").find({ username: username }).toArray();
}

export async function postDeck(username: string, deckName:string, cards: Card[]) {
    const db = getDb()
    if (username.length < 3) return Promise.reject({ status: 400, message: "no username provided" });
    if (! await checkExistenceUser(username)) return Promise.reject({ status: 404, message: "username does not exist" });
    const newDeck = deckFormat(deckName, cards, username)

    await db.collection('decks').insertOne(newDeck)
    return await db.collection('decks').findOne({deckName})
}