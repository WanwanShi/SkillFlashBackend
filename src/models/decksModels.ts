import { getDb } from "../database/connection"
import { checkExistenceUser } from "./usersModel";

export async function fetchDecksByUsername(username:string) {
    const db = getDb();
    if(username.length < 3) return Promise.reject({status: 400, message: "no username provided"});
    if(! await checkExistenceUser(username)) return Promise.reject({status: 404, message: "username does not exist"});
    return db.collection("decks").find({username:username}).toArray();
}