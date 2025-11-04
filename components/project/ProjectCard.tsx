"use client";

import { Github, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import type { projects } from "@/data/projects";

export function ProjectCard({
	project,
	index,
}: {
	project: (typeof projects)[0];
	index: number;
}) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<motion.div
				className="group relative cursor-pointer overflow-hidden rounded-2xl border-2 border-gray-900 bg-white shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] transition-all duration-300 hover:shadow-[12px_12px_0px_0px_rgba(17,24,39,1)] md:border-3 xl:rounded-3xl xl:border-4"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-50px" }}
				transition={{ duration: 0.5, delay: index * 0.1 }}
				onClick={() => setIsModalOpen(true)}
			>
				{project.featured && (
					<div className="absolute top-3 right-3 z-10 rounded-full border-2 border-gray-900 bg-cyan-400 px-2 py-1 font-bold text-[10px] text-gray-900 shadow-sm sm:top-4 sm:right-4 sm:px-3 sm:text-xs xl:text-sm">
						FEATURED
					</div>
				)}

				<div className="relative h-40 overflow-hidden bg-gradient-to-br from-cyan-100 to-rose-100 sm:h-48 xl:h-56 2xl:h-64">
					<Image
						src={project.image}
						alt={project.title}
						width={800}
						height={600}
						className="h-full w-full object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
					<div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
						<div className="rounded-full border-2 border-white bg-white/90 px-4 py-2 font-bold text-gray-900 text-sm backdrop-blur-sm">
							Click for details
						</div>
					</div>
				</div>

				<div className="p-4 sm:p-5 xl:p-6 2xl:p-8">
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
						{project.tags.slice(0, 4).map((tag) => (
							<span
								key={tag}
								className="rounded-full border-2 border-gray-900 bg-white px-2 py-1 font-bold text-[10px] text-gray-700 sm:text-xs xl:text-sm"
							>
								{tag}
							</span>
						))}
						{project.tags.length > 4 && (
							<span className="rounded-full border-2 border-gray-900 bg-gray-200 px-2 py-1 font-bold text-[10px] text-gray-700 sm:text-xs xl:text-sm">
								+{project.tags.length - 4}
							</span>
						)}
					</div>
				</div>
			</motion.div>

			{/* Modal */}
			<AnimatePresence>
				{isModalOpen && (
					<>
						{/* Backdrop */}
						<motion.div
							className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setIsModalOpen(false)}
						/>

						{/* Modal Content */}
						<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
							<motion.div
								className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border-4 border-gray-900 bg-white shadow-[12px_12px_0px_0px_rgba(17,24,39,1)]"
								initial={{ opacity: 0, scale: 0.9, y: 20 }}
								animate={{ opacity: 1, scale: 1, y: 0 }}
								exit={{ opacity: 0, scale: 0.9, y: 20 }}
								transition={{ duration: 0.3 }}
								onClick={(e) => e.stopPropagation()}
							>
								{/* Close Button */}
								<button
									type="button"
									onClick={() => setIsModalOpen(false)}
									className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-900 bg-white text-gray-900 transition-colors hover:bg-gray-100"
									aria-label="Close modal"
								>
									<X size={24} />
								</button>

								{/* Image */}
								<div className="relative h-64 overflow-hidden bg-gradient-to-br from-cyan-100 to-rose-100 sm:h-80 xl:h-96">
									<Image
										src={project.image}
										alt={project.title}
										width={1200}
										height={800}
										className="h-full w-full object-cover"
									/>
									{project.featured && (
										<div className="absolute top-4 left-4 rounded-full border-2 border-gray-900 bg-cyan-400 px-4 py-2 font-bold text-gray-900 text-sm shadow-lg">
											FEATURED PROJECT
										</div>
									)}
								</div>

								{/* Content */}
								<div className="p-6 sm:p-8 xl:p-10">
									<h2 className="mb-4 font-black text-3xl text-gray-900 leading-tight sm:text-4xl xl:text-5xl">
										{project.title}
									</h2>

									<p className="mb-6 font-medium text-base text-gray-700 leading-relaxed sm:text-lg xl:text-xl">
										{project.longDescription}
									</p>

									{/* Metrics */}
									{project.metrics && project.metrics.length > 0 && (
										<div className="mb-6">
											<h3 className="mb-3 font-black text-gray-900 text-xl sm:text-2xl">
												Metrics
											</h3>
											<div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:gap-4">
												{project.metrics.map((metric) => (
													<div
														key={metric.label}
														className="rounded-xl border-2 border-gray-900 bg-gradient-to-br from-cyan-50 to-rose-50 p-4 text-center"
													>
														<div className="font-black text-gray-900 text-xl xl:text-2xl">
															{metric.value}
														</div>
														<div className="font-bold text-gray-600 text-sm xl:text-base">
															{metric.label}
														</div>
													</div>
												))}
											</div>
										</div>
									)}

									{/* Tech Stack */}
									<div className="mb-6">
										<h3 className="mb-3 font-black text-gray-900 text-xl sm:text-2xl">
											Tech Stack
										</h3>
										<div className="flex flex-wrap gap-2">
											{project.tags.map((tag) => (
												<span
													key={tag}
													className="rounded-full border-2 border-gray-900 bg-white px-3 py-2 font-bold text-gray-700 text-sm sm:text-base"
												>
													{tag}
												</span>
											))}
										</div>
									</div>

									{/* Links */}
									<div className="flex gap-3">
										{project.githubUrl && (
											<motion.a
												href={project.githubUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="flex flex-1 items-center justify-center gap-2 rounded-full border-3 border-gray-900 bg-gray-900 px-6 py-3 font-bold text-base text-white shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] transition-all hover:bg-gray-800 hover:shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] sm:text-lg"
												whileHover={{ y: -2 }}
												whileTap={{ scale: 0.98 }}
												onClick={(e) => e.stopPropagation()}
											>
												<Github size={20} />
												View Code
											</motion.a>
										)}
									</div>
								</div>
							</motion.div>
						</div>
					</>
				)}
			</AnimatePresence>
		</>
	);
}
