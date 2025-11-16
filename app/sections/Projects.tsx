"use client";

import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { ProjectCard } from "@/components/project/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
	const { t } = useTranslation();
	return (
		<section
			id="projects"
			className="relative bg-gradient-to-br from-rose-50 via-white to-cyan-50 py-12 sm:py-16 md:py-20 xl:py-24 2xl:py-28"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:max-w-[1400px] 2xl:max-w-[1600px]">
				<motion.div
					className="mb-10 text-center sm:mb-12 md:mb-14 xl:mb-16 2xl:mb-20"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5, ease: "easeOut" }}
				>
					<motion.h2
						className="mb-4 font-black text-3xl text-gray-900 leading-tight sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						{t("projects.title")}{" "}
						<span className="bg-gradient-to-r from-purple-600 via-cyan-600 to-rose-600 bg-clip-text text-transparent">
							{t("projects.subtitle")}
						</span>
					</motion.h2>
					<motion.p
						className="mx-auto max-w-2xl font-medium text-base text-gray-700 sm:text-lg md:text-xl xl:text-2xl"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						{t("projects.description")}
					</motion.p>
				</motion.div>

				<motion.div
					className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 xl:grid-cols-3 xl:gap-12 2xl:gap-14"
					layout
					transition={{ duration: 0.3 }}
				>
					{projects.map((project, index) => (
						<ProjectCard key={project.id} project={project} index={index} />
					))}
				</motion.div>
			</div>
		</section>
	);
}
