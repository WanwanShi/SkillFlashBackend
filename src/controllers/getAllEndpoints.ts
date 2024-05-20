import endpoint from "../endpoints.json";
import { Request, Response, NextFunction } from "express";

export default function getAllEndpoints(
	_req: Request,
	res: Response,
	_next: NextFunction
) {
	res.status(200).send(endpoint);
}
