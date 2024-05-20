import express from "express";
import cors from "cors";
import { apiRouter } from "./routes/apiRouter";
export const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRouter);
