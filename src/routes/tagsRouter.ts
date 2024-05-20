import express from "express";
import { getAllTags } from "../controllers/tagsController";
export const tagsRouter = express.Router();

tagsRouter.route("/").get(getAllTags);
