import { app } from "./app";
const { PORT = 9090 } = process.env;
import { connectDB } from "./database/connection";

connectDB()
app.listen(PORT, () => {
	console.log("Listening on 9090");
});
