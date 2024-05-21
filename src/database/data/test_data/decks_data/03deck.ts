export const deck3 = [
  {
    "Q": "What is functional programming, and what benefits does it offer in JavaScript? ",
    "A": "Functional programming is a paradigm that treats functions as first-class citizens, emphasizing pure functions, immutability, and avoiding shared state. In JavaScript, this style promotes code that is predictable, easier to test, and reason about. (Source: JavaScript Functional Programming Concepts)",
    "tag": "javascript",
    "Y": 0,
    "N": 0
  },
  {
    "Q": "How does JavaScript handle asynchronous operations, and what are callbacks? ",
    "A": "JavaScript uses callbacks and event-driven architecture to handle asynchronous operations. A callback is a function passed as an argument to another function, which is then invoked after an operation completes or an event occurs. (Source: JavaScript Async Operations)",
    "tag": "javascript",
    "Y": 0,
    "N": 0
  },
  {
    "Q": "What is the event loop in Node.js, and how does it enable concurrency? ",
    "A": "The event loop is a mechanism in Node.js that allows the server to handle multiple connections concurrently. It continuously monitors the event queue, executing callbacks for completed events and I/O operations, enabling efficient non-blocking I/O. (Source: Node.js Event Loop Documentation)",
    "tag": "nodejs",
    "Y": 0,
    "N": 0
  },
  {
    "Q": "How does Node.js handle stream data, and what are some common stream types? ",
    "A": "Node.js provides a stream API to handle stream data, such as reading/writing files or HTTP requests/responses. Common stream types include Readable, Writable, and Transform streams, which offer a flexible and efficient way to process data. (Source: Node.js Stream API Documentation)",
    "tag": "nodejs",
    "Y": 0,
    "N": 0
  },
  {
    "Q": "What is Vue.js, and what problem does it solve for front-end developers? ",
    "A": "Vue.js is a progressive JavaScript framework for building user interfaces. It provides a declarative and component-based programming model, allowing developers to efficiently create and manage complex UIs with data binding and reusable components. (Source: Vue.js Documentation)",
    "tag": "vue",
    "Y": 0,
    "N": 0
  },
  {
    "Q": "How does Vue.js handle template rendering, and what benefits does it offer over traditional HTML?",
    "A": "Vue.js uses a HTML-based template syntax for rendering, offering a concise and intuitive way to bind data to the DOM. It provides reactivity out-of-the-box, automatically updating the UI when data changes, and offers conditional rendering and directives for enhanced control. (Source: Vue.js Templating Documentation)",
    "tag": "vue",
    "Y": 0,
    "N": 0
  },
  {
    "Q": "What is the Virtual DOM in Vue.js, and why is it advantageous? ",
    "A": "The Virtual DOM in Vue.js is an in-memory representation of the actual DOM. When data changes, Vue.js efficiently computes the minimal number of DOM mutations needed, ensuring smooth and performant UI updates. (Source: Vue.js Reactivity Documentation)",
    "tag": "vue",
    "Y": 0,
    "N": 0
  },
  {
    "Q": "How does Vue.js handle routing, and what features does it offer for single-page applications? ",
    "A": "Vue.js provides a built-in routing system, vue-router, which enables developers to create single-page applications with multiple views and nested routes. It offers features like route parameters, query strings, navigation guards, and lazy loading, simplifying SPA development. (Source: Vue Router Documentation)",
    "tag": "vue",
    "Y": 0,
    "N": 0
  },
  {
    "Q": "What is Nuxt.js, and how does it extend or enhance Vue.js? ",
    "A": "Nuxt.js is a meta-framework for Vue.js that provides server-side rendering, static site generation, and a development environment. It simplifies the configuration and offers features like automatic code splitting, asset optimization, and server-side data fetching, enhancing Vue.js for larger-scale applications. (Source: Nuxt.js Documentation)",
    "tag": "vue",
    "Y": 0,
    "N": 0
  },
  {
    "Q": "How does Vuex, the state management pattern, and library for Vue.js work? ",
    "A": "Vuex is a dedicated flux-like state management library for Vue.js applications. It provides a centralized store for state, mutations to update state, actions to perform async operations, and getters for derived state, ensuring predictable and maintainable code. (Source: Vuex Documentation)",
    "tag": "vue",
    "Y": 0,
    "N": 0
  },
  {
    "Q": "What is the difference between .vue files and traditional JavaScript/HTML/CSS files in a Vue.js project? ",
    "A": ".vue files are single-file components in Vue.js, combining template, script, and style sections in one file. This approach improves readability, modularity, and maintainability, as all the code related to a component is in one place. (Source: Vue.js Single File Components Documentation)",
    "tag": "vue",
    "Y": 0,
    "N": 0
  },
  {
    "Q": "How does Vue.js handle form input and validation, and what benefits does it offer over plain HTML forms? ",
    "A": "Vue.js provides a declarative and reactive way to handle form input and validation. It offers two-way data binding, custom form components, and built-in form validation directives, making it easier to manage complex forms and ensure data integrity. (Source: Vue.js Forms Documentation)",
    "tag": "vue",
    "Y": 0,
    "N": 0
  },
  {
    "Q": "What is the role of computed properties in Vue.js, and how do they improve performance and maintainability? ",
    "A": "Computed properties in Vue.js are functions that return values based on reactive dependencies. They are cached and only recomputed when dependencies change, improving performance and reducing the need for manual watchers. (Source: Vue.js Computed Properties Documentation)",
    "tag": "vue",
    "Y": 0,
    "N": 0
  },
  {
    "Q": "How does Vue.js handle internationalization and localization for global applications? ",
    "A": "Vue.js provides the vue-i18n plugin, offering internationalization and localization features. It enables developers to define translations, format dates and numbers for specific locales, and handle pluralization, making it easier to build global applications. (Source: Vue i18n Documentation)",
    "tag": "vue",
    "Y": 0,
    "N": 0
  },
  {
    "Q": "What is the difference between server-side rendering (SSR) and client-side rendering in the context of Vue.js? ",
    "A": "Server-side rendering (SSR) in Vue.js generates HTML on the server and sends it to the client, improving initial load time and SEO. Client-side rendering, the default, renders the app entirely in the browser, using JavaScript to generate and update the DOM. (Source: Vue.js SSR Documentation)",
    "tag": "vue",
    "Y": 0,
    "N": 0
  },
  {
    "Q": "How does Vue.js handle animations and transitions, and what benefits does it offer over plain CSS? ",
    "A": "Vue.js provides a declarative and component-based approach to animations and transitions. It offers built-in directives like v-if and v-show, and the transition system simplifies managing entering, leaving, and list rendering animations, enhancing UI interactivity. (Source: Vue.js Transition Documentation)",
    "tag": "vue",
    "Y": 0,
    "N": 0
  },
  {
    "Q": "What is the role of watchers in Vue.js, and how do they relate to reactivity? ",
    "A": "Watchers in Vue.js are functions that react to data changes, providing a way to perform custom side effects or complex reactions. They are similar to computed properties but offer more flexibility for advanced scenarios, executing whenever a watched property changes. (Source: Vue.js Watchers Documentation)",
    "tag": "vue",
    "Y": 0,
    "N": 0
  },
  {
    "Q": "How does Vue.js handle error handling and logging, and what benefits does it offer over plain JavaScript? ",
    "A": "Vue.js provides a centralized error handling API, allowing developers to capture and handle errors globally or at the component level. It offers improved context information for debugging and supports integrating with third-party error reporting services. (Source: Vue.js Error Handling Documentation)",
    "tag": "vue",
    "Y": 0,
    "N": 0
  },
  {
    "Q": "What is the difference between Vue.js custom directives and special attributes? ",
    "A": "Vue.js custom directives are markers starting with 'v-' that add special behavior to HTML elements, allowing developers to extend Vue's functionality. Special attributes, like 'key' and 'ref', are reserved keywords with specific purposes defined by Vue. (Source: Vue.js Custom Directives Documentation)",
    "tag": "vue",
    "Y": 0,
    "N": 0
  },
  {
    "Q": "How does Vue.js handle component communication, and what are some common patterns? ",
    "A": "Vue.js offers several ways for components to communicate, including props for parent-to-child communication, custom events for child-to-parent communication, and a central store like Vuex for more complex patterns. (Source: Vue.js Component Communication Documentation)",
    "tag": "vue",
    "Y": 0,
    "N": 0
  },
  {
    "Q": "What is the Single Page Application (SPA) routing in Vue.js, and how does it improve the user experience?",
    "A": "SPA routing in Vue.js allows for navigating between different views or pages within a single-page application without a full page refresh. It provides a smooth and app-like user experience, enhancing the perceived performance and engagement of web applications. (Source: Vue Router SPA Documentation)",
    "tag": "vue",
    "Y": 0,
    "N": 0
  }
]
