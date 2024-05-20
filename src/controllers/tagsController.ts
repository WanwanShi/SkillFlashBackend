import { Request, Response, NextFunction } from "express";
import { fetchAllTags } from "../models/fetchAllTags";

export function getAllTags(_req: Request, res: Response, _next: NextFunction) {
	fetchAllTags().then((tags) => {
		res.status(200).send({ tags });
	});
}
