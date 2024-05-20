import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({
	path: path.resolve(__dirname, "../../.env"),
});

const uri = process.env.URI as string;

const client: MongoClient = new MongoClient(uri);

const connectDB = async (): Promise<void> => {
	try {
		await client.connect();
		console.log("MongoDB connected successfully");
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

export { connectDB, client };
