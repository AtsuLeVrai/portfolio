"use client";

import { Briefcase, Calendar } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { useExperiences } from "@/hooks/useExperiences";
import type { ExperienceItem } from "@/types";

function ExperienceCard({
	experience,
	index,
}: {
	experience: ExperienceItem;
	index: number;
}) {
	return (
		<motion.div
			className="group relative overflow-hidden rounded-2xl border-2 border-gray-900 bg-white p-5 shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] transition-all sm:p-6 xl:p-7"
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			whileHover={{
				y: -4,
				boxShadow: "8px 8px 0px 0px rgba(17,24,39,1)",
				transition: { duration: 0.2 },
			}}
		>
			{/* Gradient accent */}
			<div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-cyan-400 via-purple-400 to-rose-400" />

			{/* Header */}
			<div className="mb-4">
				<div className="mb-2 flex items-start justify-between gap-3">
					<h3 className="font-black text-gray-900 text-lg leading-tight sm:text-xl xl:text-2xl">
						{experience.title}
					</h3>
					<Briefcase className="h-5 w-5 flex-shrink-0 text-cyan-600 sm:h-6 sm:w-6" />
				</div>
				<p className="mb-2 font-bold text-base text-cyan-600 sm:text-lg">
					{experience.company}
				</p>
				<div className="flex items-center gap-2 text-gray-600">
					<Calendar className="h-4 w-4" />
					<span className="font-semibold text-xs sm:text-sm">
						{experience.period}
					</span>
				</div>
			</div>

			{/* Description - Only show first 2 items */}
			<ul className="mb-4 space-y-1.5">
				{experience.description.slice(0, 2).map((item) => (
					<li
						key={item}
						className="flex items-start gap-2 font-medium text-gray-700 text-xs leading-relaxed sm:text-sm"
					>
						<span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-cyan-600 to-rose-600" />
						<span>{item}</span>
					</li>
				))}
			</ul>

			{/* Technologies - Show max 4 */}
			<div className="flex flex-wrap gap-1.5 sm:gap-2">
				{experience.technologies.slice(0, 4).map((tech) => (
					<span
						key={tech}
						className="rounded-full border-2 border-gray-900 bg-gradient-to-r from-cyan-50 to-rose-50 px-2.5 py-1 font-bold text-[10px] text-gray-900 sm:text-xs"
					>
						{tech}
					</span>
				))}
				{experience.technologies.length > 4 && (
					<span className="rounded-full border-2 border-gray-900 bg-gray-200 px-2.5 py-1 font-bold text-[10px] text-gray-700 sm:text-xs">
						+{experience.technologies.length - 4}
					</span>
				)}
			</div>
		</motion.div>
	);
}

export function Experience() {
	const { t } = useTranslation();
	const experiences = useExperiences();

	return (
		<section
			id="experience"
			className="relative bg-white py-12 sm:py-14 md:py-16 xl:py-20"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:max-w-[1400px] 2xl:max-w-[1600px]">
				{/* Section Header */}
				<motion.div
					className="mb-8 text-center sm:mb-10 md:mb-12 xl:mb-14"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<motion.h2
						className="mb-4 font-black text-3xl text-gray-900 leading-tight sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						{t("experience.title")}{" "}
						<span className="bg-gradient-to-r from-cyan-600 to-rose-600 bg-clip-text text-transparent">
							{t("experience.subtitle")}
						</span>
					</motion.h2>
					<motion.p
						className="mx-auto max-w-2xl font-medium text-base text-gray-700 sm:text-lg md:text-xl xl:text-2xl"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						{t("experience.description")}
					</motion.p>
				</motion.div>

				{/* Experience Cards */}
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:gap-10">
					{experiences.map((experience, index) => (
						<ExperienceCard
							key={experience.id}
							experience={experience}
							index={index}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
