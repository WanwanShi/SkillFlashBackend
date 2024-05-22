export const deck1 = [
	{
		"Q": "What is event-driven architecture in Node.js, and how does it facilitate concurrency? ",
		"A": "Node.js employs an event-driven architecture, where all I/O operations are asynchronous and executed in a non-blocking manner. This design enables the server to handle multiple concurrent connections efficiently by registering callbacks for different events, ensuring high scalability and responsiveness. (Source: Node.js Documentation)",
		"tag": "nodejs",
		"Y": 0,
		"N": 0
	},
	{
		"Q": "How does Node.js handle streaming data, and what are some use cases for this capability? ",
		"A": "Node.js provides built-in support for streaming data, allowing efficient processing of large datasets without loading the entire content into memory. This feature is valuable for handling file uploads, working with large media files, and building realtime data processing systems. (Source: Node.js Stream API Documentation)",
		"tag": "nodejs",
		"Y": 0,
		"N": 0
	},
	{
		"Q": "What is GitHub Actions, and how can it be used to automate development workflows? ",
		"A": "GitHub Actions is a continuous integration and continuous deployment (CI/CD) platform that allows developers to automate software build, test, and deployment processes directly from their GitHub repository. It offers a wide range of features, including workflow customization, dependency caching, and integration with various tools and services. (Source: GitHub Actions Documentation)",
		"tag": "github",
		"Y": 0,
		"N": 0
	},
	{
		"Q": "How does GitHub handle access control and permissions for repositories? ",
		"A": "GitHub offers fine-grained access control for repositories, allowing owners to grant specific permissions to individuals or teams. Permissions include read, write, and admin access, and they can be customized further with branching rules and protected branches to ensure secure and collaborative development. (Source: GitHub Permissions Documentation)",
		"tag": "github",
		"Y": 0,
		"N": 0
	},
	{
		"Q": "What is TypeScript's type system, and how does it compare to traditional object-oriented types? ",
		"A": "TypeScript introduces a strong, static type-checking system that extends JavaScript's dynamic types. It supports traditional object-oriented types like classes, interfaces, and enums, while also providing advanced features such as generics, union types, and type inference, enabling robust and scalable application development. (Source: TypeScript Handbook)",
		"tag": "typescript",
		"Y": 0,
		"N": 0
	},
	{
		"Q": "How does Angular handle form validation, and what are the benefits of using its built-in validation framework?",
		"A": "Angular provides a robust form validation framework that offers template-driven and reactive forms. It handles synchronous and asynchronous validation, providing immediate feedback to users. The framework's integration with data binding simplifies form management and ensures a consistent user experience. (Source: Angular Forms Documentation)",
		"tag": "Angular",
		"Y": 0,
		"N": 0
	},
	{
		"Q": "What is dependency injection, and how does Angular's dependency injection system work? ",
		"A": "Dependency injection is a design pattern that promotes loose coupling and modularity. Angular's dependency injection system uses decorators to inject dependencies into components, services, and other classes, making the code more testable and maintainable. (Source: Angular Dependency Injection Documentation)",
		"tag": "Angular",
		"Y": 0,
		"N": 0
	},
	{
		"Q": "How does Firebase handle security and access control for its Realtime Database? ",
		"A": "Firebase Realtime Database secures data through security rules, which define access controls. These rules are structured as conditions and allow/deny statements, ensuring that only authorized users can read or write data. Firebase also provides additional security measures, such as authentication and data encryption. (Source: Firebase Realtime Database Security Documentation)",
		"tag": "firebase",
		"Y": 0,
		"N": 0
	},
	{
		"Q": "What is Firebase Cloud Functions, and how can it be used to build serverless applications? ",
		"A": "Firebase Cloud Functions is a serverless framework that lets developers write and deploy backend code without managing infrastructure. Functions are triggered by events, such as database changes or HTTP requests, and they scale automatically, making it easy to build dynamic and responsive applications. (Source: Firebase Cloud Functions Documentation)",
		"tag": "firebase",
		"Y": 0,
		"N": 0
	},
	{
		"Q": "How does Node.js handle encryption and decryption of data, and what are some common use cases for this functionality? ",
		"A": "Node.js provides built-in and community-driven modules for data encryption and decryption, such as the crypto module. This functionality is crucial for secure data storage, communication, and authentication, especially in applications that handle sensitive information, like user credentials and payment details. (Source: Node.js Crypto Module Documentation)",
		"tag": "nodejs",
		"Y": 0,
		"N": 0
	},
	{
		"Q": "What is a monorepo, and what benefits does GitHub provide for managing large-scale projects in a monorepo structure? ",
		"A": "A monorepo is a repository that contains multiple projects or packages. GitHub offers advanced features like code owners, code search, and code insights to efficiently manage large-scale projects in a monorepo structure. These features facilitate code ownership, navigation, and understanding of complex codebases. (Source: GitHub Code Owner Documentation, GitHub Code Search Documentation, GitHub Code Insights Documentation)",
		"tag": "github",
		"Y": 0,
		"N": 0
	},
	{
		"Q": "How does TypeScript handle null and undefined values, and what are some best practices for working with them? ",
		"A": "TypeScript introduces the null and undefined types to represent the absence of a value. It provides strict null checks and optional chaining to help manage these values effectively. Best practices include using non-null assertion operators sparingly and leveraging the nullish coalescing operator for default values. (Source: TypeScript Handbook)",
		"tag": "typescript",
		"Y": 0,
		"N": 0
	},
	{
		"Q": "What is Angular Elements, and how does it enable the creation of reusable UI components? ",
		"A": "Angular Elements is a feature that allows Angular components to be packaged as custom elements, making them usable in any web project, regardless of the framework. This capability promotes code reusability and facilitates the creation of dynamic and interactive web experiences. (Source: Angular Elements Documentation)",
		"tag": "Angular",
		"Y": 0,
		"N": 0
	},
	{
		"Q": "How does Angular's HTTP client handle error responses, and what are some best practices for error handling in Angular applications? ",
		"A": "Angular's HTTP client provides a comprehensive error handling mechanism, allowing developers to catch and handle different types of errors, such as network errors or server errors. Best practices include global error handling, localized error handling, and providing meaningful error messages to users. (Source: Angular HTTP Client Documentation)",
		"tag": "Angular",
		"Y": 0,
		"N": 0
	},
	{
		"Q": "What is Firebase Storage, and how does it integrate with other Firebase services to build robust applications? ",
		"A": "Firebase Storage provides secure file uploads and downloads for user-generated content. It integrates seamlessly with other Firebase services, such as Firebase Authentication for secure file access and Cloud Functions for automated image resizing or transcoding, making it a powerful tool for building dynamic media-rich applications. (Source: Firebase Storage Documentation)",
		"tag": "firebase",
		"Y": 0,
		"N": 0
	},
	{
		"Q": "What is the Firebase Emulator Suite, and how can it be used to simulate a production environment during development? ",
		"A": "The Firebase Emulator Suite is a set of local emulators that mimic various Firebase services, including the Realtime Database, Cloud Storage, and Cloud Functions. Developers can use this suite to test and debug their applications in a simulated production environment, ensuring smooth deployment and reducing potential issues. (Source: Firebase Emulator Suite Documentation)",
		"tag": "firebase",
		"Y": 0,
		"N": 0
	},
	{
		"Q": "How does Node.js handle process management, and what are some best practices for building robust Node.js applications? ",
		"A": "Node.js provides the cluster module for managing multi-process Node.js applications. Best practices for building robust Node.js applications include handling uncaught exceptions, using a process manager, implementing proper error handling, and utilizing performance monitoring tools to ensure optimal resource utilization and application stability. (Source: Node.js Process Management Documentation)",
		"tag": "nodejs",
		"Y": 0,
		"N": 0
	},
	{
		"Q": "What is GitHub Codespaces, and how does it enhance developer productivity? ",
		"A": "GitHub Codespaces is an online development environment that allows developers to code directly from their web browser. It provides cloud-hosted, pre-built dev environments with the exact tooling and dependencies specified in a project's codebase, enabling developers to start coding instantly without local setup. (Source: GitHub Codespaces Documentation)",
		"tag": "github",
		"Y": 0,
		"N": 0
	},
	{
		"Q": "How does TypeScript's type system support functional programming paradigms? ",
		"A": "TypeScript's type system includes support for functional programming through features like function types, generics, and type inference. These features enable developers to write type-safe functional code, leverage higher-order functions, and compose functions in a typesafe manner, promoting code reusability and predictability. (Source: TypeScript Handbook)",
		"tag": "typescript",
		"Y": 0,
		"N": 0
	},
	{
		"Q": "What is the Angular Compiler, and how can it be customized to optimize application performance? ",
		"A": "The Angular Compiler transforms Angular templates and components into efficient JavaScript code. Customizing the compiler allows for tree-shaking unused code, AOT compilation for faster rendering, and build optimizations, resulting in improved application performance and reduced bundle sizes. (Source: Angular Compiler Documentation)",
		"tag": "Angular",
		"Y": 0,
		"N": 0
	}
]