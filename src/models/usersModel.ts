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

interface PatchUer {
	username?: string;
	email?: string;
	password?: string;
}
const passRegex =
	/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[@$!%*?&]).{8,}$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const toReturnedUser = (user: User): ReturnedUser => {
	const { _id, username, email } = user;
	return { _id, username, email };
};

const createUser = async (user: User): Promise<ReturnedUser> => {
	const { username, email, password } = user;

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

const deleteUserByUsername = async (username: string) => {
	if (username.length < 3) {
		return Promise.reject({
			status: 400,
			message: "invalid username",
		});
	}

	const db = getDb();

	const userResult = await db.collection<User>("users").deleteOne({ username });
	if (userResult.deletedCount === 0)
		return Promise.reject({
			status: 404,
			message: "User not found",
		});
	await db.collection("decks").deleteMany({ username: username });

	return;
};

const updateUserByUsername = async (
	username: string,
	updatedUser: Partial<User>
) => {
	const existingUser = await checkExistenceUser(username);
	if (!existingUser) {
		return Promise.reject({
			status: 404,
			message: "User not found",
		});
	}

	if (
		(updatedUser.username && updatedUser.username.length < 3) ||
		(updatedUser.email && !emailRegex.test(updatedUser.email)) ||
		(updatedUser.password && !passRegex.test(updatedUser.password))
	) {
		return Promise.reject({
			status: 400,
			message: "Invalid request body",
		});
	}
	if (updatedUser.password) {
		const hashedPw = await bcrypt.hash(updatedUser.password, 10);
		updatedUser.password = hashedPw;
	}
	const db = getDb();
	const user = await db.collection<User>("users").findOne({ username });
	if (!user) {
		return Promise.reject({
			status: 404,
			message: "User not found",
		});
	}
	const newUser: PatchUer = {};
	if (updatedUser.password) {
		newUser.password = updatedUser.password;
	}
	if (updatedUser.email) {
		newUser.email = updatedUser.email;
	}
	if (updatedUser.username) {
		newUser.username = updatedUser.username;
	}

	const updatedUserResult = await db
		.collection<User>("users")
		.updateOne({ _id: user._id }, { $set: newUser });
	if (updatedUserResult.modifiedCount === 0) {
		return Promise.reject({
			status: 400,
			message: "User not updated",
		});
	}
	const updatedUserObject = await db.collection<User>("users").findOne({
		_id: user._id,
	});

	if (updatedUserObject != null) {
		return toReturnedUser(updatedUserObject);
	} else {
		return Promise.reject({
			status: 404,
			message: "The user was not successfully updated",
		});
	}
};
export {
	createUser,
	fetchUserByUsername,
	authUser,
	checkExistenceUser,
	deleteUserByUsername,
	updateUserByUsername,
};
