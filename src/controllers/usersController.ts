import { Request, Response, NextFunction } from "express";
import { createUser, authUser, checkExistenceUser } from "../models/usersModel";

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
		console.log(username);
		const exist = await checkExistenceUser(username);
		res.status(200).send({ exist });
	} catch (err) {
		next(err);
	}
}
export async function login(
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> {
	try {
		const loginUser = req.body;
		const returnedUser = await authUser(loginUser);
		res.status(200).send({ user: returnedUser });
	} catch (err) {
		next(err);
	}
}
