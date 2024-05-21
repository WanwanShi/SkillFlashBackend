import { getDb } from "../database/connection";

interface Query {
	tagCategory?: string;
}
export function fetchAllTags(query: Query) {
	const queryKey = Object.keys(query);
	const db = getDb();
	if (queryKey.length > 0) {
		if (queryKey.includes("tagCategory")) {
			const tagCategory = query.tagCategory;
			return db.collection("tags").find({ tagCategory: tagCategory }).toArray();
		} else {
			return Promise.reject({ status: 400, message: "Invalid query" });
		}
	} else {
		return db.collection("tags").find({}).toArray();
	}
}
