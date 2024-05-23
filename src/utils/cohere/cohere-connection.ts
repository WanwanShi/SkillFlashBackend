const CohereClient = require("cohere-ai").CohereClient;
import { stringToObject } from "./utils";
import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({
  path: path.resolve(__dirname, "../../../.env"),
});

const apiKey = process.env.API_KEY as string;

const cohere = new CohereClient({
  token: apiKey,
});

export async function getCohereCards(message: string, chatHistory: Array<{}>) {
  console.log('AI connected')
  const testPreamble = `
## Task & Context
You are helping tech professionals preparing for an interview. Generate the exact requested number of flashcards with Q: and A: format, including a tag with the respective topic(one topic only per flashcard) used for that question. Tailor the questions to the proficiency level requested by the user. Do NOT return any code snippets, titles, figures, or labels. Do not add an intro or group the responses. Source the content primarily from MDN docs and educational resources. Add the source of the information to the end of each answer. Answers must be 250 to 450 characters long. No repeated questions. Do not number the questions. 

## Style Guide
 Include examples and practical scenarios where applicable to deepen understanding, but no code snippets. Use professional language. Emphasize relevance to tech interviews by framing questions in a way that aligns with potential interview questions or commonly discussed topics in technical interviews. You'll remove any wrapping quotes in any of the questions, answers or tags.
 
 Example response:
     Q: What is React, and what problem does it solve for web developers? ,
     A: React is a JavaScript library for building user interfaces. It introduces a component-based architecture and a virtual DOM, making it efficient and predictable to create and maintain complex UIs. (Source: React Documentation)
     tag: React`;
  try {
    const response = await cohere.chat({
      model: "command-r-plus",
      chat_history: chatHistory,
      message: message,
      temperature: 0.3,
      preamble: testPreamble,
    });

    const newChatHistory = [
      { role: "USER", message: message },
      { role: "CHATBOT", message: response.text.split("\n").join(" ") },
    ];
    const flashcards = stringToObject(response.text);

    return [newChatHistory, flashcards];
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
}

// const keywords = ["Angular", "scrum", "paired programming"];
// const numberQs = 20;
// const difficulty = "advanced";
// const message = `Give me ${numberQs} flashcards about the following topics ${keywords} for a ${difficulty} proficiency level`;
//example chat history

export interface ChatHistory {
  role: string;
  message: string;
}
export const chatHistory: ChatHistory[] = [
  { role: "USER", message: `Give me 20 flashcards about the following topics ["Angular", "scrum", "paired programming"].` },
  {
    role: "CHATBOT",
    message: `Q: What is Node.js, and why is it associated with server-side JavaScript?
A: Node.js is a cross-platform runtime environment that allows JavaScript code execution outside of a browser. It provides an event-driven architecture and non-blocking I/O, making it ideal for building scalable network applications, including servers. (Source: Node.js Documentation)
tag: nodejs

Q: How does Node.js handle concurrency and asynchronous programming?
A: Node.js uses an event loop to handle concurrency. This design enables the server to handle multiple connections concurrently by registering callbacks for different events. Asynchronous programming in Node.js is facilitated by callbacks, promises, and async/await. (Source: Node.js Documentation)
tag: nodejs

Q: What is GitHub, and why is it important for developers?
A: GitHub is a popular platform for hosting and collaborating on code. It provides a distributed version control system based on Git, allowing developers to track changes, branch, merge, and collaborate on projects efficiently. (Source: GitHub Documentation)
tag: github

Q: Explain GitHub's branching strategy and how it facilitates collaborative development.
A: GitHub encourages a branching model where developers create feature branches for new features or bug fixes. These branches are then merged via pull requests, enabling code review and discussion before changes are integrated into the main branch. (Source: GitHub Flow Documentation)
tag: github

Q: How does TypeScript extend or improve JavaScript?
A: TypeScript is a statically typed superset of JavaScript that adds type-checking at compile time. It improves developer productivity by catching type-related errors early and providing better tooling support, such as auto-completion and refactoring. (Source: TypeScript Documentation)
tag: typescript

Q: What is angular?
A: Angular is a TypeScript-based open-source web application framework. It provides a comprehensive platform for building single-page, progressive web, and mobile apps, offering features like declarative templates, dependency injection, and efficient change detection. (Source: Angular Documentation)
tag: Angular

Q: Describe the role of components and directives in Angular.
A: Components in Angular are the building blocks of UI, encapsulating HTML templates and logic. Directives are markers on HTML elements that modify or enhance the behavior of those elements, providing a way to create reusable UI components and logic. (Source: Angular Documentation)
tag: Angular

Q: What is Firebase, and what services does it offer?
A: Firebase is a Backend-as-a-Service (BaaS) platform that provides a suite of cloud-based tools and services for web and mobile app development, including realtime databases, cloud storage, authentication, hosting, and machine learning kits. (Source: Firebase Documentation)
tag: firebase

Q: How does Firebase's realtime database work, and what benefits does it offer?
A: Firebase Realtime Database is a cloud-hosted NoSQL database that synchronizes data across clients in realtime. It uses a JSON-like structure and offers offline support, making it ideal for building collaborative and responsive apps. (Source: Firebase Realtime Database Documentation)
tag: firebase

Q: What is the role of security rules in Firebase's Realtime Database?
A: Security rules in Firebase Realtime Database define access controls and security policies. These rules are written in a declarative JSON format and determine which users can read or write data, providing a robust way to secure sensitive information. (Source: Firebase Realtime Database Documentation)
tag: firebase

Q: What is Firebase Authentication, and how does it integrate with other Firebase services?
A: Firebase Authentication provides backend services, SDKs, and UI libraries for user authentication. It integrates seamlessly with other Firebase services, such as Realtime Database and Cloud Storage, making it easy to secure and personalize user experiences. (Source: Firebase Authentication Documentation)
tag: firebase

Q: How does Firebase Hosting work, and what benefits does it offer for web developers?
A: Firebase Hosting offers fast and secure static content hosting for web apps. It provides custom domains, SSL certificates, and CDN caching out-of-the-box, simplifying the deployment process and ensuring high-performance content delivery. (Source: Firebase Hosting Documentation)
tag: firebase

Q: What is the Firebase ML Kit, and how can it be used to enhance mobile applications?
A: The Firebase ML Kit provides a collection of machine learning APIs that can be integrated into mobile applications. It offers features like image labeling, text recognition, and face detection, enabling developers to add AI-powered capabilities to their apps without expertise in ML. (Source: Firebase ML Kit Documentation)
tag: firebase

Q: What are some use cases for Node.js beyond just server-side scripting?
A: Node.js is used for building IoT applications, real-time communication apps, command-line tools, and desktop applications. Its event-driven architecture and ecosystem of packages make it versatile for various projects. (Source: Node.js Use Cases)
tag: nodejs

Q: How does GitHub handle merge conflicts, and what tools does it provide for resolving them?
A: GitHub detects and notifies developers of merge conflicts when pulling or merging branches. It provides tools like the conflict editor and the ability to fetch changes and rebase to help resolve conflicts efficiently. (Source: GitHub Merge Conflict Documentation)
tag: github

Q: What is Angular Routing, and how does it help structure single-page applications?
A: Angular Routing is a built-in feature that handles URL changes and view navigation within a single-page application. It enables developers to define routes, load components, and manage application state efficiently, providing a seamless user experience. (Source: Angular Routing Documentation)
tag: Angular

// Q: How does Angular's change detection work, and what techniques can be used to optimize it?
// A: Angular's change detection system tracks changes in component properties and triggers UI updates. Techniques like OnPush change detection strategy, change detection strategies, and the AsyncPipe can be used to optimize performance and control when checks occur. (Source: Angular Change Detection Documentation)
// tag: Angular

// Q: What is TypeScript generics, and how do they improve code flexibility and reusability?
// A: TypeScript generics allow the creation of flexible, reusable functions, interfaces, and classes that can work with different types. They provide a way to enforce type safety and reduce the need for type casting, improving code robustness. (Source: TypeScript Generics Documentation)
// tag: typescript

// Q: How does TypeScript handle type compatibility and type inference?
// A: TypeScript uses structural typing, where type compatibility is determined by the presence of specific properties, rather than their declaration. Type inference automatically determines types based on values, reducing the need for explicit type annotations. (Source: TypeScript Handbook)
// tag: typescript`,
  },
];

// const secondMessage = `Give me 20 NEW flashcards about the following topics: ${keywords} `;

//first request
// getCohereCards(message, []);

//second request
// getCohereCards(secondMessage, chatHistory);
