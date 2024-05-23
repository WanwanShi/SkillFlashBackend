import { getDb } from "../database/connection"
import { checkExistenceUser } from "./usersModel";
import { Card, deckFormat } from "../utils/AIDataFormatter";
import { ObjectId } from "mongodb";
import { isValidObjectId } from "mongoose";



export async function fetchDecksByUsername(username: string) {
    const db = getDb();
    if (username.length < 3) return Promise.reject({ status: 400, message: "no username provided" });
    if (! await checkExistenceUser(username)) return Promise.reject({ status: 404, message: "username does not exist" });
    return db.collection("decks").find({ username: username }).toArray();
}

export async function postDeck(username: string, deckName: string, cards: Card[]) {
    const db = getDb()
    if (! await checkExistenceUser(username)) return Promise.reject({ status: 404, message: "username does not exist" });

    if (!deckName || !cards || !username) return Promise.reject({ status: 400, message: "malformed request body" });


    if (username.length < 3) return Promise.reject({ status: 400, message: "no username provided" });


    const filteredCards = cards.filter((card) => {
        const keyArr = Object.keys(card)
        const mustHaveKeys = ['Y', 'N', 'Q', 'A', 'tag']
        return mustHaveKeys.every((key) => keyArr.includes(key))

    })

    if (!filteredCards.length) {
        return Promise.reject({ status: 400, message: "malformed request body" })
    }
    if (cards.length - filteredCards.length > 2) {
        return Promise.reject({ status: 400, message: "not enough passing cards" })
    }


    const newDeck = deckFormat(deckName, cards, username)
    await db.collection('decks').insertOne(newDeck)
    return await db.collection('decks').findOne({ deckName })
}

export async function patchDeck(deck_id: string, deckName: string, cards: Card[], chatHistory: string[], tags: string[]) {
    const db = getDb();
    if (!isValidObjectId(deck_id)) return Promise.reject({ status: 400, message: "bad deck_id" });
    const objectId = new ObjectId(deck_id);
    const deck = await db.collection('decks').findOne({ _id: objectId })




    if (!deck) return Promise.reject({ status: 404, message: "deck not found" });
    if (deckName && typeof deckName === 'string') deck.deckName = deckName;
    if (cards && Array.isArray(cards)) deck.cards = cards;
    if (chatHistory && Array.isArray(chatHistory)) deck.chatHistory = chatHistory;
    if (tags && Array.isArray(tags)) deck.tags = tags;
    else { return Promise.reject({ status: 400, message: 'bad or empty request body' }) }

    return await db.collection('decks').updateOne({ _id: objectId }, { $set: deck });
}