"use client";

import { motion } from "motion/react";
import { ProjectCard } from "@/components/project/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
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

				<motion.div
					className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-10 2xl:grid-cols-4 2xl:gap-12"
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
