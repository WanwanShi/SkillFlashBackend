import { MongoClient, Db } from "mongodb";
import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({
	path: path.resolve(__dirname, "../../.env"),
});

const uri = process.env.URI as string;

let client: MongoClient | null = null;
let database: Db | null = null;

const connectDB = async (): Promise<Db> => {
	if (!client) {
		client = new MongoClient(uri);
		await client.connect();
		console.log("MongoDB connected successfully");
	}
	if (!database) {
		const ENV = process.env.NODE_ENV || "development";
		const databaseString =
			ENV === "development" ? "skillflash" : "skillflash_test";
		database = client.db(databaseString);
	}
	return database;
};

const disconnectDB = async (): Promise<void> => {
	if (client) {
		await client.close();
		client = null;
		database = null;
		console.log("MongoDB disconnected successfully");
	}
};
const getDb = (): Db => {
	connectDB();
	if (!database) {
		throw new Error("Database not connected. Call connectDB() first.");
	}
	return database;
};

export { connectDB, getDb, disconnectDB };

// const client: MongoClient = new MongoClient(uri);
// const ENV = process.env.NODE_ENV || "development";
// let databaseString: string;
// if (ENV === "development") {
// 	databaseString = "skillflash";
// } else {
// 	databaseString = "skillflash_test";
// }

// const connectDB = async (): Promise<void> => {
// 	try {
// 		await client.connect();
// 		console.log("MongoDB connected successfully");
// 	} catch (error) {
// 		console.log(error);
// 		process.exit(1);
// 	}
// };

// export { connectDB, client, databaseString };
