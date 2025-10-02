"use client";

import { motion } from "motion/react";
import { memo, useId, useState } from "react";
import { ProjectCard } from "@/components/project/ProjectCard";
import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";

type FilterCategory = "All" | Project["category"];

const FILTER_CATEGORIES: FilterCategory[] = ["All", "Trading", "Game", "API"];

export const Projects = memo(() => {
	const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");

	const filteredProjects =
		activeFilter === "All"
			? projects
			: projects.filter((project) => project.category === activeFilter);

	return (
		<section
			id={useId()}
			className="relative bg-gradient-to-br from-rose-50 via-white to-cyan-50 py-12 sm:py-16 md:py-20 xl:py-24 2xl:py-28"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:max-w-[1400px] 2xl:max-w-[1600px]">
				{/* Section Header */}
				<motion.div
					className="mb-10 text-center sm:mb-12 md:mb-14 xl:mb-16 2xl:mb-20"
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
						MY{" "}
						<span className="bg-gradient-to-r from-cyan-600 to-rose-600 bg-clip-text text-transparent">
							PROJECTS
						</span>
					</motion.h2>
					<motion.p
						className="mx-auto max-w-2xl font-medium text-base text-gray-700 sm:text-lg md:text-xl xl:text-2xl"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						Scalable systems, trading platforms, and game backends built with
						precision
					</motion.p>
				</motion.div>

				{/* Filter Buttons */}
				<motion.div
					className="mb-10 flex flex-wrap justify-center gap-3 sm:mb-12 sm:gap-4 md:mb-14 xl:mb-16 xl:gap-5"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.3 }}
				>
					{FILTER_CATEGORIES.map((category) => (
						<motion.button
							key={category}
							onClick={() => setActiveFilter(category)}
							className={`rounded-full border-2 border-gray-900 px-4 py-2 font-bold text-sm shadow-[3px_3px_0px_0px_rgba(17,24,39,1)] transition-all sm:px-6 sm:text-base xl:px-8 xl:py-3 xl:text-lg ${
								activeFilter === category
									? "bg-cyan-400 text-gray-900"
									: "bg-white text-gray-700 hover:bg-gray-50"
							}`}
							whileHover={{
								y: -2,
								boxShadow: "6px 6px 0px 0px rgba(17,24,39,1)",
							}}
							whileTap={{ y: 0, boxShadow: "2px 2px 0px 0px rgba(17,24,39,1)" }}
						>
							{category}
						</motion.button>
					))}
				</motion.div>

				{/* Projects Grid */}
				<motion.div
					className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-10 2xl:grid-cols-4 2xl:gap-12"
					layout
					transition={{ duration: 0.3 }}
				>
					{filteredProjects.map((project, index) => (
						<ProjectCard key={project.id} project={project} index={index} />
					))}
				</motion.div>

				{/* Empty State */}
				{filteredProjects.length === 0 && (
					<motion.div
						className="py-20 text-center"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3 }}
					>
						<p className="font-bold text-gray-600 text-lg sm:text-xl xl:text-2xl">
							No projects found in this category
						</p>
					</motion.div>
				)}
			</div>
		</section>
	);
});

Projects.displayName = "Projects";
