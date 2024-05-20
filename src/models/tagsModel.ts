import { getDb } from "../database/connection";

export function fetchAllTags() {
	const db = getDb();
	return db.collection("tags").find({}).toArray();
}
