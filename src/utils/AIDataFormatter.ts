import { ObjectId } from "mongodb";
import { ChatHistory } from "./cohere/cohere-connection";
export interface Card {
  Q: string;
  A: string;
  tag: string;
  Y: number;
  N: number;
  card_id?: number;
}

export interface Deck {
  _id?: ObjectId;
  deckName: string;
  username: string;
  tags: string[];
  chatHistory: ChatHistory[];
  cards: Card[];
}

const cardFormat = (cardArr: Card[]) => {
  const cards = cardArr.map((card, index) => {
    return { card_id: index + 1, ...card };
  });
  return cards;
};

const summariseTags = (deck: Card[]) => {
  return [...new Set(deck.map((card) => card.tag))].sort();
};

export const deckFormat = (
  deckName: string,
  deck: Card[],
  username: string,
  chatHistory: ChatHistory[]
) => {
  const newDeck: Deck = {
    username: username,
    deckName: deckName,
    tags: summariseTags(deck),
    cards: cardFormat(deck),
    chatHistory: chatHistory,
  };
  return newDeck;
};
