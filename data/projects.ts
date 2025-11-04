export const projects = [
	{
		id: "zen",
		title: "Zen",
		shortDescription:
			"Free multipurpose Discord bot built with Rust - replacing expensive premium bots",
		longDescription:
			"A professional, open-source Discord bot combining the best features from premium bots (MEE6, Dyno, Xenon) into one powerful, free solution. Features moderation, leveling, tickets, giveaways, raid protection, logging, and more.",
		tags: ["Rust", "Serenity", "Discord", "Tokio", "Async"],
		image: "https://placehold.co/600x400/CE412B/white?text=Zen",
		githubUrl: "https://github.com/AtsuLeVrai/zen",
		featured: true,
		metrics: [
			{ label: "Language", value: "Rust" },
			{ label: "Commands", value: "50+" },
			{ label: "Status", value: "Active" },
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
		image: "https://placehold.co/600x400/3178C6/white?text=Vox",
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
		tags: ["TypeScript", "Discord", "Node.js", "Framework", "Library"],
		image: "https://placehold.co/600x400/F7DF1E/black?text=Nyxo.js",
		githubUrl: "https://github.com/AtsuLeVrai/nyxo.js",
		featured: true,
		metrics: [
			{ label: "Type", value: "Framework" },
			{ label: "License", value: "Apache 2.0" },
			{ label: "Status", value: "Active Dev" },
		],
	},
] as const;
