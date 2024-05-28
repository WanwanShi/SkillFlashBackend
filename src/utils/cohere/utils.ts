import { getCohereCards } from "./cohere-connection";

export function stringToObject(string: string) {
	const lines = string.split("\n");

	const cards: Array<{}> = [];
	const qRegex = /^Q:\s(.*)/;
	const aRegex = /^A:\s(.*)/;
	const tagRegex = /^tag:\s(.*)/;

	for (let i = 0; i < lines.length - 1; i++) {
		const questionMatch = lines[i].match(qRegex);
		let answerMatch;
		let tagMatch;
		if (questionMatch) {
			answerMatch = lines[i + 1].match(aRegex);
			tagMatch = lines[i + 2].match(tagRegex);
		}
		if (questionMatch && answerMatch && tagMatch) {
			const question = questionMatch[1];
			const answer = answerMatch[1];
			const tag = tagMatch[1];
			cards.push({ Q: question, A: answer, tag: tag });
		}
	}

	return addKeys(cards);
}

export interface Card {
	Y?: number;
	N?: number;
	card_id?: string;
	Q?: string;
	A?: string;
	tag?: string;
}

export function addKeys(cards: Array<Card>) {
	const cardsWithKeys = [...cards];

	for (const card of cardsWithKeys) {
		card["Y"] = 0;
		card["N"] = 0;
	}
	return cardsWithKeys;
}

export async function cohereRequestCards(tags: []) {
	const firstMessage = `Give me 20 flashcards about the following topics ${tags}`;

	const result = await getCohereCards(firstMessage, []);
	return result;
}
export async function cohereAddCards(tags: [], chatHistory: []) {
	const secondMessage = `Give me 10 NEW flashcards about the following topics: ${tags} `;
	const result = await getCohereCards(secondMessage, chatHistory);
	return result;
}
