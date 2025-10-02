export interface Skill {
	name: string;
	category: "Backend" | "Database" | "DevOps" | "Tools" | "Soft";
	level?: number;
}

export const skills: Skill[] = [
	// Backend Technologies
	{ name: "Rust", category: "Backend", level: 95 },
	{ name: "Go", category: "Backend", level: 90 },
	{ name: "Node.js", category: "Backend", level: 92 },
	{ name: "TypeScript", category: "Backend", level: 88 },
	{ name: "Python", category: "Backend", level: 85 },
	{ name: "C++", category: "Backend", level: 75 },

	// Databases
	{ name: "PostgreSQL", category: "Database", level: 92 },
	{ name: "Redis", category: "Database", level: 90 },
	{ name: "MongoDB", category: "Database", level: 85 },
	{ name: "ClickHouse", category: "Database", level: 80 },
	{ name: "Cassandra", category: "Database", level: 75 },

	// DevOps & Tools
	{ name: "Docker", category: "DevOps", level: 95 },
	{ name: "Kubernetes", category: "DevOps", level: 88 },
	{ name: "AWS", category: "DevOps", level: 85 },
	{ name: "Apache Kafka", category: "DevOps", level: 90 },
	{ name: "gRPC", category: "DevOps", level: 87 },
	{ name: "Nginx", category: "DevOps", level: 82 },
	{ name: "Terraform", category: "DevOps", level: 78 },

	// Tools
	{ name: "Git", category: "Tools", level: 95 },
	{ name: "Linux", category: "Tools", level: 92 },
	{ name: "WebSocket", category: "Tools", level: 93 },
	{ name: "GraphQL", category: "Tools", level: 85 },
	{ name: "Socket.IO", category: "Tools", level: 90 },
	{ name: "Prometheus", category: "Tools", level: 83 },
	{ name: "Grafana", category: "Tools", level: 80 },

	// Soft Skills
	{ name: "System Design", category: "Soft" },
	{ name: "Microservices", category: "Soft" },
	{ name: "Performance Optimization", category: "Soft" },
	{ name: "Code Review", category: "Soft" },
	{ name: "Team Leadership", category: "Soft" },
	{ name: "Problem Solving", category: "Soft" },
];

export const getSkillsByCategory = (category: Skill["category"]) =>
	skills.filter((skill) => skill.category === category);

export const getCoreSkills = () =>
	skills.filter((skill) => skill.level && skill.level >= 90);
