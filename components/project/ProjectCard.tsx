"use client";

import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
	project: Project;
	index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
	return (
		<motion.div
			className="group relative overflow-hidden rounded-2xl border-2 border-gray-900 bg-white shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] transition-all duration-300 hover:shadow-[12px_12px_0px_0px_rgba(17,24,39,1)] md:border-3 xl:rounded-3xl xl:border-4"
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			whileHover={{ rotate: 1, y: -8 }}
		>
			{project.featured && (
				<div className="absolute top-3 right-3 z-10 rounded-full border-2 border-gray-900 bg-cyan-400 px-2 py-1 font-bold text-[10px] text-gray-900 shadow-sm sm:top-4 sm:right-4 sm:px-3 sm:text-xs xl:text-sm">
					FEATURED
				</div>
			)}

			<div className="relative h-40 overflow-hidden bg-gradient-to-br from-cyan-100 to-rose-100 sm:h-48 xl:h-56 2xl:h-64">
				<motion.img
					src={project.image}
					alt={project.title}
					className="h-full w-full object-cover"
					whileHover={{ scale: 1.1 }}
					transition={{ duration: 0.4 }}
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
			</div>

			<div className="p-4 sm:p-5 xl:p-6 2xl:p-8">
				<div className="mb-2 sm:mb-3">
					<span
						className={`inline-block rounded-full border-2 border-gray-900 px-2 py-1 font-bold text-[10px] sm:px-3 sm:text-xs xl:text-sm ${
							project.category === "Trading"
								? "bg-cyan-200 text-cyan-900"
								: project.category === "Game"
									? "bg-rose-200 text-rose-900"
									: "bg-gray-200 text-gray-900"
						}`}
					>
						{project.category.toUpperCase()}
					</span>
				</div>

				<h3 className="mb-2 font-black text-gray-900 text-lg leading-tight sm:text-xl xl:text-2xl 2xl:text-3xl">
					{project.title}
				</h3>

				<p className="mb-3 font-medium text-gray-600 text-sm leading-relaxed sm:mb-4 sm:text-base xl:text-lg">
					{project.shortDescription}
				</p>

				{project.metrics && project.metrics.length > 0 && (
					<div className="mb-3 grid grid-cols-2 gap-2 sm:mb-4 xl:grid-cols-3 xl:gap-3">
						{project.metrics.map((metric) => (
							<div
								key={metric.label}
								className="rounded-lg border-2 border-gray-900 bg-gray-50 p-2 text-center xl:p-3"
							>
								<div className="font-black text-gray-900 text-sm xl:text-base 2xl:text-lg">
									{metric.value}
								</div>
								<div className="font-medium text-[10px] text-gray-600 sm:text-xs xl:text-sm">
									{metric.label}
								</div>
							</div>
						))}
					</div>
				)}

				<div className="mb-3 flex flex-wrap gap-2 sm:mb-4">
					{project.tags.map((tag) => (
						<span
							key={tag}
							className="rounded-full border-2 border-gray-900 bg-white px-2 py-1 font-bold text-[10px] text-gray-700 sm:text-xs xl:text-sm"
						>
							{tag}
						</span>
					))}
				</div>

				<div className="flex gap-2 sm:gap-3">
					{project.githubUrl && (
						<motion.a
							href={project.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-1 items-center justify-center gap-1 rounded-full border-2 border-gray-900 bg-gray-900 px-3 py-2 font-bold text-sm text-white transition-colors hover:bg-gray-800 sm:gap-2 sm:px-4 sm:text-base xl:px-5 xl:py-3 xl:text-lg"
							whileHover={{ y: -2 }}
							whileTap={{ scale: 0.98 }}
						>
							<Github size={16} className="xl:h-5 xl:w-5" />
							Code
						</motion.a>
					)}
					{project.demoUrl && (
						<motion.a
							href={project.demoUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-1 items-center justify-center gap-1 rounded-full border-2 border-gray-900 bg-cyan-400 px-3 py-2 font-bold text-gray-900 text-sm transition-colors hover:bg-cyan-500 sm:gap-2 sm:px-4 sm:text-base xl:px-5 xl:py-3 xl:text-lg"
							whileHover={{ y: -2 }}
							whileTap={{ scale: 0.98 }}
						>
							<ExternalLink size={16} className="xl:h-5 xl:w-5" />
							Demo
						</motion.a>
					)}
				</div>
			</div>
		</motion.div>
	);
}
