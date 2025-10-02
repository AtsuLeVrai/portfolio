"use client";

import { Download } from "lucide-react";
import { motion } from "motion/react";
import { memo, useId } from "react";

export const About = memo(() => (
	<section
		id={useId()}
		className="relative bg-white py-12 sm:py-16 md:py-20 xl:py-24 2xl:py-28"
	>
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:max-w-[1400px] 2xl:max-w-[1600px]">
			<div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20 2xl:gap-24">
				{/* Image Side */}
				<motion.div
					className="flex items-center justify-center"
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6 }}
				>
					<div className="relative">
						{/* Background decoration */}
						<div className="-top-3 -left-3 sm:-top-4 sm:-left-4 absolute h-64 w-64 rotate-3 rounded-2xl border-3 border-gray-900 bg-cyan-200 sm:h-72 sm:w-72 md:h-80 md:w-80 md:rounded-3xl md:border-4 xl:h-96 xl:w-96 2xl:h-[28rem] 2xl:w-[28rem]" />

						{/* Main image container */}
						<motion.div
							className="relative h-64 w-64 overflow-hidden rounded-2xl border-3 border-gray-900 bg-gradient-to-br from-cyan-400 to-rose-400 shadow-[8px_8px_0px_0px_rgba(17,24,39,1)] sm:h-72 sm:w-72 md:h-80 md:w-80 md:rounded-3xl md:border-4 md:shadow-[12px_12px_0px_0px_rgba(17,24,39,1)] xl:h-96 xl:w-96 2xl:h-[28rem] 2xl:w-[28rem]"
							whileHover={{ rotate: -2 }}
							transition={{ duration: 0.3 }}
						>
							{/* Placeholder - Replace with actual image */}
							<div className="flex h-full w-full items-center justify-center">
								<span className="font-black text-7xl text-white sm:text-8xl md:text-9xl xl:text-[10rem] 2xl:text-[12rem]">
									TB
								</span>
							</div>
						</motion.div>

						{/* Floating badge */}
						<motion.div
							className="-bottom-3 -right-3 sm:-bottom-4 sm:-right-4 absolute rounded-xl border-3 border-gray-900 bg-rose-400 px-4 py-2 shadow-lg sm:rounded-2xl sm:border-4 sm:px-6 sm:py-3 xl:px-8 xl:py-4 2xl:px-10 2xl:py-5"
							animate={{
								y: [0, -10, 0],
							}}
							transition={{
								duration: 3,
								repeat: Number.POSITIVE_INFINITY,
								ease: "easeInOut",
							}}
						>
							<p className="font-black text-base text-gray-900 sm:text-lg xl:text-xl 2xl:text-2xl">
								7+ Years
							</p>
							<p className="font-bold text-[10px] text-gray-900 sm:text-xs xl:text-sm 2xl:text-base">
								Experience
							</p>
						</motion.div>
					</div>
				</motion.div>

				{/* Content Side */}
				<motion.div
					className="flex flex-col justify-center"
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6 }}
				>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						<h2 className="mb-4 font-black text-3xl text-gray-900 leading-tight sm:mb-5 sm:text-4xl md:mb-6 md:text-5xl xl:text-6xl 2xl:mb-8 2xl:text-7xl">
							ABOUT{" "}
							<span className="bg-gradient-to-r from-cyan-600 to-rose-600 bg-clip-text text-transparent">
								ME
							</span>
						</h2>
					</motion.div>

					<motion.div
						className="space-y-3 sm:space-y-4 md:space-y-4 xl:space-y-5 2xl:space-y-6"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<p className="font-medium text-base text-gray-700 leading-relaxed sm:text-lg xl:text-xl 2xl:text-2xl">
							I'm a <strong className="text-gray-900">Backend Engineer</strong>{" "}
							with a passion for building systems that scale. Specializing in{" "}
							<strong className="text-cyan-600">
								high-frequency trading platforms
							</strong>{" "}
							and{" "}
							<strong className="text-rose-600">
								multiplayer game backends
							</strong>
							, I thrive on solving complex technical challenges.
						</p>

						<p className="font-medium text-base text-gray-700 leading-relaxed sm:text-lg xl:text-xl 2xl:text-2xl">
							With over 7 years of experience, I've architected systems
							processing{" "}
							<strong className="text-gray-900">
								millions of requests per second
							</strong>{" "}
							with microsecond latency. My work spans across distributed
							systems, real-time data processing, and scalable API design.
						</p>

						<p className="font-medium text-base text-gray-700 leading-relaxed sm:text-lg xl:text-xl 2xl:text-2xl">
							When I'm not optimizing database queries or debugging race
							conditions, you'll find me exploring new technologies,
							contributing to open source, or mentoring junior developers.
						</p>
					</motion.div>

					{/* Key Points */}
					<motion.div
						className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4 xl:mt-10 xl:gap-5 2xl:mt-12 2xl:gap-6"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						{[
							"🚀 Performance Optimization",
							"⚡ Low-Latency Systems",
							"🎯 Scalable Architecture",
							"🔧 DevOps & CI/CD",
						].map((point, index) => (
							<motion.div
								key={point}
								className="rounded-xl border-2 border-gray-900 bg-gradient-to-br from-cyan-50 to-rose-50 p-3 sm:rounded-2xl sm:p-4 xl:p-5 2xl:p-6"
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
								whileHover={{ scale: 1.05, rotate: 1 }}
							>
								<p className="text-center font-bold text-gray-900 text-xs sm:text-sm xl:text-base 2xl:text-lg">
									{point}
								</p>
							</motion.div>
						))}
					</motion.div>

					{/* CTA Button */}
					<motion.div
						className="mt-6 sm:mt-8 xl:mt-10 2xl:mt-12"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.5 }}
					>
						<motion.a
							href="/resume.pdf"
							download
							className="inline-flex items-center gap-2 rounded-full border-3 border-gray-900 bg-cyan-400 px-6 py-3 font-black text-base text-gray-900 shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] sm:border-4 sm:px-8 sm:py-4 sm:text-lg xl:px-10 xl:py-5 xl:text-xl 2xl:px-12 2xl:py-6 2xl:text-2xl"
							whileHover={{
								y: -3,
								boxShadow: "8px 8px 0px 0px rgba(17,24,39,1)",
							}}
							whileTap={{
								y: 0,
								boxShadow: "3px 3px 0px 0px rgba(17,24,39,1)",
							}}
						>
							<Download size={20} className="xl:h-6 xl:w-6 2xl:h-7 2xl:w-7" />
							DOWNLOAD CV
						</motion.a>
					</motion.div>
				</motion.div>
			</div>
		</div>
	</section>
));

About.displayName = "About";
