import express from "express";
import getAllEndpoints from "../controllers/getAllEndpoints";
import { tagsRouter } from "./tagsRouter";
import { usersRouter } from "./usersRouter";

export const apiRouter = express.Router();

apiRouter.get("/", getAllEndpoints);
apiRouter.use("/tags", tagsRouter);
apiRouter.use("/users", usersRouter);
