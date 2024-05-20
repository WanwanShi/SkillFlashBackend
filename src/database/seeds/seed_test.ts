import { Collection } from "mongodb";
import { seedHasher } from "../data/test_data/users";
import { connectDB, getDb } from "../connection";
import tags from "../data/test_data/tags";

export interface User {
	username: string;
	email: string;
	password: string;
}
export interface Tag {
	tagName: string;
	tagCategory: string;
}

export const seedDB = async (): Promise<void> => {
	const db = getDb();
	const userCollection: Collection<User> = db.collection("users");
	const tagsCollection: Collection<Tag> = db.collection("tags");
	const hashedSeed: User[] = await seedHasher();
	const tags_test: Tag[] = tags;

	try {
		await connectDB();
		await userCollection.deleteMany({});
		await tagsCollection.deleteMany({});
		await userCollection.insertMany(hashedSeed);
		await tagsCollection.insertMany(tags_test);
	} catch (error) {
		console.error("Error seeding data:", error.message);
	} finally {
	}
};
