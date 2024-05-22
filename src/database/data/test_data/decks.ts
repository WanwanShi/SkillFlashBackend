import { deckFormat } from "../../../utils/AIDataFormatter";
import { newDecks } from "../../../database/data/test_data/decks_data/";
import { Deck } from "../../../utils/AIDataFormatter";

export const seedDeck: Deck[] = [
    deckFormat("deck1", newDecks[0], 'kooooo'),
    deckFormat("deck2", newDecks[1], 'kooooo'),
    deckFormat("deck3", newDecks[2], 'kooooo'),
    deckFormat("deck4", newDecks[3], 'kooooo'),
    deckFormat("deck5", newDecks[4], 'kooooo'),
]