"use client";

import { motion } from "motion/react";
import { memo, useId } from "react";
import { getSkillsByCategory } from "@/data/skills";

const SKILL_CATEGORIES = [
	{
		title: "Backend Technologies",
		category: "Backend" as const,
		color: "from-cyan-400 to-cyan-600",
	},
	{
		title: "Databases",
		category: "Database" as const,
		color: "from-rose-400 to-rose-600",
	},
	{
		title: "DevOps & Infrastructure",
		category: "DevOps" as const,
		color: "from-purple-400 to-purple-600",
	},
	{
		title: "Tools & Frameworks",
		category: "Tools" as const,
		color: "from-orange-400 to-orange-600",
	},
	{
		title: "Soft Skills",
		category: "Soft" as const,
		color: "from-green-400 to-green-600",
	},
];

export const Skills = memo(() => (
	<section
		id={useId()}
		className="relative bg-gradient-to-br from-cyan-50 via-white to-rose-50 py-12 sm:py-16 md:py-20 xl:py-24 2xl:py-28"
	>
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:max-w-[1400px] 2xl:max-w-[1600px]">
			{/* Section Header */}
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
						SKILLS
					</span>
				</motion.h2>
				<motion.p
					className="mx-auto max-w-2xl font-medium text-base text-gray-700 sm:text-lg md:text-xl xl:text-2xl"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					Technologies and expertise I use to build scalable, high-performance
					systems
				</motion.p>
			</motion.div>

			{/* Skills Grid */}
			<div className="space-y-8 sm:space-y-10 md:space-y-12 xl:space-y-14 2xl:space-y-16">
				{SKILL_CATEGORIES.map((category, categoryIndex) => {
					const skills = getSkillsByCategory(category.category);

					return (
						<motion.div
							key={category.category}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
						>
							{/* Category Title */}
							<motion.h3
								className="mb-4 font-black text-gray-900 text-xl sm:mb-5 sm:text-2xl md:mb-6 md:text-3xl xl:mb-7 xl:text-4xl 2xl:mb-8 2xl:text-5xl"
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: categoryIndex * 0.1 + 0.2 }}
							>
								<span
									className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
								>
									{category.title}
								</span>
							</motion.h3>

							{/* Skills Grid */}
							<div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:gap-5 2xl:gap-6">
								{skills.map((skill, skillIndex) => (
									<motion.div
										key={skill.name}
										className="group relative overflow-hidden rounded-2xl border-2 border-gray-900 bg-white p-3 shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] transition-all hover:shadow-[8px_8px_0px_0px_rgba(17,24,39,1)] sm:p-4 md:border-3 xl:rounded-3xl xl:border-4 xl:p-5 2xl:p-6"
										initial={{ opacity: 0, scale: 0.9 }}
										whileInView={{ opacity: 1, scale: 1 }}
										viewport={{ once: true, margin: "-50px" }}
										transition={{
											duration: 0.4,
											delay: categoryIndex * 0.1 + skillIndex * 0.05,
										}}
										whileHover={{ y: -4, rotate: 1 }}
									>
										{/* Skill Name */}
										<p className="text-center font-bold text-gray-900 text-xs sm:text-sm xl:text-base 2xl:text-lg">
											{skill.name}
										</p>

										{/* Skill Level Bar (if available) */}
										{skill.level && (
											<div className="mt-2">
												<div className="h-1.5 overflow-hidden rounded-full bg-gray-200">
													<motion.div
														className={`h-full bg-gradient-to-r ${category.color}`}
														initial={{ width: 0 }}
														whileInView={{ width: `${skill.level}%` }}
														viewport={{ once: true }}
														transition={{
															duration: 1,
															delay:
																categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
															ease: "easeOut",
														}}
													/>
												</div>
												<p className="mt-1 text-center text-[10px] text-gray-600 sm:text-xs xl:text-sm">
													{skill.level}%
												</p>
											</div>
										)}

										{/* Hover Gradient Effect */}
										<div
											className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
										/>
									</motion.div>
								))}
							</div>
						</motion.div>
					);
				})}
			</div>

			{/* Bottom CTA */}
			<motion.div
				className="mt-12 text-center sm:mt-14 md:mt-16 xl:mt-20 2xl:mt-24"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.3 }}
			>
				<p className="font-bold text-base text-gray-700 italic sm:text-lg xl:text-xl">
					Always learning, always growing 🚀
				</p>
			</motion.div>
		</div>
	</section>
));

Skills.displayName = "Skills";
