import { Github, Linkedin, Mail } from "lucide-react";

export const PERSONAL_INFO = {
	name: "Tom B.",
	fullName: "TOM",
	title: "Backend Engineer & Infrastructure Developer",
	description:
		"Backend Engineer specializing in Discord tooling, real-time communication platforms, and developer infrastructure.",
	tagline: "Built with Next.js & ❤️",
} as const;

export const CONTACT_INFO = {
	email: "tom.bialecki2211@gmail.com",
	github: "https://github.com/AtsuLeVrai",
	linkedin: "https://linkedin.com/in/tom-bialecki-464a65270",
} as const;

export const SOCIAL_LINKS = [
	{
		name: "GitHub",
		label: "GitHub",
		icon: Github,
		href: CONTACT_INFO.github,
		color: "hover:bg-gray-900 hover:text-white",
		bgColor: "bg-gray-900 hover:bg-gray-800",
	},
	{
		name: "LinkedIn",
		label: "LinkedIn",
		icon: Linkedin,
		href: CONTACT_INFO.linkedin,
		color: "hover:bg-blue-600 hover:text-white",
		bgColor: "bg-blue-600 hover:bg-blue-700",
	},
	{
		name: "Email",
		label: "Email",
		icon: Mail,
		href: `mailto:${CONTACT_INFO.email}`,
		color: "hover:bg-cyan-500 hover:text-white",
		bgColor: "bg-rose-500 hover:bg-rose-600",
	},
] as const;

export const HERO_STATS = {
	projects: "3",
	experience: "5+ Years",
} as const;

export const DYNAMIC_TEXTS = [
	"Discord bots",
	"real-time platforms",
	"developer tools",
	"scalable APIs",
] as const;

export const NAV_LINKS = [
	{ label: "About", href: "#about" },
	{ label: "Projects", href: "#projects" },
	{ label: "Experience", href: "#experience" },
	{ label: "Veille", href: "/veille/cryptographie-post-quantique" },
	{ label: "Contact", href: "#contact" },
] as const;

// Navigation anchors
export const ANCHORS = {
	HERO: "#hero",
	ABOUT: "#about",
	PROJECTS: "#projects",
	EXPERIENCE: "#experience",
	CONTACT: "#contact",
} as const;

// Form validation
export const FORM_LIMITS = {
	NAME_MAX: 100,
	EMAIL_MAX: 254,
	MESSAGE_MAX: 5000,
} as const;

// Animation durations
export const ANIMATION = {
	FAST: 0.2,
	NORMAL: 0.3,
	SLOW: 0.5,
	VERY_SLOW: 0.8,
} as const;
