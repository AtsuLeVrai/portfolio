"use client";

import { Bot, Code, Github, MessageSquare, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import type { projects } from "@/data/projects";

export const iconMap = {
	Bot,
	MessageSquare,
	Code,
} as const;

export type IconName = keyof typeof iconMap;

export function ProjectCard({
	project,
	index,
}: {
	project: (typeof projects)[number];
	index: number;
}) {
	const { t } = useTranslation();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const Icon = iconMap[project.icon];

	// Close modal on Escape key
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setIsModalOpen(false);
			}
		};

		if (isModalOpen) {
			document.addEventListener("keydown", handleEscape);
			// Prevent body scroll when modal is open
			document.body.style.overflow = "hidden";
		}

		return () => {
			document.removeEventListener("keydown", handleEscape);
			document.body.style.overflow = "unset";
		};
	}, [isModalOpen]);

	return (
		<>
			<motion.div
				className="group relative cursor-pointer overflow-hidden rounded-2xl border-2 border-gray-900 bg-white shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] transition-all duration-300 hover:shadow-[12px_12px_0px_0px_rgba(17,24,39,1)] md:border-3 xl:rounded-3xl xl:border-4"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-50px" }}
				transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
				whileHover={{ y: -6 }}
				onClick={() => setIsModalOpen(true)}
			>
				{project.featured && (
					<div className="absolute top-3 right-3 z-10 rounded-full border-2 border-gray-900 bg-gradient-to-r from-cyan-400 to-rose-400 px-2 py-1 font-bold text-[10px] text-white shadow-sm sm:top-4 sm:right-4 sm:px-3 sm:text-xs xl:text-sm">
						{t("projects.featured")}
					</div>
				)}

				<div
					className={`relative h-40 overflow-hidden bg-gradient-to-br ${project.gradient} flex items-center justify-center sm:h-48 xl:h-56 2xl:h-64`}
				>
					<Icon
						className="h-20 w-20 text-white/90 sm:h-24 sm:w-24 xl:h-28 xl:w-28"
						strokeWidth={1.5}
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
					<div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
						<div className="rounded-full border-2 border-white bg-white/90 px-4 py-2 font-bold text-gray-900 text-sm backdrop-blur-sm">
							{t("projects.clickDetails")}
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
						<div className="mb-4 grid grid-cols-3 gap-2 sm:gap-3 xl:mb-5 xl:gap-4">
							{project.metrics.map((metric) => (
								<motion.div
									key={metric.label}
									className="flex flex-col items-center justify-center rounded-xl border-2 border-gray-900 bg-gradient-to-br from-gray-50 to-gray-100 p-2 text-center sm:p-3"
									whileHover={{ scale: 1.05 }}
								>
									<div className="font-black text-gray-900 text-xs leading-tight sm:text-sm xl:text-base">
										{metric.value}
									</div>
									<div className="mt-0.5 font-bold text-[9px] text-gray-600 leading-tight sm:text-[10px] xl:text-xs">
										{metric.label}
									</div>
								</motion.div>
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
						{/** biome-ignore lint/a11y/noStaticElementInteractions: Backdrop click is an optional way to close modal, keyboard users can use Escape key or the close button */}
						<div
							className="fixed inset-0 z-[60] flex items-center justify-center p-4"
							onClick={() => setIsModalOpen(false)}
							role="presentation"
						>
							<motion.div
								className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border-4 border-gray-900 bg-white shadow-[12px_12px_0px_0px_rgba(17,24,39,1)]"
								initial={{ opacity: 0, scale: 0.9, y: 20 }}
								animate={{ opacity: 1, scale: 1, y: 0 }}
								exit={{ opacity: 0, scale: 0.9, y: 20 }}
								transition={{ duration: 0.3 }}
								onClick={(e) => e.stopPropagation()}
								role="dialog"
								aria-modal="true"
								aria-labelledby="modal-title"
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
								<div
									className={`relative h-64 overflow-hidden bg-gradient-to-br ${project.gradient} flex items-center justify-center sm:h-80 xl:h-96`}
								>
									<Icon
										className="h-32 w-32 text-white/90 sm:h-40 sm:w-40 xl:h-48 xl:w-48"
										strokeWidth={1.5}
									/>
									{project.featured && (
										<div className="absolute top-4 left-4 rounded-full border-2 border-gray-900 bg-gradient-to-r from-cyan-400 to-rose-400 px-4 py-2 font-bold text-sm text-white shadow-lg">
											{t("projects.featured")}
										</div>
									)}
								</div>

								{/* Content */}
								<div className="p-6 sm:p-8 xl:p-10">
									<h2
										id="modal-title"
										className="mb-4 font-black text-3xl text-gray-900 leading-tight sm:text-4xl xl:text-5xl"
									>
										{project.title}
									</h2>

									<p className="mb-6 font-medium text-base text-gray-700 leading-relaxed sm:text-lg xl:text-xl">
										{project.longDescription}
									</p>

									{/* Metrics */}
									{project.metrics && project.metrics.length > 0 && (
										<div className="mb-6 sm:mb-8">
											<h3 className="mb-4 font-black text-gray-900 text-xl sm:text-2xl xl:text-3xl">
												{t("projects.metrics")}
											</h3>
											<div className="grid grid-cols-3 gap-3 sm:gap-4 xl:gap-5">
												{project.metrics.map((metric) => (
													<motion.div
														key={metric.label}
														className="flex flex-col items-center justify-center rounded-2xl border-3 border-gray-900 bg-gradient-to-br from-cyan-50 to-rose-50 p-4 text-center sm:p-5 xl:p-6"
														whileHover={{ scale: 1.05, y: -4 }}
													>
														<div className="font-black text-gray-900 text-lg leading-tight sm:text-xl xl:text-2xl">
															{metric.value}
														</div>
														<div className="mt-1 font-bold text-gray-600 text-xs leading-tight sm:text-sm xl:text-base">
															{metric.label}
														</div>
													</motion.div>
												))}
											</div>
										</div>
									)}

									{/* Tech Stack */}
									<div className="mb-6">
										<h3 className="mb-3 font-black text-gray-900 text-xl sm:text-2xl">
											{t("projects.techStack")}
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
												{t("projects.viewCode")}
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
