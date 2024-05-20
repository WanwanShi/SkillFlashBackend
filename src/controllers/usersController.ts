import { Request, Response, NextFunction } from "express";
import { createUser, fetchUserByUsername } from "../models/usersModel";

export async function signup(
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> {
	try {
		const user = req.body;
		const newUser = await createUser(user);
		res.status(201).send({ user: newUser });
	} catch (err) {
		next(err);
	}
}

export async function getUserByUsername(
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> {
	try {
		const { username } = req.params;
		const userExists = await fetchUserByUsername(username);
		res.status(201).send({ userExists });
	} catch (err) {
		next(err);
	}
}
// export async function login(
// 	req: Request,
// 	res: Response,
// 	next: NextFunction
// ): Promise<void> {
// 	try {
// 		const user = req.body;
// 		const newUser = await fetchUser(user);
// 		res.status(201).send({ user: newUser });
// 	} catch (err) {
// 		next(err);
// 	}
// }
