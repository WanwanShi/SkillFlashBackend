import express from "express";
import getAllEndpoints from "../controllers/getAllEndpoints";
import { tagsRouter } from "./tagsRouter";
import { usersRouter } from "./usersRouter";
import { decksRouter } from "./decksRouter";

export const apiRouter = express.Router();

apiRouter.get("/", getAllEndpoints);
apiRouter.use("/tags", tagsRouter);
apiRouter.use("/users", usersRouter);
apiRouter.use("/decks", decksRouter);
