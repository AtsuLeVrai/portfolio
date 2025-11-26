import type { LucideIcon } from "lucide-react";

export interface ProjectMetric {
	label: string;
	value: string;
}

export interface Project {
	id: string;
	title: string;
	shortDescription: string;
	longDescription: string;
	tags: readonly string[];
	gradient: string;
	icon: "Bot" | "MessageSquare" | "Code";
	githubUrl?: string;
	liveUrl?: string;
	featured?: boolean;
	metrics?: readonly ProjectMetric[];
}

export interface SocialLink {
	name: string;
	label: string;
	icon: LucideIcon;
	href: string;
	color: string;
	bgColor: string;
}

export interface NavLink {
	label: string;
	href: string;
}

export interface ExperienceItem {
	id: string;
	title: string;
	company: string;
	period: string;
	description: string[];
	technologies: string[];
}

export type FormStatus = "idle" | "submitting" | "success" | "error";

export interface ContactFormData {
	name: string;
	email: string;
	message: string;
}
