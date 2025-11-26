"use client";

import { useTranslation } from "react-i18next";
import type { ExperienceItem } from "@/types";

export function useExperiences(): ExperienceItem[] {
	const { t } = useTranslation();

	return [
		{
			id: "web-development-freelance",
			title: t("experience.freelance.title"),
			company: t("experience.freelance.company"),
			period: t("experience.freelance.period"),
			description: [
				t("experience.freelance.description1"),
				t("experience.freelance.description2"),
			],
			technologies: [
				"TypeScript",
				"Next.js",
				"React",
				"Node.js",
				"PostgreSQL",
				"Tailwind CSS",
			],
		},
		{
			id: "nyxo-js-library",
			title: t("experience.nyxo.title"),
			company: t("experience.nyxo.company"),
			period: t("experience.nyxo.period"),
			description: [
				t("experience.nyxo.description1"),
				t("experience.nyxo.description2"),
			],
			technologies: [
				"TypeScript",
				"Node.js",
				"Discord API",
				"Performance Optimization",
				"Documentation",
				"Testing",
			],
		},
		{
			id: "it-internship-mairie",
			title: t("experience.mairie.title"),
			company: t("experience.mairie.company"),
			period: t("experience.mairie.period"),
			description: [
				t("experience.mairie.description1"),
				t("experience.mairie.description2"),
			],
			technologies: [
				"Windows",
				"Hardware Maintenance",
				"Network Administration",
				"Technical Support",
				"IT Infrastructure",
				"System Management",
			],
		},
	];
}
