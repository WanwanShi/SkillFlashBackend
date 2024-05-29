# SkillFlashBackend

1️⃣ About SkillFlash
This is the backend for SkillFlash, a platform designed to help users prepare for technical interviews by organizing and accessing various study materials, including question decks and tags. This backend serves as an API for managing users, tags, and decks of questions.
You can also find the SkillFlash frontend here:(https://github.com/Roodbaraky/SkillFlashFrontend)

## Table of Contents

    Installation
    Usage
    API Endpoints
    General
    Tags
    Users
    Decks
    Hosted version
    Acknowledgements

## 2️⃣Installation

### Clone the repository

```
git clone https://github.com/your-username/skillflash-backend.git
```

### Navigate to the project directory:

```
cd skillflash-backend
```

### Install dependencies:

```
npm install
```

### Set up environment variables:

create .env file in your root directory

### Edit .env to include your configuration

In the .env file you created, add the following variables:

```
URI=<replace_with_your_mongo_uri here>
API_KEY=<replace_with_your_cohere_api_key here>
```

### Start the server:

```
npm start
```

## 3️⃣Usage

After installing and starting the server, the API will be accessible at your specified port. Use the endpoints described below to interact with the backend.

## 4️⃣API Endpoints

### General

🔘 GET /api
Description: Serves a JSON representation of all the available endpoints of the API.

#### Example Response:

{
"endpoints": {
"GET /api/tags": "Serves an array of all tags",
"POST /api/users/signup": "Creates a new user",
"POST /api/users/login": "Authenticates an existing user",}
}

### Tags

🔘 GET /api/tags

#### Description: Serves an array of all tags.

Query Parameters:
tagCategory (optional): Filters tags by category.

#### Example Response:

{
"tags":
[
{
"_id": "664b46f82c0e05e0e615dd9f",
"tagName": "JavaScript",
"tagCategory": "technical-skills"
},
{
"_id": "664b46f82c0e05e0e615dda0",
"tagName": "Python",
"tagCategory": "technical-skills"
},
{
"_id": "664b46f82c0e05e0e615ddd0",
"tagName": "Testing Techniques",
"tagCategory": "practical-knowledge"
}
]
}

#### Error Responses:

{status:400, message: "Invalid query"}

### Users

#### 🔘POST /api/users/signup

Description: Responds with newly created user object.
Example Request Body:

{
"username": "test1",

"email": "test1@gmail.com",

"password": "password!12C\_"
}

Example Response:

{
"\_id": "664c54c9f9398e48bdfa372a",

"username": "test1",

"email": "test1@gmail.com"
}
Error Responses:

{
status:400, message:" failed to signup"
}

#### POST /api/users/login

Description: Authenticates an existing user.

Example Request Body:

{
"username": "test1",
"password": "zUz_0n7y!123YXtr8pL"
}

Example Response:

{
"\_id": "664c54c9f9398e48bdfa372a",
"username": "test1",
"email": "test1@gmail.com"
}

Error Responses:
{
status:404, message: " username does not exist "
}
{
status:400, message: " username and password do not match "
}

#### 🔘GET /api/users/:username

Description: Checks if a username exists.

Example Response:

{
"exist": true
}

#### PATCH /api/users/:username

Description: Updates a user object.
Example Request Body:

{
"username": "newUsername",
"email": "hello@gmail.com",
"password": "newPassword!123"
}

Example Response:

{
"user": {
"\_id": "new ObjectId('66548f70bf69f77ff324bceb')",
"username": "newUsername",
"email": "hello@gmail.com"
}
}

#### 🔘DELETE /api/users/:username

Description: Deletes a user and their corresponding decks.

Error Responses:
{
status:404, message: " user not found "
}
{
status:400, message: " malformed request body"
}

### Decks

#### 🔘 GET /api/decks/:username

Description: Serves an array of decks for a specific user.
Example Response:
{
"decks": [
{
"card_id": 1,
"Q": "How does Django REST Framework handle authentication and permissions?",
"A": "Django REST Framework offers a flexible authentication system that integrates with various authentication backends, including tokens, sessions, and OAuth. It also provides fine-grained permission controls, allowing developers to restrict access to specific views or functionality. (Source: Django REST Framework Authentication Documentation)",
"tag": "python",
"Y": 0,
"N": 0
},
{
"card_id": 2,
"Q": "What is type hinting in Python, and how does it improve code quality?",
"A": "Type hinting in Python involves adding annotations to variables and function arguments to specify their expected types. This improves code quality by enabling static type checking, providing better documentation, and facilitating IDE auto-completion and refactoring. (Source: Python Type Hinting Documentation)",
"tag": "python",
"Y": 0,
"N": 0
}
]
}

Error Responses:
{
status:404, message:" username does not exist"
}

{
status:400, message: "no username provided"
}

#### 🔘 POST /api/decks/:username

Description: Posts a deck for a specific user, returns the posted deck.

Example Request Body:

{
"deckName": "deck7",
"tags": ["java", "python"]
}

Example Response:
{
"\_id": "664e24d92a39772d1e86e942",
"deckName": "deck7",
"username": "kooooo",
"tags": ["Angular", "javascript", "nodejs", "supabase", "vue"],
"chatHistory": [],
"cards": []
}
Error Responses:
{
status: 400,
message: "not enough passing cards"
}
{

status: 400,
message: "malformed request body"
}
{
status: 400,
message: "no username provided"
}
{
status: 404,
message: "username does not exist"
}

#### 🔘 PATCH /api/decks/:deck_id

Description: Patches properties of a deck for a specific deck_id, returns the patched deck.

Example Request Body:

{
"deckName": "deck2",
"tags": ["Angular", "javascript", "nodejs", "supabase", "vue"]
}
Example Response:

{
"deckName": "deck2",
"tags": ["react", "vue", "supabase", "postgresql"],
"chatHistory": [
{ "role": "USER", "message": "request message" },
{ "role": "CHATBOT", "message": "Q&As" }
],
"cards": [
{
"card_id": 1,
"Q": "How does Django REST Framework handle authentication and permissions?",
"A": "Django REST Framework offers a flexible authentication system that integrates with various authentication backends, including tokens, sessions, and OAuth. It also provides fine-grained permission controls, allowing developers to restrict access to specific views or functionality. (Source: Django REST Framework Authentication Documentation)",
"tag": "python",
"Y": 0,
"N": 0
},
{
"card_id": 2,
"Q": "What is type hinting in Python, and how does it improve code quality?",
"A": "Type hinting in Python involves adding annotations to variables and function arguments to specify their expected types. This improves code quality by enabling static type checking, providing better documentation, and facilitating IDE auto-completion and refactoring. (Source: Python Type Hinting Documentation)",
"tag": "python",
"Y": 0,
"N": 0
}
]
}

Error Responses:
{
status: 400,
message: "bad deck_id"
}
{
status: 400,
message: "bad or empty request body"
}
{

status: 404,
message: "deck not found"
}

#### 🔘 DELETE /api/decks/

Description: Deletes the deck with the corresponding deck_id.

Error Responses:

{
status: 400,
message: "bad or empty request body"
}
{

status: 404,
message: "deck not found"
}

#### 🔘 PATCH /api/decks/:deck_id/cards

Description: Patches properties of cards in the deck for a specific deck_id.

Example Request Body:

[
{
"Q": "What is event-driven architecture in Node.js, and how does it facilitate concurrency?",
"A": "Node.js employs an event-driven architecture, where all I/O operations are asynchronous and executed in a non-blocking manner. This design enables the server to handle multiple concurrent connections efficiently by registering callbacks for different events, ensuring high scalability and responsiveness. (Source: Node.js Documentation)",
"tag": "nodejs",
"Y": 0,
"N": 1
},
{
"Q": "How does Node.js handle streaming data, and what are some use cases for this capability?",
"A": "Node.js provides built-in support for streaming data, allowing efficient processing of large datasets without loading the entire content into memory. This feature is valuable for handling file uploads, working with large media files, and building realtime data processing systems. (Source: Node.js Stream API Documentation)",
"tag": "nodejs",
"Y": 2,
"N": 0
}
]

Error Responses:

{
status: 400,
message: "bad or empty request body"
}
{

status: 404,
message: "deck not found"
}
{
status: 404,
message: "bad deck_id"
}

### Hosted Version of the API

You can fine the API hosted on Render (https://render.com/) at the following link:
(https://skillflashbackend.onrender.com/api/)

### Acknowledgements

👏👏👏👏👏👏👏👏
Huge thanks is in order to all of the students and mentors on the March 2024 Software Development Cohort. In particular, the members of 'elloworld for their hard work and dedicated contributions over the course of the project:

👩🏻‍💻Ana Gomes (https://github.com/anaggomes)

🧑🏻‍💻Huajie He (https://github.com/aytchhh)

👨🏻‍💻Koorosh Roodbaraky (https://github.com/Roodbaraky)

👩🏻‍💻Wanwan (Wendy) Shi (https://github.com/WanwanShi)
