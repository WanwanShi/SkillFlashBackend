import { getDb } from "../database/connection";
import bcrypt from "bcryptjs";
import { User } from "../database/seeds/seed_test";
import { ObjectId } from "mongodb";

interface ReturnedUser {
	_id?: ObjectId;
	username: string;
	email: string;
}

interface LoginUser {
	username: string;
	password: string;
}

const toReturnedUser = (user: User): ReturnedUser => {
	const { _id, username, email } = user;
	return { _id, username, email };
};

// const getUserById = async (id: string): Promise<ReturnedUser | null> => {
// 	const db = getDb();
// 	const user = await db.collection("users").findOne({ _id: new ObjectId(id) });
// 	console.log(user);
// 	if (!user) return null;

// 	return toReturnedUser(user);
// };

const createUser = async (user: User): Promise<ReturnedUser> => {
	const { username, email, password } = user;
	const passRegex =
		/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[@$!%*?&]).{8,}$/;
	const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	if (!username || !email || !password) {
		return Promise.reject({ status: 400, message: "failed to signup" });
	}

	if (
		username.length < 3 ||
		!emailRegex.test(email) ||
		!passRegex.test(password)
	) {
		return Promise.reject({ status: 400, message: "failed to signup" });
	}
	const exist = await checkExistenceUser(username);
	if (exist) {
		return Promise.reject({ status: 400, message: "username already exist" });
	}
	const db = getDb();
	const hashedPw = await bcrypt.hash(user.password, 10);
	user.password = hashedPw;
	const result = await db.collection<User>("users").insertOne(user);

	

	if (result) {
		const signupUser: ReturnedUser | false = await fetchUserByUsername(
			username
		);
		if (signupUser) {
			return signupUser;
		}
	}
	return Promise.reject({ status: 400, message: "failed to signup" });
};

const fetchUserByUsername = async (username: string) => {
	const db = getDb();
	const user = await db.collection<User>("users").findOne({ username });
	if (!user) return false;
	return toReturnedUser(user);
};

const authUser = async (loginUser: LoginUser) => {
	const { username, password } = loginUser;
	const db = getDb();
	const user = await db
		.collection<User>("users")
		.findOne({ username: username });
	if (!user) {
		return Promise.reject({ status: 404, message: "username does not exist" });
	}
	const isMatch = await bcrypt.compare(password, user.password);
	if (!isMatch) {
		return Promise.reject({
			status: 400,
			message: "username and password does not match",
		});
	}
	return toReturnedUser(user);
};
const checkExistenceUser = async (username: string) => {
	const db = getDb();
	const user = await db.collection<User>("users").findOne({ username });
	if (user) return true;
	return false;
};
export {
	createUser,
	ReturnedUser,
	fetchUserByUsername,
	authUser,
	checkExistenceUser,
};
