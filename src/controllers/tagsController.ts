import { Request, Response, NextFunction } from "express";
import { fetchAllTags } from "../models/tagsModel";

export async function getAllTags(req: Request, res: Response, next: NextFunction) {
	try {
		const tags = await fetchAllTags(req.query);
		res.status(200).send({ tags });
	} catch (err) {
		next(err);
	}
}