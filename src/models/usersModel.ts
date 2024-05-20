import { getDb } from "../database/connection";
import bcrypt from "bcryptjs";
import { ObjectId } from "mongodb";

interface ReturnedUser {
	_id?: ObjectId;
	username: string;
	email: string;
}
interface User {
	_id?: ObjectId;
	username: string;
	email: string;
	password: string;
}

const toReturnedUser = (user: User): ReturnedUser => {
	const { _id, username, email } = user;
	return { _id, username, email };
};

const getUserById = async (id: string): Promise<ReturnedUser | null> => {
	const db = getDb();
	const user = await db
		.collection<User>("users")
		.findOne({ _id: new ObjectId(id) });
	if (!user) return null;
	return toReturnedUser(user);
};

const createUser = async (user: User): Promise<ReturnedUser> => {
	const { username, email, password } = user;
	const passRegex =
		/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[@$!%*?&]).{8,}$/;
	const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	if (!username || !email || !password) {
		return Promise.reject({ status: 400, message: "failed to signup" });
	}
	if (
		username.length <= 3 ||
		!emailRegex.test(email) ||
		!passRegex.test(password)
	) {
		return Promise.reject({ status: 400, message: "failed to signup" });
	}
	const db = getDb();
	const hashedPw = await bcrypt.hash(user.password, 10);
	user.password = hashedPw;
	const result = await db.collection<User>("users").insertOne(user);
	const newUser = await getUserById(result.insertedId.toHexString());
	if (!newUser) {
		return Promise.reject({ status: 400, message: "failed to signup" });
	}
	return newUser;
};

const fetchUserByUsername = async (username: string) => {
	const db = getDb();
	const user = await db.collection<User>("users").findOne({ username });
	if (!user) return false;
	return toReturnedUser(user);
};
export { getUserById, createUser, User, ReturnedUser, fetchUserByUsername };
