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
	{ label: "Contact", href: "#contact" },
] as const;
