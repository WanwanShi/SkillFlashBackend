import request from "supertest";
import { app } from "../app";
import { connectDB, disconnectDB } from "../database/connection";
import { seedDB } from "../database/seeds/seed_test";
import endpoints from "../endpoints.json";
import { Deck } from "../utils/AIDataFormatter";
import { deck6 } from "../database/data/test_data/decks_data/06deck";
import { deck7 } from "../database/data/test_data/decks_data/07deck";
import { deck11 } from "../database/data/test_data/decks_data/11deck3BadCards";

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

	test("GET:200 responds with an array of tags object filter by tagCategory query", () => {
		return request(app)
			.get("/api/tags?tagCategory=technical-skills")
			.expect(200)
			.then(({ body: { tags } }) => {
				expect(tags).toHaveLength(10);
				tags.forEach((tag: object) => {
					expect(tag).toMatchObject({
						tagName: expect.any(String),
						tagCategory: "technical-skills",
					});
				});
			});
	});

	test("GET:400 responds with error message shows invalid query", () => {
		return request(app)
			.get("/api/tags?non_exist_Category=technical-skills")
			.expect(400)
			.then(({ body: { message } }) => {
				expect(message).toBe("Invalid query");
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
	test("POST:200 responds with existing user object", () => {
		const loginUser = {
			username: "Brooke_Bradtke",
			password: "zUz_0n7y!123YXtr8pL",
		};
		return request(app)
			.post("/api/users/login")
			.send(loginUser)
			.expect(200)
			.then(({ body: { user } }) => {
				expect(user).toMatchObject({
					_id: expect.any(String),
					username: "Brooke_Bradtke",
					email: "Gregory.Muller@yahoo.com",
				});
			});
	});

	test("POST:404 responds with an error message when provided non-existent username", () => {
		const loginUser = {
			username: "does_not_exist",
			password: "zUz_0n7yYXtr8pL",
		};
		return request(app)
			.post("/api/users/login")
			.send(loginUser)
			.expect(404)
			.then(({ body: { message } }) => {
				expect(message).toBe("username does not exist");
			});
	});

	test("POST:400 responds with an error message whe provided incorrect password", () => {
		const loginUser = {
			username: "Brooke_Bradtke",
			password: "zUz_0n7yYXtr8pLabd",
		};
		return request(app)
			.post("/api/users/login")
			.send(loginUser)
			.expect(400)
			.then(({ body: { message } }) => {
				expect(message).toBe("username and password does not match");
			});
	});
});

describe("/api/users/:username", () => {
	test("GET 200: responds with true of the existed username", () => {
		return request(app)
			.get("/api/users/Brooke_Bradtke")
			.expect(200)
			.then(({ body: { exist } }) => {
				expect(exist).toBe(true);
			});
	});
	test("GET 200: responds with false of the username does not exist", () => {
		return request(app)
			.get("/api/users/notexistusername")
			.expect(200)
			.then(({ body: { exist } }) => {
				expect(exist).toBe(false);
			});
	});
});

describe("GET /api/decks/:username", () => {
	test("GET:200 responds with array of deck objects based on username", () => {
		return request(app).get("/api/decks/kooooo").expect(200)
			.then(({ body: { decks } }) => {
				expect(decks).toHaveLength(6);
				decks.forEach((deck: Deck) => {
					expect(deck).toMatchObject({
						_id: expect.any(String),
						deckName: expect.any(String),
						username: "kooooo",
						tags: expect.any(Array),
						chatHistory: expect.any(Array),
						cards: expect.any(Array),
					})
				})
			})
	});

	test("GET:200 responds with empty array when provided user has no decks", () => {
		return request(app).get("/api/decks/Brooke_Bradtke").expect(200)
			.then(({ body: { decks } }) => {
				expect(Array.isArray(decks)).toBe(true);
				expect(decks).toHaveLength(0);
			})
	});

	test("GET:404 responds with an error message when provided non-existent username", () => {
		return request(app)
			.get("/api/decks/someUser")
			.expect(404)
			.then(({ body: { message } }) => {
				expect(message).toBe("username does not exist");
			});
	})

	test("GET:400 responds with an error message when provided empty  username", () => {
		return request(app)
			.get("/api/decks/''")
			.expect(400)
			.then(({ body: { message } }) => {
				expect(message).toBe("no username provided");
			});
	})

});

describe("POST /api/decks/:username", () => {
	test("POST:201 responds with posted deck object in decks collection", () => {
		return request(app)
			.post('/api/decks/kooooo')
			.send({
				deckName: 'deck7',
				cards: deck7
			})
			.expect(201)
			.then(({ body: { deck } }) => {
				expect(deck).toMatchObject({
					_id: expect.any(String),
					deckName: 'deck7',
					username: "kooooo",
					tags: expect.any(Array),
					chatHistory: expect.any(Array),
					cards: expect.any(Array),
				})
			})
	});

	test("POST:400 responds with bad body error if req body is malformed (deckName)", () => {
		return request(app)
			.post('/api/decks/kooooo')
			.send({
				deckNome: 'deck6',
				cards: deck6
			})
			.expect(400)
			.then(({ body: { message } }) => {
				expect(message).toBe('malformed request body');
			})
	})

	test("POST:400 responds with bad body error if req body is malformed (cards)", () => {
		return request(app)
			.post('/api/decks/kooooo')
			.send({
				deckName: 'deck6',
				cds: deck6
			})
			.expect(400)
			.then(({ body: { message } }) => {
				expect(message).toBe('malformed request body');
			})
	})
	test("POST:400 responds with bad body error if DECK is malformed (cards>deck)", () => {
		return request(app)
			.post('/api/decks/kooooo')
			.send({
				deckName: 'deck6',
				cards: [{ name: 'cats' }]
			})
			.expect(400)
			.then(({ body: { message } }) => {
				expect(message).toBe('malformed request body');
			})
	})

	test('POST: 400 responds with not enough passing cards if >2 cards in generated deck does not meet requirements', () => {
		return request(app)
			.post('/api/decks/kooooo')
			.send({
				deckName: 'deck10',
				cards: deck11
			})
			.expect(400)
			.then(({ body: { message } }) => {
				expect(message).toBe('not enough passing cards');
			})

	})
});

describe("PATCH /api/decks/:deck_id", () => {
	test('PATCH 204 /api/decks/<valid deck_id> - returns 204 - no content', () => {
		return request(app)
			.patch('/api/decks/664e21109425c7ba3ae7fa85')
			.send({
				deckName: 'deck2',
				tags: ["Angular"
					,
					"javascript"
					,
					"nodejs"
					,
					"supabase"
					,
					"vue"],
				chatHistory: ["content"],
				cards: [],
			})
			.expect(204)
			.then(({ text }) => {
				expect(text.length).toBe(0);
				//^ sends back empty string because 204 means no content

			})
	})
	test('PATCH 404 /api/decks/ - returns 404 when deck with that id is not found', () => {
		return request(app)
			.patch('/api/decks/664e24d92a39772d1e86e942')
			.send({
				deckName: 'deck2',
				tags: ["Angular"
					,
					"javascript"
					,
					"nodejs"
					,
					"supabase"
					,
					"vue"],
				chatHistory: ["content"],
				cards: [],
			})
			.expect(404)
			.then(({ body: { message } }) => {
				expect(message).toBe('deck not found');
			})
	})

	test('PATCH 400 /api/decks/ - returns 400 when deck_id is invalid', () => {
		return request(app)
			.patch('/api/decks/123456')
			.send({
				deckName: 'deck2',
				tags: ["Angular"
					,
					"javascript"
					,
					"nodejs"
					,
					"supabase"
					,
					"vue"],
				chatHistory: ["content"],
				cards: [],
			})
			.expect(400)
			.then(({ body: { message } }) => {
				expect(message).toBe('bad deck_id');
			})
	})
	test('PATCH 400 /api/decks/ - returns 400 when request body is malformed', () => {
		return request(app)
			.patch('/api/decks/664e21109425c7ba3ae7fa85')
			.send({
				deckName: 'deck2',
				tags: {
					tag: ["Angular"
						,
						"javascript"
						,
						"nodejs"
						,
						"supabase"
						,
						"vue"]
				},
				chatHistory: ["content"],
				cards: [],
			})
			.expect(400)
			.then(({ body: { message } }) => {
				expect(message).toBe('bad or empty request body');
			})
	})
	test('PATCH 400 /api/decks/ - returns 400 when request body is missing', () => {
		return request(app)
			.patch('/api/decks/664e21109425c7ba3ae7fa85')
			.send()
			.expect(400)
			.then(({ body: { message } }) => {
				expect(message).toBe('bad or empty request body');
			})
	})

})
