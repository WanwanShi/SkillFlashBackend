import express from "express";
import getAllEndpoints from "../controllers/getAllEndpoints";
import { tagsRouter } from "./tagsRouter";

export const apiRouter = express.Router();

apiRouter.get("/", getAllEndpoints);
apiRouter.use("/tags", tagsRouter);
