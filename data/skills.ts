import type { LucideIcon } from "lucide-react";
import {
	Box,
	Boxes,
	Brain,
	Cloud,
	Code2,
	Container,
	Database,
	FileCode,
	Gauge,
	GitBranch,
	Globe,
	Layers,
	Network,
	Package,
	Search,
	Server,
	Settings,
	Shield,
	Terminal,
	Workflow,
	Zap,
} from "lucide-react";

export interface Skill {
	name: string;
	category: "Backend" | "Database" | "DevOps" | "Tools" | "Soft";
	icon: LucideIcon;
	color: string;
}

export const skills: Skill[] = [
	{ name: "Rust", category: "Backend", icon: Settings, color: "#CE412B" },
	{ name: "Go", category: "Backend", icon: Code2, color: "#00ADD8" },
	{ name: "Node.js", category: "Backend", icon: Server, color: "#339933" },
	{ name: "TypeScript", category: "Backend", icon: FileCode, color: "#3178C6" },
	{ name: "Python", category: "Backend", icon: Terminal, color: "#3776AB" },
	{ name: "C++", category: "Backend", icon: Code2, color: "#00599C" },
	{
		name: "PostgreSQL",
		category: "Database",
		icon: Database,
		color: "#4169E1",
	},
	{ name: "Redis", category: "Database", icon: Zap, color: "#DC382D" },
	{ name: "MongoDB", category: "Database", icon: Database, color: "#47A248" },
	{
		name: "ClickHouse",
		category: "Database",
		icon: Database,
		color: "#FFCC01",
	},
	{ name: "Cassandra", category: "Database", icon: Database, color: "#1287B1" },
	{ name: "Docker", category: "DevOps", icon: Container, color: "#2496ED" },
	{ name: "Kubernetes", category: "DevOps", icon: Boxes, color: "#326CE5" },
	{ name: "AWS", category: "DevOps", icon: Cloud, color: "#FF9900" },
	{
		name: "Apache Kafka",
		category: "DevOps",
		icon: Workflow,
		color: "#231F20",
	},
	{ name: "gRPC", category: "DevOps", icon: Network, color: "#244c5a" },
	{ name: "Nginx", category: "DevOps", icon: Server, color: "#009639" },
	{ name: "Terraform", category: "DevOps", icon: Package, color: "#7B42BC" },
	{ name: "Git", category: "Tools", icon: GitBranch, color: "#F05032" },
	{ name: "Linux", category: "Tools", icon: Terminal, color: "#FCC624" },
	{ name: "WebSocket", category: "Tools", icon: Network, color: "#010101" },
	{ name: "GraphQL", category: "Tools", icon: Globe, color: "#E10098" },
	{ name: "Socket.IO", category: "Tools", icon: Network, color: "#010101" },
	{ name: "Prometheus", category: "Tools", icon: Gauge, color: "#E6522C" },
	{ name: "Grafana", category: "Tools", icon: Gauge, color: "#F46800" },
	{ name: "System Design", category: "Soft", icon: Layers, color: "#4A90E2" },
	{ name: "Microservices", category: "Soft", icon: Box, color: "#00D9FF" },
	{
		name: "Performance Optimization",
		category: "Soft",
		icon: Zap,
		color: "#FFD700",
	},
	{ name: "Code Review", category: "Soft", icon: Search, color: "#9B59B6" },
	{ name: "Team Leadership", category: "Soft", icon: Shield, color: "#E74C3C" },
	{ name: "Problem Solving", category: "Soft", icon: Brain, color: "#1ABC9C" },
];

export const getSkillsByCategory = (category: Skill["category"]) =>
	skills.filter((skill) => skill.category === category);
