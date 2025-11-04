"use client";

import { Briefcase, Calendar } from "lucide-react";
import { motion } from "motion/react";
import { experiences } from "@/data/experience";

export function Experience() {
	return (
		<section
			id="experience"
			className="relative bg-white py-12 sm:py-16 md:py-20 xl:py-24 2xl:py-28"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:max-w-[1400px] 2xl:max-w-[1600px]">
				<motion.div
					className="mb-12 text-center sm:mb-14 md:mb-16 xl:mb-20 2xl:mb-24"
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
							EXPERIENCE
						</span>
					</motion.h2>
					<motion.p
						className="mx-auto max-w-2xl font-medium text-base text-gray-700 sm:text-lg md:text-xl xl:text-2xl"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						My journey building scalable systems and solving complex challenges
					</motion.p>
				</motion.div>

				<div className="relative">
					<div className="md:-ml-0.5 absolute top-0 bottom-0 left-4 w-1 bg-gradient-to-b from-cyan-400 via-rose-400 to-cyan-400 md:left-1/2" />

					<div className="space-y-10 sm:space-y-12 xl:space-y-14 2xl:space-y-16">
						{experiences.map((exp, index) => (
							<motion.div
								key={exp.id}
								className={`relative flex flex-col md:flex-row ${
									index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
								} gap-8`}
								initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, margin: "-100px" }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
							>
								<motion.div
									className="md:-ml-4 absolute top-0 left-4 z-10 flex h-6 w-6 items-center justify-center rounded-full border-3 border-gray-900 bg-cyan-400 sm:h-8 sm:w-8 sm:border-4 md:left-1/2 xl:h-10 xl:w-10"
									initial={{ scale: 0 }}
									whileInView={{ scale: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
								>
									<Briefcase
										size={16}
										className="text-gray-900 sm:h-5 sm:w-5 xl:h-6 xl:w-6"
									/>
								</motion.div>

								<div className="hidden md:block md:w-1/2" />

								<motion.div
									className="ml-12 w-full rounded-2xl border-2 border-gray-900 bg-white p-4 shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] sm:ml-16 sm:p-5 md:ml-0 md:w-1/2 md:border-3 xl:rounded-3xl xl:border-4 xl:p-6 2xl:p-8"
									initial={{ opacity: 0, scale: 0.9 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
									whileHover={{
										y: -4,
										boxShadow: "8px 8px 0px 0px rgba(17,24,39,1)",
									}}
								>
									<div className="mb-3 sm:mb-4 xl:mb-5">
										{exp.current && (
											<span className="mb-2 inline-block rounded-full border-2 border-gray-900 bg-green-400 px-2 py-1 font-bold text-[10px] text-gray-900 sm:px-3 sm:text-xs xl:text-sm">
												CURRENT
											</span>
										)}

										<h3 className="mb-1 font-black text-gray-900 text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl">
											{exp.position}
										</h3>
										<p className="mb-2 font-bold text-base text-cyan-600 sm:text-lg xl:text-xl 2xl:text-2xl">
											{exp.company}
										</p>

										<div className="flex items-center gap-2 text-gray-600">
											<Calendar size={16} className="xl:h-5 xl:w-5" />
											<span className="font-medium text-sm sm:text-base xl:text-lg">
												{exp.startDate} - {exp.endDate}
											</span>
										</div>
									</div>

									<ul className="mb-3 space-y-2 sm:mb-4 xl:mb-5 xl:space-y-3">
										{exp.achievements.map((achievement, idx) => (
											<motion.li
												// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
												key={idx}
												className="flex gap-2 font-medium text-gray-700 text-sm leading-relaxed sm:text-base xl:text-lg"
												initial={{ opacity: 0, x: -10 }}
												whileInView={{ opacity: 1, x: 0 }}
												viewport={{ once: true }}
												transition={{
													duration: 0.3,
													delay: index * 0.1 + 0.4 + idx * 0.05,
												}}
											>
												<span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-600 xl:h-2 xl:w-2" />
												<span>{achievement}</span>
											</motion.li>
										))}
									</ul>

									<div className="flex flex-wrap gap-2 xl:gap-3">
										{exp.technologies.map((tech, idx) => (
											<motion.span
												key={tech}
												className="rounded-full border-2 border-gray-900 bg-gradient-to-br from-cyan-50 to-rose-50 px-2 py-1 font-bold text-[10px] text-gray-900 sm:px-3 sm:text-xs xl:px-4 xl:py-1.5 xl:text-sm"
												initial={{ opacity: 0, scale: 0.8 }}
												whileInView={{ opacity: 1, scale: 1 }}
												viewport={{ once: true }}
												transition={{
													duration: 0.3,
													delay: index * 0.1 + 0.5 + idx * 0.03,
												}}
												whileHover={{ scale: 1.1, rotate: 3 }}
											>
												{tech}
											</motion.span>
										))}
									</div>
								</motion.div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
