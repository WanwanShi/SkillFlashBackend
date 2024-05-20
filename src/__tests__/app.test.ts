import request from "supertest";
import { app } from "../app";
import { connectDB, disconnectDB } from "../database/connection";
import { seedDB } from "../database/seeds/seed_test";
import endpoints from "../endpoints.json";

beforeEach(async () => {
	await connectDB();
	await seedDB();
});
afterAll(async () => {
	await disconnectDB();
});
describe("/not-a-route", () => {
	test("GET:404 responds with an error message when given an invalid route", () => {
		return request(app)
			.get("/not-a-route")
			.expect(404)
			.then(({ body: { message } }) => {
				expect(message).toBe("Path not found");
			});
	});
});

describe("/api", () => {
	test("GET:200 responds with an object describing all the available endpoints", () => {
		return request(app)
			.get("/api")
			.expect(200)
			.then(({ body }) => {
				expect(typeof body).toBe("object");
				expect(body).toEqual(endpoints);
			});
	});
});

describe("/api/tags", () => {
	test("GET:200 responds with an array of tags object containing two properties: tagName tagCategory", () => {
		return request(app)
			.get("/api/tags")
			.expect(200)
			.then(({ body: { tags } }) => {
				expect(tags).toHaveLength(50);
				tags.forEach((tag: object) => {
					expect(tag).toMatchObject({
						tagName: expect.any(String),
						tagCategory: expect.any(String),
					});
				});
			});
	});
});

describe("/api/users/signup", () => {
	test("POST:201 responds with newly created user object", () => {
		const newUser = {
			username: "test1",
			email: "test1@gmail.com",
			password: "password!12C_",
		};
		return request(app)
			.post("/api/users/signup")
			.send(newUser)
			.expect(201)
			.then(({ body: { user } }) => {
				expect(typeof user).toBe("object");
				expect(user).toEqual(
					expect.objectContaining({
						_id: expect.any(String),
						username: "test1",
						email: "test1@gmail.com",
					})
				);
			});
	});

	test("POST:400 responds with an error message when provided incomplete object", () => {
		const newUser = {
			username: "test1",
			password: "password",
		};
		return request(app)
			.post("/api/users/signup")
			.send(newUser)
			.expect(400)
			.then(({ body: { message } }) => {
				expect(message).toBe("failed to signup");
			});
	});

	test("POST:400 responds with an error message when provided invalid object property", () => {
		const newUser = {
			username: "te",
			email: "",
			password: "password",
		};
		return request(app)
			.post("/api/users/signup")
			.send(newUser)
			.expect(400)
			.then(({ body: { message } }) => {
				expect(message).toBe("failed to signup");
			});
	});
});

describe("/api/users/login", () => {
	test("POST:200 responds with exist user", () => {});

	test("POST:404 responds with an error message when provided non-existent username", () => {});

	test("POST:404 responds with an error message whe provided incorrect password", () => {});
});

describe("/api/users/:username", () => {
	test("GET", () => {});
});

describe("", () => {
	test("", () => {});
});

describe("", () => {
	test("", () => {});
});
