import { client, connectDB, databaseString } from "../database/connection";

export function fetchAllTags() {
	return connectDB().then(() => {
		return client.db(databaseString).collection("tags").find({}).toArray();
	});
}
