import request from "supertest";
import { app } from "../app";
import { connectDB, disconnectDB } from "../database/connection";
import { seedDB } from "../database/seeds/seed_test";
import endpoints from "../endpoints.json";
import { Deck } from "../utils/AIDataFormatter";
import { deck12 } from "../database/data/test_data/decks_data";

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

describe("GET /api", () => {
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


describe("GET /api/tags", () => {
  test("GET:200 responds with an array of tags object containing two properties: tagName tagCategory", () => {
    return request(app)
      .get("/api/tags")
      .expect(200)
      .then(({ body: { tags } }) => {
        expect(tags).toHaveLength(235);
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
        expect(tags).toHaveLength(90);
        tags.forEach((tag: object) => {
          expect(tag).toMatchObject({
            tagName: expect.any(String),
            tagCategory: "technical-skills",
          });
        });
      });
  });

  test("GET:400 responds with error message for an invalid query", () => {
    return request(app)
      .get("/api/tags?non_exist_Category=technical-skills")
      .expect(400)
      .then(({ body: { message } }) => {
        expect(message).toBe("Invalid query");
      });
  });
});

describe("POST /api/users/signup", () => {
  test("POST:201 responds with the newly created user object", () => {
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

  test("POST:400 responds with an error when provided incomplete request body", () => {
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

  test("POST:400 responds with an error when request body has invalid object properties", () => {
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

describe("POST /api/users/login", () => {
  test("POST:200 responds with the existing user object", () => {
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

  test("POST:404 responds with an error when provided with non-existent username", () => {
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

  test("POST:400 responds with an error when provided an incorrect password", () => {
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

describe("GET /api/users/:username", () => {
  test("GET:200 responds true if the passed username exists in the database", () => {
    return request(app)
      .get("/api/users/Brooke_Bradtke")
      .expect(200)
      .then(({ body: { exist } }) => {
        expect(exist).toBe(true);
      });
  });
  test("GET:200 responds false if the username does not exist in the database", () => {
    return request(app)
      .get("/api/users/notexistusername")
      .expect(200)
      .then(({ body: { exist } }) => {
        expect(exist).toBe(false);
      });
  });
  ///error if username incorrect length?
});
describe("DELETE /api/users/:username", () => {
  test("DELETE:204  deletes an existing user and corresponding decks", () => {
    return request(app).delete("/api/users/kooooo").expect(204);
  });
  test("DELETE 404 - responds with an error when passing an username for a user that does not exist in the database", () => {
    return request(app)
      .delete("/api/users/koo2")
      .expect(404)
      .then(({ body }) => {
        const { message } = body;
        expect(message).toBe("User not found");
      });
  });
  test("DELETE:400  responds with an error when passing an invalid username for a user", () => {
    return request(app)
      .delete("/api/decks/ko")
      .expect(400)
      .then(({ body }) => {
        const { message } = body;
        expect(message).toBe("Malformed request body");
      });
  });
});
describe("PATCH /api/users/:username", () => {
  test("PATCH:200  updates an existing user and responds with the updated user object", () => {
    return request(app)
      .patch("/api/users/Dino36")
      .send({
        username: "newUsername",
        email: "hello@gmail.com",
        password: "Password123djdsio@!",
        cards: ["fakedata"],
      })
      .expect(200)
      .then(({ body: { user } }) => {
        expect(user).toMatchObject({
          username: "newUsername",
          email: "hello@gmail.com",
        });
      });
  });
  test("PATCH:200  updates an existing user and respective decks and responds with the updated user object", () => {
    return request(app)
      .patch("/api/users/kooooo")
      .send({
        username: "newUsername",
        email: "kooooo@yahoo.com",
        password: "Password!23",
        cards: ["fakedata"],
      })
      .expect(200)
      .then(({ body: { user } }) => {
        expect(user).toMatchObject({
          username: "newUsername",
          email: "kooooo@yahoo.com",
        });
      });
  });
  test("PATCH 404 - responds with an error when passing an username for a user that does not exist in the database", () => {
    return request(app)
      .patch("/api/users/notexist")
      .send({ username: "newUsername", email: "hello@gmail.com" })
      .expect(404)
      .then(({ body }) => {
        const { message } = body;
        expect(message).toBe("User not found");
      });
  });
  test("PATCH:400  responds with an error when passing an invalid username or email for a user", () => {
    return request(app)
      .patch("/api/users/Dino36")
      .send({ username: "ne", email: "hello@m" })
      .expect(400)
      .then(({ body }) => {
        const { message } = body;
        expect(message).toBe("Invalid request body");
      });
  });
});

describe("GET /api/decks/:username", () => {
  test("GET:200 responds with array of deck objects based on username", () => {
    return request(app)
      .get("/api/decks/kooooo")
      .expect(200)
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
          });
        });
      });
  });

  test("GET:200 responds with empty array when provided user has no decks", () => {
    return request(app)
      .get("/api/decks/Brooke_Bradtke")
      .expect(200)
      .then(({ body: { decks } }) => {
        expect(Array.isArray(decks)).toBe(true);
        expect(decks).toHaveLength(0);
      });
  });

  test("GET:404 responds with an error message when provided non-existent username", () => {
    return request(app)
      .get("/api/decks/someUser")
      .expect(404)
      .then(({ body: { message } }) => {
        expect(message).toBe("username does not exist");
      });
  });
  test("GET:400 responds with an error message when provided empty username", () => {
    return request(app)
      .get("/api/decks/''")
      .expect(400)
      .then(({ body: { message } }) => {
        expect(message).toBe("no username provided");
      });
  });
});

describe("POST /api/decks/:username", () => {
  test("POST:201 accepts a request to create a deck and responds with the new deck object from decks collection", () => {
    return request(app)
      .post("/api/decks/kooooo")
      .send({
        deckName: "deck7",
        tags: ["java", "python"],
      })
      .expect(201)
      .then(({ body: { deck } }) => {
        expect(deck).toMatchObject({
          _id: expect.any(String),
          deckName: "deck7",
          username: "kooooo",
          tags: expect.any(Array),
          chatHistory: expect.any(Array),
          cards: expect.any(Array),
        });
      });
  }, 60000);
  test("POST:404 responds with an error if username does not exist ", () => {
    return request(app)
      .post("/api/decks/koooo0o")
      .send({
        deckName: "deck6",
        tags: ["java", "python"],
      })
      .expect(404)
      .then(({ body: { message } }) => {
        expect(message).toBe("Username does not exist");
      });
  });

  test("POST:400 responds with an error if request body is malformed (deckName)", () => {
    return request(app)
      .post("/api/decks/kooooo")
      .send({
        deckNome: "deck6",
        tags: ["java", "python"],
      })
      .expect(400)
      .then(({ body: { message } }) => {
        expect(message).toBe("Malformed request body");
      });
  });

  test("POST:400 responds with an error if request body is malformed (tags)", () => {
    return request(app)
      .post("/api/decks/kooooo")
      .send({
        deckName: "deck6",
        tgs: ["java", "python"],
      })
      .expect(400)
      .then(({ body: { message } }) => {
        expect(message).toBe("Malformed request body");
      });
  }, 40000);
});

describe("PATCH /api/decks/:deck_id", () => {
  test("PATCH:200 accepts a request to generate more cards and returns the updated deck  ", () => {
    return request(app)
      .patch("/api/decks/664e21109425c7ba3ae7fa85")
      .send({
        deckName: "deck2",
        tags: ["Angular", "javascript", "nodejs", "Supabase", "vue"],
      })
      .expect(200)
      .then(({ body: { deck } }) => {
        expect(deck).toMatchObject({
          _id: expect.any(String),
          deckName: "deck2",
          username: "kooooo",
          tags: expect.any(Array),
          chatHistory: expect.any(Array),
          cards: expect.any(Array),
        });
      });
  }, 50000);

  test("PATCH:404 responds with an error when deck with that id is not found", () => {
    return request(app)
      .patch("/api/decks/664e24d92a39772d1e86e942")
      .send({
        deckName: "deck2",
        tags: ["Angular", "javascript", "nodejs", "supabase", "vue"],
      })
      .expect(404)
      .then(({ body: { message } }) => {
        expect(message).toBe("deck not found");
      });
  }, 40000);
  test("PATCH:400 responds with an error when deck_id is invalid", () => {
    return request(app)
      .patch("/api/decks/123456")
      .send({
        deckName: "deck2",
        tags: ["Angular", "javascript", "nodejs", "supabase", "vue"],
      })
      .expect(400)
      .then(({ body: { message } }) => {
        expect(message).toBe("bad deck_id");
      });
  });
  test("PATCH:400 responds with an error when request body is malformed", () => {
    return request(app)
      .patch("/api/decks/664e21109425c7ba3ae7fa85")
      .send({
        deckName: "deck2",
        tags: {
          tag: ["Angular", "javascript", "nodejs", "supabase", "vue"],
        },
      })
      .expect(400)
      .then(({ body: { message } }) => {
        expect(message).toBe("bad or empty request body");
      });
  }, 40000);
  test("PATCH:400 responds with an error when request body is missing", () => {
    return request(app)
      .patch("/api/decks/664e21109425c7ba3ae7fa85")
      .send()
      .expect(400)
      .then(({ body: { message } }) => {
        expect(message).toBe("bad or empty request body");
      });
  }, 40000);
});

describe("DELETE /api/decks/:deck_id", () => {
  test("DELETE:204 deletes an existing deck", () => {
    return request(app)
      .delete("/api/decks/664e21109425c7ba3ae7fa85")
      .expect(204);
  });
  test("DELETE:404 responds with an error when passing an id for a deck that does not exist in the database", () => {
    return request(app)
      .delete("/api/decks/664f4eb3f7e0923267579fb1")
      .expect(404)
      .then(({ body }) => {
        const { message } = body;
        expect(message).toBe("Deck not found");
      });
  });
  test("DELETE:400 responds with an error when passing an invalid deck id for a deck", () => {
    return request(app)
      .delete("/api/decks/deck44")
      .expect(400)
      .then(({ body }) => {
        const { message } = body;
        expect(message).toBe("Malformed request body");
      });
  });
});

describe("PATCH /api/decks/:deck_id/cards", () => {
  test("PATCH:204 accepts a request to update the card properties in the deck ", () => {
    return request(app)
      .patch("/api/decks/664e21109425c7ba3ae7fa85/cards")
      .send({
        cards: deck12,
      })
      .expect(204);
  });
  test("PATCH:400 responds with error when request body is has an empty array", () => {
    return request(app)
      .patch("/api/decks/664e21109425c7ba3ae7fa85/cards")
      .send({
        cards: [],
      })
      .expect(400)
      .then(({ body: { message } }) => {
        expect(message).toBe("bad or empty request body");
      });
  });
  test("PATCH:400 responds with error when request body is not an array", () => {
    return request(app)
      .patch("/api/decks/664e21109425c7ba3ae7fa85/cards")
      .send({
        cards: "cards",
      })
      .expect(400)
      .then(({ body: { message } }) => {
        expect(message).toBe("bad or empty request body");
      });
  });
  test("PATCH:400 responds with error when request body has incorrect key name", () => {
    return request(app)
      .patch("/api/decks/664e21109425c7ba3ae7fa85/cards")
      .send({
        deck: deck12,
      })
      .expect(400)
      .then(({ body: { message } }) => {
        expect(message).toBe("bad or empty request body");
      });
  });
  test("PATCH:400 responds with error when request body has incorrect format", () => {
    return request(app)
      .patch("/api/decks/664e21109425c7ba3ae7fa85/cards")
      .send({
        deckName: "deck2",
        username: "kooooo",
        tags: expect.any(Array),
      })
      .expect(400)
      .then(({ body: { message } }) => {
        expect(message).toBe("bad or empty request body");
      });
  });
  test("PATCH:400 responds with error when request body is missing", () => {
    return request(app)
      .patch("/api/decks/664e21109425c7ba3ae7fa85/cards")
      .send()
      .expect(400)
      .then(({ body: { message } }) => {
        expect(message).toBe("bad or empty request body");
      });
  });
  test("PATCH:404 responds with an error when deck id does not exist in the database", () => {
    return request(app)
      .patch("/api/decks/664e24d92a39772d1e86e942/cards")
      .send({
        cards: deck12,
      })
      .expect(404)
      .then(({ body: { message } }) => {
        expect(message).toBe("deck not found");
      });
  });
  test("PATCH:400 returns 400 when deck_id is invalid", () => {
    return request(app)
      .patch("/api/decks/123456/cards")
      .send({
        cards: deck12,
      })
      .expect(400)
      .then(({ body: { message } }) => {
        expect(message).toBe("bad deck_id");
      });
  });
});
