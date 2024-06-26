interface Tag {
	tagName: string;
	tagCategory: string;
}

const duplicateTags: Tag[] = [
	{ tagName: "JavaScript", tagCategory: "technical-skills" },
	{ tagName: "Python", tagCategory: "technical-skills" },
	{ tagName: "React", tagCategory: "technical-skills" },
	{ tagName: "Node.js", tagCategory: "technical-skills" },
	{ tagName: "Git", tagCategory: "technical-skills" },
	{ tagName: "HTML/CSS", tagCategory: "technical-skills" },
	{ tagName: "Docker", tagCategory: "technical-skills" },
	{ tagName: "AWS", tagCategory: "technical-skills" },
	{ tagName: "SQL", tagCategory: "technical-skills" },
	{ tagName: "Java", tagCategory: "technical-skills" },
	{ tagName: "Vue.js", tagCategory: "technical-skills" },
	{ tagName: "Selenium", tagCategory: "technical-skills" },
	{ tagName: "Spring Boot", tagCategory: "technical-skills" },
	{ tagName: "Express.js", tagCategory: "technical-skills" },
	{ tagName: "Next.js", tagCategory: "technical-skills" },
	{ tagName: "Nuxt.js", tagCategory: "technical-skills" },
	{ tagName: "Gatsby", tagCategory: "technical-skills" },
	{ tagName: "Keras", tagCategory: "technical-skills" },
	{ tagName: "Pandas", tagCategory: "technical-skills" },
	{ tagName: "NumPy", tagCategory: "technical-skills" },
	{ tagName: "TensorFlow", tagCategory: "technical-skills" },
	{ tagName: "React Native", tagCategory: "technical-skills" },
	{ tagName: "GraphQL", tagCategory: "technical-skills" },
	{ tagName: "Webpack", tagCategory: "technical-skills" },
	{ tagName: "Gulp", tagCategory: "technical-skills" },
	{ tagName: "VSCode", tagCategory: "technical-skills" },
	{ tagName: "Eclipse", tagCategory: "technical-skills" },
	{ tagName: "IntelliJ IDEA", tagCategory: "technical-skills" },
	{ tagName: "PyCharm", tagCategory: "technical-skills" },
	{ tagName: "NetBeans", tagCategory: "technical-skills" },
	{ tagName: "WebStorm", tagCategory: "technical-skills" },
	{ tagName: "Emacs", tagCategory: "technical-skills" },
	{ tagName: "Vim", tagCategory: "technical-skills" },
	{ tagName: "Flask", tagCategory: "technical-skills" },
	{ tagName: "Ruby", tagCategory: "technical-skills" },
	{ tagName: "PHP", tagCategory: "technical-skills" },
	{ tagName: "Go", tagCategory: "technical-skills" },
	{ tagName: "Swift", tagCategory: "technical-skills" },
	{ tagName: "Angular", tagCategory: "technical-skills" },
	{ tagName: "Scala", tagCategory: "technical-skills" },
	{ tagName: "Kotlin", tagCategory: "technical-skills" },
	{ tagName: "MATLAB", tagCategory: "technical-skills" },
	{ tagName: "Perl", tagCategory: "technical-skills" },
	{ tagName: "R", tagCategory: "technical-skills" },
	{ tagName: "TypeScript", tagCategory: "technical-skills" },
	{ tagName: "C#", tagCategory: "technical-skills" },
	{ tagName: "C++", tagCategory: "technical-skills" },
	{ tagName: "SQLAlchemy", tagCategory: "technical-skills" },
	{ tagName: "Peewee", tagCategory: "technical-skills" },
	{ tagName: "Jest", tagCategory: "technical-skills" },
	{ tagName: "Mocha", tagCategory: "technical-skills" },
	{ tagName: "Chai", tagCategory: "technical-skills" },
	{ tagName: "Jasmine", tagCategory: "technical-skills" },
	{ tagName: "Karma", tagCategory: "technical-skills" },
	{ tagName: "Protractor", tagCategory: "technical-skills" },
	{ tagName: "Cypress", tagCategory: "technical-skills" },
	{ tagName: "Puppeteer", tagCategory: "technical-skills" },
	{ tagName: "Playwright", tagCategory: "technical-skills" },
	{ tagName: "Jupyter", tagCategory: "technical-skills" },
	{ tagName: "Android Studio", tagCategory: "technical-skills" },
	{ tagName: "Xcode", tagCategory: "technical-skills" },
	{ tagName: "MySQL", tagCategory: "technical-skills" },
	{ tagName: "PostgreSQL", tagCategory: "technical-skills" },
	{ tagName: "MongoDB", tagCategory: "technical-skills" },
	{ tagName: "Redux", tagCategory: "technical-skills" },
	{ tagName: "Firebase", tagCategory: "technical-skills" },
	{ tagName: "Redis", tagCategory: "technical-skills" },
	{ tagName: "Elasticsearch", tagCategory: "technical-skills" },
	{ tagName: "jQuery", tagCategory: "technical-skills" },
	{ tagName: "SASS/SCSS", tagCategory: "technical-skills" },
	{ tagName: "LESS", tagCategory: "technical-skills" },
	{ tagName: "Gradle", tagCategory: "technical-skills" },
	{ tagName: "Maven", tagCategory: "technical-skills" },
	{ tagName: "Apache Kafka", tagCategory: "technical-skills" },
	{ tagName: "RabbitMQ", tagCategory: "technical-skills" },
	{ tagName: "Nginx", tagCategory: "technical-skills" },
	{ tagName: "Hadoop", tagCategory: "technical-skills" },
	{ tagName: "Spark", tagCategory: "technical-skills" },
	{ tagName: "Hive", tagCategory: "technical-skills" },
	{ tagName: "Flink", tagCategory: "technical-skills" },
	{ tagName: "Caffe", tagCategory: "technical-skills" },
	{ tagName: "OpenCV", tagCategory: "technical-skills" },
	{ tagName: "NLTK", tagCategory: "technical-skills" },
	{ tagName: "spaCy", tagCategory: "technical-skills" },
	{ tagName: "Beautiful Soup", tagCategory: "technical-skills" },
	{ tagName: "Scrapy", tagCategory: "technical-skills" },
	{ tagName: "Requests", tagCategory: "technical-skills" },
	{ tagName: "FastAPI", tagCategory: "technical-skills" },
	{ tagName: "CherryPy", tagCategory: "technical-skills" },
	{ tagName: "Pyramid", tagCategory: "technical-skills" },
	{ tagName: "Data Structures", tagCategory: "problem-solving" },
	{ tagName: "Algorithms", tagCategory: "problem-solving" },
	{ tagName: "Dynamic Programming", tagCategory: "problem-solving" },
	{ tagName: "Sorting", tagCategory: "problem-solving" },
	{ tagName: "Recursion", tagCategory: "problem-solving" },
	{ tagName: "Graphs", tagCategory: "problem-solving" },
	{ tagName: "Big O Notation", tagCategory: "problem-solving" },
	{ tagName: "Hash Tables", tagCategory: "problem-solving" },
	{ tagName: "Binary Search", tagCategory: "problem-solving" },
	{ tagName: "Linked Lists", tagCategory: "problem-solving" },
	{ tagName: "Scalability", tagCategory: "system-design" },
	{ tagName: "Reliability", tagCategory: "system-design" },
	{ tagName: "Microservices", tagCategory: "system-design" },
	{ tagName: "Load Balancing", tagCategory: "system-design" },
	{ tagName: "Databases", tagCategory: "system-design" },
	{ tagName: "Caching", tagCategory: "system-design" },
	{ tagName: "Messaging Queues", tagCategory: "system-design" },
	{ tagName: "Design Patterns", tagCategory: "system-design" },
	{ tagName: "Fault Tolerance", tagCategory: "system-design" },
	{ tagName: "High Availability", tagCategory: "system-design" },
	{ tagName: "Teamwork", tagCategory: "behavioral" },
	{ tagName: "Communication", tagCategory: "behavioral" },
	{ tagName: "Leadership", tagCategory: "behavioral" },
	{ tagName: "Conflict Resolution", tagCategory: "behavioral" },
	{ tagName: "Problem-Solving", tagCategory: "behavioral" },
	{ tagName: "Adaptability", tagCategory: "behavioral" },
	{ tagName: "Time Management", tagCategory: "behavioral" },
	{ tagName: "Decision Making", tagCategory: "behavioral" },
	{ tagName: "Creativity", tagCategory: "behavioral" },
	{ tagName: "Stress Management", tagCategory: "behavioral" },
	{ tagName: "Agile Methodology", tagCategory: "practical-knowledge" },
	{ tagName: "Security Best Practices", tagCategory: "practical-knowledge" },
	{ tagName: "UX", tagCategory: "practical-knowledge" },
	{ tagName: "UI", tagCategory: "practical-knowledge" },
	{ tagName: "Data Visualization", tagCategory: "practical-knowledge" },
	{ tagName: "Compliance Standards", tagCategory: "practical-knowledge" },
	{ tagName: "Industry Regulations", tagCategory: "practical-knowledge" },
	{ tagName: "Version Control", tagCategory: "practical-knowledge" },
	{ tagName: "Deployment Strategies", tagCategory: "practical-knowledge" },
	{ tagName: "Testing Techniques", tagCategory: "practical-knowledge" },
	{ tagName: "Distributed Systems", tagCategory: "system-design" },
	{ tagName: "CAP Theorem", tagCategory: "system-design" },
	{ tagName: "Consistency Models", tagCategory: "system-design" },
	{ tagName: "Service Discovery", tagCategory: "system-design" },
	{ tagName: "API Gateway", tagCategory: "system-design" },
	{ tagName: "Service Mesh", tagCategory: "system-design" },
	{ tagName: "Rate Limiting", tagCategory: "system-design" },
	{ tagName: "Circuit Breaker Pattern", tagCategory: "system-design" },
	{ tagName: "Bulkhead Pattern", tagCategory: "system-design" },
	{ tagName: "Sharding", tagCategory: "system-design" },
	{ tagName: "Replication", tagCategory: "system-design" },
	{ tagName: "Leader Election", tagCategory: "system-design" },
	{ tagName: "Consensus Algorithms", tagCategory: "system-design" },
	{ tagName: "Paxos", tagCategory: "system-design" },
	{ tagName: "Raft", tagCategory: "system-design" },
	{ tagName: "Zookeeper", tagCategory: "system-design" },
	{ tagName: "Designing for Scalability", tagCategory: "system-design" },
	{ tagName: "Designing for Reliability", tagCategory: "system-design" },
	{ tagName: "Designing for Performance", tagCategory: "system-design" },
	{ tagName: "Designing for Maintainability", tagCategory: "system-design" },
	{ tagName: "Event-Driven Architecture", tagCategory: "system-design" },
	{ tagName: "CI/CD", tagCategory: "practical-knowledge" },
	{ tagName: "DevOps Practices", tagCategory: "practical-knowledge" },
	{ tagName: "Unit Testing", tagCategory: "practical-knowledge" },
	{ tagName: "Integration Testing", tagCategory: "practical-knowledge" },
	{ tagName: "End-to-End Testing", tagCategory: "practical-knowledge" },
	{ tagName: "Mocking Frameworks", tagCategory: "practical-knowledge" },
	{ tagName: "API Development", tagCategory: "practical-knowledge" },
	{ tagName: "Serverless Architecture", tagCategory: "practical-knowledge" },
	{ tagName: "OAuth", tagCategory: "practical-knowledge" },
	{ tagName: "JWT", tagCategory: "practical-knowledge" },
	{ tagName: "Single Sign-On (SSO)", tagCategory: "practical-knowledge" },
	{ tagName: "RESTful Services", tagCategory: "practical-knowledge" },
	{ tagName: "GraphQL", tagCategory: "practical-knowledge" },
	{ tagName: "WebSockets", tagCategory: "practical-knowledge" },
	{ tagName: "Progressive Web Apps (PWA)", tagCategory: "practical-knowledge" },
	{ tagName: "Containerization", tagCategory: "practical-knowledge" },
	{ tagName: "Virtualization", tagCategory: "practical-knowledge" },
	{
		tagName: "Infrastructure as Code (IaC)",
		tagCategory: "practical-knowledge",
	},
	{ tagName: "Cloud Services", tagCategory: "practical-knowledge" },
	{ tagName: "Monitoring and Logging", tagCategory: "practical-knowledge" },
	{ tagName: "Incident Management", tagCategory: "practical-knowledge" },
	{ tagName: "Backup and Recovery", tagCategory: "practical-knowledge" },
	{ tagName: "Disaster Recovery Planning", tagCategory: "practical-knowledge" },
	{
		tagName: "Content Delivery Networks (CDN)",
		tagCategory: "practical-knowledge",
	},
	{ tagName: "SEO Best Practices", tagCategory: "practical-knowledge" },
	{ tagName: "Performance Optimization", tagCategory: "practical-knowledge" },
	{ tagName: "Load Testing", tagCategory: "practical-knowledge" },
	{ tagName: "Penetration Testing", tagCategory: "practical-knowledge" },
	{ tagName: "Vulnerability Assessment", tagCategory: "practical-knowledge" },
	{ tagName: "Threat Modeling", tagCategory: "practical-knowledge" },
	{ tagName: "Code Review Practices", tagCategory: "practical-knowledge" },
	{ tagName: "Refactoring Techniques", tagCategory: "practical-knowledge" },
	{ tagName: "Pair Programming", tagCategory: "practical-knowledge" },
	{ tagName: "Continuous Integration", tagCategory: "practical-knowledge" },
	{ tagName: "Continuous Deployment", tagCategory: "practical-knowledge" },
	{ tagName: "Server Management", tagCategory: "practical-knowledge" },
	{ tagName: "Networking Basics", tagCategory: "practical-knowledge" },
	{ tagName: "Database Management", tagCategory: "practical-knowledge" },
	{ tagName: "SQL Optimization", tagCategory: "practical-knowledge" },
	{ tagName: "NoSQL Databases", tagCategory: "practical-knowledge" },
	{ tagName: "Data Warehousing", tagCategory: "practical-knowledge" },
	{ tagName: "ETL Processes", tagCategory: "practical-knowledge" },
	{ tagName: "Big Data Technologies", tagCategory: "practical-knowledge" },
	{ tagName: "Data Governance", tagCategory: "practical-knowledge" },
	{ tagName: "Data Privacy", tagCategory: "practical-knowledge" },
	{ tagName: "Ansible", tagCategory: "practical-knowledge" },
	{ tagName: "Chef", tagCategory: "practical-knowledge" },
	{ tagName: "Puppet", tagCategory: "practical-knowledge" },
	{ tagName: "SaltStack", tagCategory: "practical-knowledge" },
	{ tagName: "Version Control Systems", tagCategory: "practical-knowledge" },
	{ tagName: "Artifact Management", tagCategory: "practical-knowledge" },
	{ tagName: "Agile Development", tagCategory: "practical-knowledge" },
	{ tagName: "Scrum Framework", tagCategory: "practical-knowledge" },
	{ tagName: "Kanban Methodology", tagCategory: "practical-knowledge" },
	{
		tagName: "Command Query Responsibility Segregation (CQRS)",
		tagCategory: "system-design",
	},
	{ tagName: "Event Sourcing", tagCategory: "system-design" },
	{ tagName: "Data Partitioning", tagCategory: "system-design" },
	{ tagName: "Database Federation", tagCategory: "system-design" },
	{ tagName: "Read-Heavy System Design", tagCategory: "system-design" },
	{ tagName: "Write-Heavy System Design", tagCategory: "system-design" },
	{ tagName: "Batch Processing", tagCategory: "system-design" },
	{ tagName: "Stream Processing", tagCategory: "system-design" },
	{ tagName: "Time Series Data", tagCategory: "system-design" },
	{ tagName: "Blob Storage", tagCategory: "system-design" },
	{ tagName: "File Storage", tagCategory: "system-design" },
	{ tagName: "Object Storage", tagCategory: "system-design" },
	{ tagName: "API Rate Limiting", tagCategory: "system-design" },
	{ tagName: "Data Consistency", tagCategory: "system-design" },
	{ tagName: "Eventual Consistency", tagCategory: "system-design" },
	{ tagName: "Strong Consistency", tagCategory: "system-design" },
	{ tagName: "Microfrontend", tagCategory: "system-design" },
	{ tagName: "Polyglot Persistence", tagCategory: "system-design" },
	{ tagName: "Message Broker", tagCategory: "system-design" },
	{ tagName: "Push Notifications", tagCategory: "system-design" },
	{ tagName: "Logging and Monitoring", tagCategory: "system-design" },
	{ tagName: "Observability", tagCategory: "system-design" },
	{ tagName: "Tracing", tagCategory: "system-design" },
	{ tagName: "Metrics", tagCategory: "system-design" },
	{ tagName: "Alerting", tagCategory: "system-design" },
	{ tagName: "Service Level Agreement (SLA)", tagCategory: "system-design" },
	{ tagName: "Service Level Objective (SLO)", tagCategory: "system-design" },
	{ tagName: "Service Level Indicator (SLI)", tagCategory: "system-design" },
	{ tagName: "Horizontal Scaling", tagCategory: "system-design" },
	{ tagName: "Vertical Scaling", tagCategory: "system-design" },
	{ tagName: "Auto Scaling", tagCategory: "system-design" },
];

function removeDuplicates(arr: Tag[]) {
	return arr.filter((obj, pos, arr) => {
		return arr.map((mapObj) => mapObj.tagName).indexOf(obj.tagName) === pos;
	});
}

const tags = removeDuplicates(duplicateTags);

export default tags;
