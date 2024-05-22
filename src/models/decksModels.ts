import { getDb } from "../database/connection"
import { checkExistenceUser } from "./usersModel";
import { Card, deckFormat } from "../utils/AIDataFormatter";

export async function fetchDecksByUsername(username: string) {
    const db = getDb();
    if (username.length < 3) return Promise.reject({ status: 400, message: "no username provided" });
    if (! await checkExistenceUser(username)) return Promise.reject({ status: 404, message: "username does not exist" });
    return db.collection("decks").find({ username: username }).toArray();
}

export async function postDeck(username: string, deckName: string, cards: Card[]) {
    const db = getDb()
    
    if (!deckName || !cards || !username) return Promise.reject({ status: 400, message: "malformed request body" });
    
    if (! await checkExistenceUser(username)) return Promise.reject({ status: 404, message: "username does not exist" });

    if (username.length < 3) return Promise.reject({ status: 400, message: "no username provided" });

    for (const card of cards) {
        if (!card.Q || !card.A || !card.tag || card.Y || card.N) { return Promise.reject({ status: 400, message: "malformed request body" }) }

    }

    // should we be filtering out cards which are not valid from decks or rejecting the whole deck?

    const newDeck = deckFormat(deckName, cards, username)
    await db.collection('decks').insertOne(newDeck)
    return await db.collection('decks').findOne({ deckName })
}