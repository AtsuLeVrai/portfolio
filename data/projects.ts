import type { Project } from "@/types";

export const projects: readonly Project[] = [
	{
		id: "zen",
		title: "Zen",
		shortDescription:
			"Free multipurpose Discord bot built with Rust - replacing expensive premium bots",
		longDescription:
			"A professional, open-source Discord bot combining the best features from premium bots (MEE6, Dyno, Xenon) into one powerful, free solution. Features moderation, leveling, tickets, giveaways, raid protection, logging, and more.",
		tags: ["Rust", "Serenity", "Discord", "Tokio", "Async"],
		gradient: "from-orange-400 via-red-500 to-pink-500",
		icon: "Bot",
		githubUrl: "https://github.com/AtsuLeVrai/zen",
		featured: true,
		metrics: [
			{ label: "Language", value: "Rust" },
			{ label: "Commands", value: "150+" },
			{ label: "Status", value: "Developing" },
		],
	},
	{
		id: "vox",
		title: "Vox",
		shortDescription:
			"Modern real-time communication platform inspired by Discord, built with Next.js",
		longDescription:
			"A lightweight Discord-inspired chat application demonstrating modern full-stack development. Features real-time messaging via WebSockets, channel management, authentication, and persistent message history. Built with Next.js 15, Hono, Prisma, and PostgreSQL.",
		tags: [
			"Next.js",
			"TypeScript",
			"Hono",
			"Prisma",
			"PostgreSQL",
			"WebSocket",
			"Tailwind",
		],
		gradient: "from-blue-400 via-indigo-500 to-purple-500",
		icon: "MessageSquare",
		githubUrl: "https://github.com/AtsuLeVrai/vox",
		featured: true,
		metrics: [
			{ label: "Framework", value: "Next.js 15" },
			{ label: "Real-time", value: "WebSocket" },
			{ label: "DB", value: "PostgreSQL" },
		],
	},
	{
		id: "nyxo",
		title: "Nyxo.js",
		shortDescription:
			"Modern TypeScript framework for building Discord bots - Discord.js reimagined",
		longDescription:
			"A modern JavaScript/TypeScript framework for building Discord bots with improved developer experience. Features a clean API, full TypeScript support, and modern async patterns. Built to be faster and more intuitive than existing solutions.",
		tags: ["TypeScript", "Discord", "Node.js", "Library", "Framework"],
		gradient: "from-yellow-400 via-amber-500 to-orange-500",
		icon: "Code",
		githubUrl: "https://github.com/AtsuLeVrai/nyxo.js",
		featured: true,
		metrics: [
			{ label: "Type", value: "Framework" },
			{ label: "License", value: "Apache2.0" },
			{ label: "Status", value: "Developing" },
		],
	},
] as const;
