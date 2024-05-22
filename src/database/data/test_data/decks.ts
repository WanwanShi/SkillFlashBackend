import { deckFormat } from "../../../utils/AIDataFormatter";
import { newDecks } from "../../../database/data/test_data/decks_data/";
import { Deck } from "../../../utils/AIDataFormatter";

export const seedDeck: Deck[] = [
    deckFormat("deck1", newDecks[0], '64cae20ba9052982be42f97'),
    deckFormat("deck2", newDecks[1], '64cae20ba9052982be42f97'),
    deckFormat("deck3", newDecks[2], '64cae20ba9052982be42f97'),
    deckFormat("deck4", newDecks[3], '64cae20ba9052982be42f97'),
    deckFormat("deck5", newDecks[4], '64cae20ba9052982be42f97'),
]