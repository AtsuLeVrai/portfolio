import {
	Gamepad2,
	type LucideIcon,
	Minus,
	Plus,
	Server,
	TrendingUp,
	X,
} from "lucide-react";

export const ANIMATION_VARIANTS = {
	container: {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.2,
			},
		},
	},
	item: {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.7,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
	},
	card: {
		hidden: { opacity: 0, scale: 0.95, y: 20 },
		visible: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
	},
} as const;

export interface SkillTooltip {
	title: string;
	description: string;
	tech: readonly string[];
}

export interface SkillTagProps {
	text: string;
	subtext: string;
	bg: string;
	border: string;
	icon: LucideIcon;
	tooltip: SkillTooltip;
}

export const SKILL_TAGS: readonly SkillTagProps[] = [
	{
		text: "Trading",
		subtext: "Systems",
		bg: "bg-cyan-200",
		border: "border-cyan-400",
		icon: TrendingUp,
		tooltip: {
			title: "High-Frequency Trading",
			description:
				"Real-time market data processing, algorithmic trading strategies, and microsecond latency optimization.",
			tech: ["Rust", "WebSockets", "Redis", "PostgreSQL"],
		},
	},
	{
		text: "Game",
		subtext: "Backends",
		bg: "bg-rose-200",
		border: "border-rose-400",
		icon: Gamepad2,
		tooltip: {
			title: "Multiplayer Architecture",
			description:
				"Scalable game servers, player matchmaking, real-time synchronization, and anti-cheat systems.",
			tech: ["Node.js", "Socket.IO", "MongoDB", "Docker"],
		},
	},
	{
		text: "Scalable",
		subtext: "APIs",
		bg: "bg-gray-200",
		border: "border-gray-400",
		icon: Server,
		tooltip: {
			title: "Enterprise Solutions",
			description:
				"High-throughput APIs, microservices architecture, load balancing, and distributed systems.",
			tech: ["Go", "Kubernetes", "gRPC", "Apache Kafka"],
		},
	},
] as const;

export interface WindowControlProps {
	type: "close" | "minimize" | "maximize";
	color: "rose" | "yellow" | "green";
	icon: LucideIcon;
}

export const WINDOW_CONTROLS: readonly WindowControlProps[] = [
	{ type: "close", color: "rose", icon: X },
	{ type: "minimize", color: "yellow", icon: Minus },
	{ type: "maximize", color: "green", icon: Plus },
] as const;

export const MOTION_CONFIG = {
	buttonHover: {
		y: -3,
		boxShadow: "8px 8px 0px 0px rgba(17,24,39,1)",
		transition: { duration: 0.2 },
	},
	buttonTap: {
		y: 0,
		boxShadow: "3px 3px 0px 0px rgba(17,24,39,1)",
		transition: { duration: 0.1 },
	},
	iconPulse: {
		rotate: [0, 10, -10, 0],
		scale: [1, 1.1, 1],
	},
	iconTransition: {
		duration: 3,
		repeat: Number.POSITIVE_INFINITY,
		ease: "easeInOut",
	},
} as const;
