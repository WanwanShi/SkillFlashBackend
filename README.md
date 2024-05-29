# SkillFlashBackend

About
This is the backend for SkillFlash, a platform designed to help users prepare for technical interviews by organizing and accessing various study materials, including question decks and tags. This backend serves as an API for managing users, tags, and decks of questions.
You can also find the SkillFlash frontend here:(https://github.com/Roodbaraky/SkillFlashFrontend)

## Table of Contents

    ### Installation
    ### Usage
    ### API Endpoints
    ### General
    ### Tags
    ### Users
    ### Decks
    ### Hosted version
    ### Acknowledgements

## Installation

### Clone the repository

`git clone https://github.com/your-username/skillflash-backend.git`

### Navigate to the project directory:

`cd skillflash-backend`

### Install dependencies:

`npm install`

### Set up environment variables:

`cp .env.example .env`

### Edit .env to include your configuration

create a .env file in the root directory of the project and add the following variables:

```
URI=<replace_with_your_mongo_uri here>
API_KEY=<replace_with_your_cohere_api_key here>
```

### Start the server:

`npm start`

## Usage

After installing and starting the server, the API will be accessible at your specified port. Use the endpoints described below to interact with the backend.

## API Endpoints

### General

GET /api
Description: Serves a JSON representation of all the available endpoints of the API.

#### Example Response:

```
{
"endpoints": {
"GET /api/tags": "Serves an array of all tags",
"POST /api/users/signup": "Creates a new user",
...
}
}
```

### Tags

GET /api/tags

#### Description: Serves an array of all tags.

Query Parameters:
tagCategory (optional): Filters tags by category.

#### Example Response:

```
{
"tags": [
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
```

#### Error Responses:

    ```
    400 Invalid query
    ```

### Users

#### POST /api/users/signup

Description: Responds with Error message if it is invalid query.
Example Request Body:

````{
"username": "test1",
"email": "test1@gmail.com",
"password": "password!12C\_"
}```
Example Response:

```{
"\_id": "664c54c9f9398e48bdfa372a",
"username": "test1",
"email": "test1@gmail.com"
}```
Error Responses:
```400 failed to signup```

#### POST /api/users/login

Description: Authenticates an existing user.
Example Request Body:

````

{
"username": "test1",
"password": "zUz_0n7y!123YXtr8pL"
}

```

Example Response:

```

{
"\_id": "664c54c9f9398e48bdfa372a",
"username": "test1",
"email": "test1@gmail.com"
}```

Error Responses:
`404 username does not exist`
`400 username and password do not match`

####GET /api/users/
Description: Checks if a username exists.
Example Response:

````
{
"exist": true
}```

#### PATCH /api/users/

Description: Updates a user object.
Example Request Body:

````

{
"username": "newUsername",
"email": "hello@gmail.com",
"password": "newPassword!123"
}```
Example Response:

````
{
"user": {
"\_id": "new ObjectId('66548f70bf69f77ff324bceb')",
"username": "newUsername",
"email": "hello@gmail.com"
}
}```

#### DELETE /api/users/

Description: Deletes a user and their corresponding decks.
Error Responses:
```404 User not found```
```400 Malformed request body```

### Decks

#### GET /api/decks/

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
```404 username does not exist```
```400 no username provided```

#### POST /api/decks/

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
```404 username does not exist```
```400 no username provided```
```400 malformed request body```
```400 not enough passing cards```

#### PATCH /api/decks/

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
```404 deck not found```
```400 bad deck_id```
```400 bad or empty request body```

#### DELETE /api/decks/

Description: Deletes the deck with the corresponding deck_id.
Error Responses:
```404 Deck not found```
```400 Malformed request body```

#### PATCH /api/decks/
/cards
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
```404 deck not found```
```400 bad or empty request body```
```400 bad deck_id```



### Hosted Version of the API (https://skillflashbackend.onrender.com/api/)

### Acknowledgements

Huge thanks is in order to all of the students and mentors on the March 2024 Software Development Cohort. In particular, the members of 'elloworld for their hard work and dedicated contributions over the course of the project:

Ana Gomes
Huajie He
Koorosh Roodbaraky
Wanwan (Wendy) Shi

````
