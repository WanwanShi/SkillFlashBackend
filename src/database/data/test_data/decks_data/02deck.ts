export const deck2 = [
  {
    "Q": "What is JavaScript prototypal inheritance, and how does it differ from classical inheritance? ",
    "A": "JavaScript uses prototypal inheritance, where objects inherit directly from other objects (prototypes). This differs from classical inheritance, where classes define inheritance relationships. Prototypes offer flexibility and allow for dynamic behavior modification. (Source: JavaScript MDN Docs)",
    "tag": "javascript",
    "Y": 0,
    "N": 0
  },
  {
    "Q": "How does JavaScript handle asynchronous operations, and what tools are available for managing them? ",
    "A": "JavaScript manages asynchronous operations through callbacks, promises, async/await, and generators. These tools provide ways to handle concurrent operations, ensuring that code executes in a non-blocking manner, which is essential for I/O-intensive tasks. (Source: JavaScript MDN Docs)",
    "tag": "javascript",
    "Y": 0,
    "N": 0
  },
  {
    "Q": "Explain the concept of 'this' in JavaScript and how it can be bound or referenced. ",
    "A": "'this' in JavaScript refers to the current execution context. It can be bound to different values depending on the function invocation style (e.g., method vs. function). Techniques like call, apply, and bind are used to control the value of 'this'. (Source: JavaScript MDN Docs)",
    "tag": "javascript",
    "Y": 0,
    "N": 0
  },
  {
    "Q": "How does Node.js handle module exports and imports, and what are some common patterns for organizing code? ",
    "A": "Node.js uses the CommonJS module system, allowing modules to export and import functionality. Common patterns include exporting a single function, object, or class, and using modules to encapsulate and organize code for better maintainability. (Source: Node.js Documentation)",
    "tag": "nodejs",
    "Y": 0,
    "N": 0
  },
  {
    "Q": "What is Vue.js, and what are its key features? ",
    "A": "Vue.js is a progressive JavaScript framework for building user interfaces. Its key features include declarative rendering, component-based architecture, reactivity, and a wide range of tools for efficiently developing and scaling applications. (Source: Vue.js Documentation)",
    "tag": "vue",
    "Y": 0,
    "N": 0
  },
  {
    "Q": "Explain the concept of reactivity in Vue.js and how it facilitates dynamic user interfaces. ",
    "A": "Reactivity in Vue.js is a data binding mechanism that automatically triggers updates to the UI when the underlying data changes. It uses a reactive dependency tracking system, eliminating the need for manual DOM manipulation and improving performance. (Source: Vue.js Reactivity Guide)",
    "tag": "vue",
    "Y": 0,
    "N": 0
  },
  {
    "Q": "How does Vue.js handle routing, and what benefits does it offer for single-page applications? ",
    "A": "Vue.js provides a built-in routing system, Vue Router, that enables developers to create single-page applications with multiple views and browser history navigation. It offers features like nested routes, route parameters, and lazy loading, enhancing the user experience. (Source: Vue Router Guide)",
    "tag": "vue",
    "Y": 0,
    "N": 0
  },
  {
    "Q": "What is the role of components in Vue.js, and how do they promote code reusability and maintainability? ",
    "A": "Components in Vue.js are reusable UI elements that encapsulate templates, logic, and styling. They promote code reusability by allowing developers to build complex UIs from smaller, self-contained parts, making the codebase more organized and maintainable. (Source: Vue.js Component Guide)",
    "tag": "vue",
    "Y": 0,
    "N": 0
  },
  {
    "Q": "How does Vue.x, the state management library for Vue.js, help manage application state and provide a centralized data store? ",
    "A": "Vuex, inspired by Flux and Redux, is a state management pattern and library for Vue.js applications. It serves as a centralized store for shared state, providing predictable state mutations and helping maintain data consistency across components, especially in large-scale applications. (Source: Vuex Guide)",
    "tag": "vue",
    "Y": 0,
    "N": 0
  },
  {
    "Q": "What is Angular, and how does it compare to other frameworks like React or Vue? ",
    "A": "Angular is a TypeScript-based framework for building web applications, known for its comprehensive nature. It offers a full-stack solution with a steep learning curve, while React and Vue provide more flexibility but require additional setup for certain features. (Source: Angular Documentation, React Documentation, Vue.js Documentation)",
    "tag": "Angular",
    "Y": 0,
    "N": 0
  },
  {
    "Q": "Explain the role of dependency injection in Angular and how it facilitates modular and testable code. ",
    "A": "Dependency injection is a design pattern used in Angular to provide components and services with their dependencies. It promotes modular and testable code by making components independent of their environment, enhancing maintainability and facilitating unit testing. (Source: Angular Dependency Injection Guide)",
    "tag": "Angular",
    "Y": 0,
    "N": 0
  },
  {
    "Q": "How does Angular handle form validation, and what benefits does it offer for ensuring data integrity? ",
    "A": "Angular provides a robust form validation system that includes built-in validators and the ability to create custom validators. It offers template-driven and reactive forms, ensuring data integrity by validating user input and providing feedback in realtime. (Source: Angular Forms Guide)",
    "tag": "Angular",
    "Y": 0,
    "N": 0
  },
  {
    "Q": "What is Supabase, and what problem does it solve for developers? ",
    "A": "Supabase is an open-source platform that provides a backend-as-a-service (BaaS) infrastructure. It offers a powerful alternative to traditional databases, providing features like authentication, storage, and realtime subscriptions, making it easier for developers to build and deploy apps. (Source: Supabase Documentation)",
    "tag": "supabase",
    "Y": 0,
    "N": 0
  },
  {
    "Q": "How does Supabase handle authentication and authorization, and what benefits does it offer for securing applications? ",
    "A": "Supabase provides a flexible authentication system that supports email/password, social login, and magic links. It offers fine-grained access controls with policies, ensuring data security and privacy. Developers can secure their apps efficiently without complex backend code. (Source: Supabase Auth Docs)",
    "tag": "supabase",
    "Y": 0,
    "N": 0
  },
  {
    "Q": "What is the Realtime API in Supabase, and how does it enable collaborative and responsive applications? ",
    "A": "The Realtime API in Supabase allows applications to subscribe to changes in database rows in realtime. This enables collaborative features like chat, realtime updates, and synchronized data across clients, enhancing the responsiveness and interactivity of applications. (Source: Supabase Realtime Docs)",
    "tag": "supabase",
    "Y": 0,
    "N": 0
  },
  {
    "Q": "How does Supabase's storage system work, and what benefits does it offer over traditional file storage solutions? ",
    "A": "Supabase Storage provides a scalable and secure object storage solution, similar to AWS S3. It offers direct file uploads, easy sharing via public URLs, and robust access controls, making it simpler to manage and deliver files in web applications. (Source: Supabase Storage Docs)",
    "tag": "supabase",
    "Y": 0,
    "N": 0
  },
  {
    "Q": "What is the SQL API in Supabase, and how does it empower developers to work with relational data? ",
    "A": "The SQL API in Supabase provides a powerful interface for developers to work with relational data using standard SQL queries. It offers CRUD operations, filtering, sorting, and aggregation, making it easy to build complex applications backed by a relational database. (Source: Supabase SQL API Docs)",
    "tag": "supabase",
    "Y": 0,
    "N": 0
  },
  {
    "Q": "How does Supabase's auto-generated REST API enhance the developer experience and speed up development? ",
    "A": "Supabase automatically generates a REST API for database tables, providing CRUD operations and authentication out-of-the-box. This speeds up development by eliminating the need to manually create endpoints, allowing developers to focus on building application logic. (Source: Supabase REST API Docs)",
    "tag": "supabase",
    "Y": 0,
    "N": 0
  }
]
