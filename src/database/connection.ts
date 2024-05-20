import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({
	path: path.resolve(__dirname, "../../.env"),
});

const uri = process.env.URI as string;

const client: MongoClient = new MongoClient(uri);
const ENV = process.env.NODE_ENV || "development";
let databaseString: string;
if (ENV === "development") {
	databaseString = "skillflash";
} else {
	databaseString = "skillflash_test";
}

const connectDB = async (): Promise<void> => {
	try {
		await client.connect();
		console.log("MongoDB connected successfully");
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

export { connectDB, client, databaseString };
