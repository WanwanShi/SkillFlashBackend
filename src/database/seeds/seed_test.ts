import { Collection } from "mongodb";
import { seedHasher } from "../data/test_data/users";
import { connectDB, client, databaseString } from "../connection";
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

const database = client.db(databaseString);
export const userCollection: Collection<User> = database.collection("users");

export const tagsCollection: Collection<Tag> = database.collection("tags");

const seedDB = async (): Promise<void> => {
	const hashedSeed: User[] = await seedHasher();
	const tags_test: Tag[] = tags;

	try {
		await connectDB();
		console.log("Connected to MongoDB for seeding");
		await userCollection.deleteMany({});
		await tagsCollection.deleteMany({});
		const users = await userCollection.insertMany(hashedSeed);
		const tagsSeed = await tagsCollection.insertMany(tags_test);

		// Insert seed data
		console.log(
			`Inserted ${users.insertedCount} documents, Inserted ${tagsSeed.insertedCount} documents`
		);
	} catch (error) {
		console.error("Error seeding data:", error.message);
	} finally {
		await client.close();
		console.log("Closed MongoDB connection");
	}
};

seedDB();
