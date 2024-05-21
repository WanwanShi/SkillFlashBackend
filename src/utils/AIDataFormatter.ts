import { newDecks } from '../database/data/test_data/decks_data/'

export interface Card {
    "Q": string;
    "A": string;
    "tag": string;
    "Y": number;
    "N": number;
    "card_id"?: number;
}

export interface Deck {
    "deckName": string;
    "userId": string;
    "tags": string[];
    "chatHistory": object[];
    "cards": Card[];
  }

const cardFormat = (cardArr:Card[])=>{
    const cards = cardArr.map((card, index)=>{
        return {card_id: index+1, ...card }
    })
    return cards
}

const summariseTags = (deck:Card[])=>{
    return [...new Set(deck.map(card=>card.tag))].sort()
}

export const deckFormat = (deckName:string, deck:Card[], userId:string)=>{
    const newDeck:Deck = {
        userId: userId,
        deckName: deckName, 
        tags: summariseTags(deck),
        cards: cardFormat(deck),
        chatHistory: []
    }
    return newDeck
}
