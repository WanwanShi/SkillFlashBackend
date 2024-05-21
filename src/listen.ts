import { app } from "./app";
const { PORT = 9090 } = process.env;
import { connectDB } from "./database/connection";

connectDB()
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	})
	.catch((error) => {
		console.error("Failed to connect to the database", error);
		process.exit(1);
	});
