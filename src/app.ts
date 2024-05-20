import express from "express";
import cors from "cors";
import { apiRouter } from "./routes/apiRouter";
import {
	customErrorHandler,
	mongoErrorHandler,
	serverErrorHandler,
} from "./errors";
import { connectDB } from "./database/connection";
export const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB().catch(() => {
	process.exit(1);
});
app.use("/api", apiRouter);

app.all(
	"*",
	(
		_req: express.Request,
		res: express.Response,
		_next: express.NextFunction
	) => {
		res.status(404).send({ message: "Path not found" });
	}
);

app.use(mongoErrorHandler);
app.use(customErrorHandler);
app.use(serverErrorHandler);
