import { Collection, ObjectId } from "mongodb";
import { seedHasher } from "../data/test_data/users";
import { connectDB, getDb } from "../connection";
import tags from "../data/test_data/tags";

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
	const hashedSeed: User[] = await seedHasher();
	const tags_test: Tag[] = tags;

	try {
		await userCollection.deleteMany({});
		await tagsCollection.deleteMany({});
		await userCollection.insertMany(hashedSeed);
		await tagsCollection.insertMany(tags_test);
	} catch (error) {
		console.error("Error seeding data:", error.message);
	} finally {
	}
};
