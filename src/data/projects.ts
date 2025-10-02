export interface Project {
	id: string;
	title: string;
	shortDescription: string;
	longDescription: string;
	category: "Trading" | "Game" | "API" | "Other";
	tags: string[];
	image: string;
	githubUrl?: string;
	demoUrl?: string;
	featured: boolean;
	metrics?: {
		label: string;
		value: string;
	}[];
}

export const projects: Project[] = [
	{
		id: "hft-platform",
		title: "High-Frequency Trading Platform",
		shortDescription:
			"Real-time market data processing with microsecond latency",
		longDescription:
			"Built a distributed trading platform capable of processing 100k+ market updates per second with sub-millisecond latency. Implemented custom WebSocket handlers, in-memory caching strategies, and asynchronous order execution pipelines.",
		category: "Trading",
		tags: ["Rust", "WebSocket", "Redis", "PostgreSQL", "Apache Kafka"],
		image: "https://placehold.co/600x400/0891b2/ffffff?text=HFT+Platform",
		githubUrl: "https://github.com/tombdev/hft-platform",
		featured: true,
		metrics: [
			{ label: "Latency", value: "<1ms" },
			{ label: "Throughput", value: "100k req/s" },
			{ label: "Uptime", value: "99.99%" },
		],
	},
	{
		id: "crypto-arbitrage",
		title: "Crypto Arbitrage Bot",
		shortDescription: "Multi-exchange arbitrage detection and execution system",
		longDescription:
			"Automated cryptocurrency arbitrage bot monitoring 15+ exchanges simultaneously. Detects price discrepancies and executes trades within milliseconds. Features risk management, slippage protection, and comprehensive analytics dashboard.",
		category: "Trading",
		tags: ["Go", "WebSocket", "MongoDB", "Docker", "Kubernetes"],
		image: "https://placehold.co/600x400/f43f5e/ffffff?text=Crypto+Arbitrage",
		githubUrl: "https://github.com/tombdev/crypto-arbitrage",
		featured: true,
		metrics: [
			{ label: "Exchanges", value: "15+" },
			{ label: "Profit Margin", value: "0.3-2%" },
			{ label: "Trades/Day", value: "500+" },
		],
	},
	{
		id: "multiplayer-fps",
		title: "Multiplayer FPS Game Backend",
		shortDescription: "Scalable game server for 64-player matches",
		longDescription:
			"Developed authoritative game server architecture supporting up to 64 concurrent players per instance. Implemented client-side prediction, server reconciliation, lag compensation, and anti-cheat systems. Designed for horizontal scalability with matchmaking service.",
		category: "Game",
		tags: ["Node.js", "Socket.IO", "Redis", "Docker", "AWS"],
		image: "https://placehold.co/600x400/06b6d4/ffffff?text=FPS+Backend",
		githubUrl: "https://github.com/tombdev/multiplayer-fps",
		featured: true,
		metrics: [
			{ label: "Players", value: "64/server" },
			{ label: "Tick Rate", value: "64 Hz" },
			{ label: "Avg Latency", value: "35ms" },
		],
	},
	{
		id: "mmorpg-inventory",
		title: "MMORPG Inventory System",
		shortDescription:
			"Real-time inventory and trading system for thousands of players",
		longDescription:
			"Designed and implemented a distributed inventory management system handling complex item properties, crafting mechanics, and player-to-player trading. Features include item durability, enchantments, stackable items, and auction house integration.",
		category: "Game",
		tags: ["Rust", "PostgreSQL", "Redis", "gRPC", "Kubernetes"],
		image: "https://placehold.co/600x400/fb923c/ffffff?text=MMORPG+Inventory",
		githubUrl: "https://github.com/tombdev/mmorpg-inventory",
		featured: false,
		metrics: [
			{ label: "Concurrent Users", value: "10k+" },
			{ label: "Items/Player", value: "1000+" },
			{ label: "Trades/Day", value: "50k+" },
		],
	},
	{
		id: "api-gateway",
		title: "Enterprise API Gateway",
		shortDescription: "High-performance API gateway with rate limiting",
		longDescription:
			"Built a robust API gateway serving 500M+ requests/day with intelligent routing, rate limiting, authentication, caching, and circuit breaking. Includes comprehensive monitoring, analytics, and developer portal for API documentation.",
		category: "API",
		tags: ["Go", "Nginx", "Redis", "Prometheus", "Grafana"],
		image: "https://placehold.co/600x400/a855f7/ffffff?text=API+Gateway",
		githubUrl: "https://github.com/tombdev/api-gateway",
		featured: true,
		metrics: [
			{ label: "Requests/Day", value: "500M+" },
			{ label: "Response Time", value: "12ms p99" },
			{ label: "Availability", value: "99.95%" },
		],
	},
	{
		id: "streaming-pipeline",
		title: "Real-Time Data Streaming Pipeline",
		shortDescription: "Scalable event processing system",
		longDescription:
			"Engineered a real-time data pipeline processing millions of events per minute. Implemented stream processing with Apache Kafka, data transformation, aggregation, and storage in data warehouse for analytics.",
		category: "API",
		tags: ["Rust", "Apache Kafka", "ClickHouse", "Docker", "Kubernetes"],
		image: "https://placehold.co/600x400/22c55e/ffffff?text=Data+Pipeline",
		githubUrl: "https://github.com/tombdev/streaming-pipeline",
		featured: false,
		metrics: [
			{ label: "Events/Min", value: "5M+" },
			{ label: "Latency", value: "<100ms" },
			{ label: "Data Storage", value: "10TB+" },
		],
	},
];

export const getFeaturedProjects = () =>
	projects.filter((project) => project.featured);

export const getProjectsByCategory = (category: Project["category"]) =>
	projects.filter((project) => project.category === category);
