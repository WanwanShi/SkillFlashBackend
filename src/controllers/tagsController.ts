import { Request, Response, NextFunction } from "express";
import { fetchAllTags } from "../models/tagsModel";

export function getAllTags(req: Request, res: Response, next: NextFunction) {
	fetchAllTags(req.query)
		.then((tags) => {
			res.status(200).send({ tags });
		})
		.catch((error) => {
			next(error);
		});
}
