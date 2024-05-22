import { Collection, ObjectId } from "mongodb";
import { seedHasher } from "../data/test_data/users";
import { connectDB, getDb } from "../connection";
import tags from "../data/test_data/tags";
import { patch_Deck, seedDecks } from "../data/test_data/decks";
import { Deck } from "../../utils/AIDataFormatter";

export interface User {
	_id?: ObjectId;
	username: string;
	email: string;
	password: string;
}
export interface Tag {
	tagName: string;
	tagCategory: string;
}

export const seedDB = async (): Promise<void> => {
	await connectDB();
	const db = getDb();
	const userCollection: Collection<User> = db.collection("users");
	const tagsCollection: Collection<Tag> = db.collection("tags");
	const decksCollection: Collection<Deck> = db.collection("decks");
	const hashedSeed: User[] = await seedHasher();
	const tags_test: Tag[] = tags;
	const decks_test: Deck[] = seedDecks;
	patch_Deck._id = new ObjectId('664e21109425c7ba3ae7fa85');
	const deck_test: Deck = patch_Deck;

	console.log('patch_Deck -->', deck_test)


	try {
		await userCollection.deleteMany({});
		await tagsCollection.deleteMany({});
		await decksCollection.deleteMany({});
		await userCollection.insertMany(hashedSeed);
		await tagsCollection.insertMany(tags_test);
		await decksCollection.insertMany(decks_test);
		await decksCollection.insertOne(deck_test)

	} catch (error) {
		console.error("Error seeding data:", error.message);
	} finally {
	}
};
