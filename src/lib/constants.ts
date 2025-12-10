export const PERSONAL_INFO = {
	name: 'Tom B.',
	fullName: 'TOM',
	title: 'Backend Engineer',
	description:
		'Backend Engineer specializing in Discord tooling, real-time communication platforms, and developer infrastructure.',
	tagline: 'Built with SvelteKit & SCSS'
} as const;

export const SEO = {
	siteName: 'Tom Bialecki | Portfolio',
	siteUrl: 'https://tombialecki.dev',
	defaultTitle: 'Tom Bialecki | Backend Engineer & Full-Stack Developer',
	defaultDescription:
		'Portfolio de Tom Bialecki - Backend Engineer spécialisé en Discord tooling, plateformes de communication temps réel et infrastructure développeur. Découvrez mes projets en Rust, TypeScript et Node.js.',
	defaultKeywords: [
		'Tom Bialecki',
		'Backend Engineer',
		'Full-Stack Developer',
		'Discord Bot',
		'TypeScript',
		'Rust',
		'Node.js',
		'SvelteKit',
		'Portfolio',
		'Développeur',
		'Web Developer'
	],
	author: 'Tom Bialecki',
	twitterHandle: '@AtsuLeVrai',
	locale: 'fr_FR',
	themeColor: '#22d3ee',
	ogImage: '/og-image.png',
	favicon: '/favicon.ico'
} as const;

export const CONTACT_INFO = {
	email: 'tom.bialecki2211@gmail.com',
	github: 'https://github.com/AtsuLeVrai',
	linkedin: 'https://linkedin.com/in/tom-bialecki-464a65270'
} as const;

export const SOCIAL_LINKS = [
	{
		name: 'GitHub',
		label: 'GitHub',
		href: 'https://github.com/AtsuLeVrai',
		hoverClass: 'github'
	},
	{
		name: 'LinkedIn',
		label: 'LinkedIn',
		href: 'https://linkedin.com/in/tom-bialecki-464a65270',
		hoverClass: 'linkedin'
	},
	{
		name: 'Email',
		label: 'Email',
		href: 'mailto:tom.bialecki2211@gmail.com',
		hoverClass: 'email'
	}
] as const;

export const HERO_STATS = {
	projects: '3',
	experience: '5+ Years'
} as const;

export const NAV_LINKS = [
	{ label: 'About', href: '#about' },
	{ label: 'Projects', href: '#projects' },
	{ label: 'Experience', href: '#experience' },
	{ label: 'Contact', href: '#contact' }
] as const;

export const ANCHORS = {
	HERO: '#hero',
	ABOUT: '#about',
	PROJECTS: '#projects',
	EXPERIENCE: '#experience',
	CONTACT: '#contact'
} as const;

export const EXPERIENCES = [
	{
		id: 'web-development-freelance',
		title: 'Web Development Freelance',
		company: 'Freelance',
		period: '2024 - Present',
		description: [
			'Created custom web solutions for individuals and small businesses',
			'Full project management with complete autonomy from conception to delivery'
		],
		technologies: ['TypeScript', 'Next.js', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS']
	},
	{
		id: 'nyxo-js-library',
		title: 'Nyxo.js - JavaScript Library',
		company: 'Open Source Project',
		period: '2024',
		description: [
			'Built an optimized alternative to Discord.js focused on performance and API quality',
			'Implemented advanced memory management and CPU/RAM optimization techniques'
		],
		technologies: [
			'TypeScript',
			'Node.js',
			'Discord API',
			'Performance Optimization',
			'Documentation',
			'Testing'
		]
	},
	{
		id: 'it-internship-mairie',
		title: 'IT Service Internship',
		company: 'Mairie de Saint-Saulve',
		period: '2023',
		description: [
			'Maintained computer equipment and managed IT infrastructure',
			'Provided technical support to staff and troubleshot hardware/software issues'
		],
		technologies: ['Windows', 'Hardware Maintenance', 'Network Administration', 'Technical Support']
	}
] as const;

export const PROJECTS = [
	{
		id: 'zen',
		title: 'Zen',
		shortDescription:
			'Free multipurpose Discord bot built with Rust - replacing expensive premium bots',
		longDescription:
			'A professional, open-source Discord bot combining the best features from premium bots (MEE6, Dyno, Xenon) into one powerful, free solution. Features moderation, leveling, tickets, giveaways, raid protection, logging, and more.',
		tags: ['Rust', 'Serenity', 'Discord', 'Tokio', 'Async'],
		gradient: 'orange-red',
		icon: 'bot',
		githubUrl: 'https://github.com/AtsuLeVrai/zen',
		featured: true,
		metrics: [
			{ label: 'Language', value: 'Rust' },
			{ label: 'Commands', value: '150+' },
			{ label: 'Status', value: 'Developing' }
		]
	},
	{
		id: 'vox',
		title: 'Vox',
		shortDescription:
			'Modern real-time communication platform inspired by Discord, built with Next.js',
		longDescription:
			'A lightweight Discord-inspired chat application demonstrating modern full-stack development. Features real-time messaging via WebSockets, channel management, authentication, and persistent message history. Built with Next.js 15, Hono, Prisma, and PostgreSQL.',
		tags: ['Next.js', 'TypeScript', 'Hono', 'Prisma', 'PostgreSQL', 'WebSocket', 'Tailwind'],
		gradient: 'blue-purple',
		icon: 'message',
		githubUrl: 'https://github.com/AtsuLeVrai/vox',
		featured: true,
		metrics: [
			{ label: 'Framework', value: 'Next.js 15' },
			{ label: 'Real-time', value: 'WebSocket' },
			{ label: 'DB', value: 'PostgreSQL' }
		]
	},
	{
		id: 'nyxo',
		title: 'Nyxo.js',
		shortDescription:
			'Modern TypeScript framework for building Discord bots - Discord.js reimagined',
		longDescription:
			'A modern JavaScript/TypeScript framework for building Discord bots with improved developer experience. Features a clean API, full TypeScript support, and modern async patterns. Built to be faster and more intuitive than existing solutions.',
		tags: ['TypeScript', 'Discord', 'Node.js', 'Library', 'Framework'],
		gradient: 'yellow-orange',
		icon: 'code',
		githubUrl: 'https://github.com/AtsuLeVrai/nyxo.js',
		featured: true,
		metrics: [
			{ label: 'Type', value: 'Framework' },
			{ label: 'License', value: 'Apache2.0' },
			{ label: 'Status', value: 'Developing' }
		]
	}
] as const;
