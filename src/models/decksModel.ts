import { getDb } from "../database/connection";
import { checkExistenceUser as checkUserExists } from "./usersModel";
import { deckFormat } from "../utils/AIDataFormatter";
import { ObjectId } from "mongodb";
import { isValidObjectId } from "mongoose";
import { Card } from "../utils/cohere/utils";

import { cohereRequestCards } from "../utils/cohere/utils";

export async function fetchDecksByUsername(username: string) {
  if (username.length < 3)
    return Promise.reject({ status: 400, message: "no username provided" });

  if (!(await checkUserExists(username)))
    return Promise.reject({ status: 404, message: "username does not exist" });

  const db = getDb();
  return db.collection("decks").find({ username: username }).toArray();
}

export async function postDeck(username: string, deckName: string, tags: []) {
  if (!tags || !deckName || !username)
    return Promise.reject({
      status: 400,
      message: "Malformed request body",
    });
  const db = getDb();
  if (!(await checkUserExists(username)))
    return Promise.reject({ status: 404, message: "Username does not exist" });

  const [newChatHistory, cards] = await cohereRequestCards(tags);

  if (!cards)
    return Promise.reject({
      status: 400,
      message: "Failed generating cards. Please try again.",
    });

  if (username.length < 3)
    return Promise.reject({ status: 400, message: "No username provided" });

  try {
    const passingCards = await checkForEnoughPassingCards(cards);
    const newDeck = deckFormat(
      deckName,
      passingCards,
      username,
      newChatHistory
    );
    await db.collection("decks").insertOne(newDeck);
    return await db.collection("decks").findOne({ deckName });
  } catch (error) {
    return Promise.reject({
      status: 400,
      message: "Failed generating cards. Please try again.",
    });
  }
}

export async function patchDeck(deck_id: string, deckName: string, tags: []) {
  const db = getDb();

  if (!isValidObjectId(deck_id)) {
    return Promise.reject({ status: 400, message: "bad deck_id" });
  }
  if (!tags || !Array.isArray(tags))
    return Promise.reject({
      status: 400,
      message: "bad or empty request body",
    });
  const objectId = new ObjectId(deck_id);
  const deck = await db.collection("decks").findOne({ _id: objectId });
  if (!deck) return Promise.reject({ status: 404, message: "deck not found" });

  const [newChatHistory, cards] = await cohereRequestCards(tags);

  if (deckName && typeof deckName === "string") deck.deckName = deckName;
  if (cards && Array.isArray(cards)) deck.cards = cards;
  if (newChatHistory && Array.isArray(newChatHistory))
    deck.chatHistory = [...deck.chatHistory, ...newChatHistory];

  if (tags && Array.isArray(tags)) deck.tags = tags;
  else {
    return Promise.reject({
      status: 400,
      message: "bad or empty request body",
    });
  }

  await db.collection("decks").updateOne({ _id: objectId }, { $set: deck });
  return await db.collection("decks").findOne({ _id: objectId });
}

export async function deleteDeck(deck_id: string) {
  const db = getDb();

  if (!isValidObjectId(deck_id)) {
    return Promise.reject({ status: 400, message: "Malformed request body" });
  }
  const objectId = new ObjectId(deck_id);

  const result = await db.collection("decks").deleteOne({ _id: objectId });

  if (result.deletedCount === 0)
    return Promise.reject({
      status: 404,
      message: "Deck not found",
    });
  return;
}

async function checkForEnoughPassingCards(cards: []) {
  const filteredCards = cards.filter((card: Card) => {
    const keysPresentOnCard = Object.keys(card);
    const keysRequiredOnCard = ["Y", "N", "Q", "A", "tag"];
    return keysRequiredOnCard.every((key) => keysPresentOnCard.includes(key));
  });

  if (!filteredCards.length) {
    return Promise.reject({ status: 400, message: "malformed request body" });
  }
  if (cards.length - filteredCards.length > 2) {
    return Promise.reject({ status: 400, message: "not enough passing cards" });
  }
  return filteredCards;
}

export async function patchCards(deck_id: string, cards: []) {
  const db = getDb();

  if (!isValidObjectId(deck_id)) {
    return Promise.reject({ status: 400, message: "bad deck_id" });
  }
  if (
    !cards ||
    !cards.length ||
    !Array.isArray(cards) ||
    !cards.every((card: Card) => {
      return (
        card.hasOwnProperty("Y") &&
        card.hasOwnProperty("N") &&
        card.hasOwnProperty("Q") &&
        card.hasOwnProperty("A") &&
        card.hasOwnProperty("tag")
      );
    })
  ) {
    return Promise.reject({
      status: 400,
      message: "bad or empty request body",
    });
  }

  const objectId = new ObjectId(deck_id);
  const originalDeck = await db.collection("decks").findOne({ _id: objectId });
  if (!originalDeck)
    return Promise.reject({ status: 404, message: "deck not found" });
  originalDeck.cards = cards;
  await db
    .collection("decks")
    .updateOne({ _id: objectId }, { $set: originalDeck });

  return;
}
