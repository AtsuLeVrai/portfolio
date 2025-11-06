"use client";

import { motion } from "motion/react";

export function About() {
	return (
		<section
			id="about"
			className="relative bg-white py-12 sm:py-16 md:py-20 xl:py-24 2xl:py-28"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:max-w-[1400px] 2xl:max-w-[1600px]">
				<div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20 2xl:gap-24">
					<motion.div
						className="flex items-center justify-center"
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5, ease: "easeOut" }}
					>
						<div className="relative">
							<div className="-top-3 -left-3 sm:-top-4 sm:-left-4 absolute h-64 w-64 rotate-3 rounded-2xl border-3 border-gray-900 bg-cyan-200 sm:h-72 sm:w-72 md:h-80 md:w-80 md:rounded-3xl md:border-4 xl:h-96 xl:w-96 2xl:h-[28rem] 2xl:w-[28rem]" />

							<motion.div
								className="relative h-64 w-64 overflow-hidden rounded-2xl border-3 border-gray-900 bg-gradient-to-br from-purple-400 via-cyan-400 to-rose-400 shadow-[8px_8px_0px_0px_rgba(17,24,39,1)] sm:h-72 sm:w-72 md:h-80 md:w-80 md:rounded-3xl md:border-4 md:shadow-[12px_12px_0px_0px_rgba(17,24,39,1)] xl:h-96 xl:w-96 2xl:h-[28rem] 2xl:w-[28rem]"
								whileHover={{ rotate: -2, scale: 1.02 }}
								transition={{ duration: 0.3 }}
							>
								<div className="flex h-full w-full items-center justify-center">
									<span className="font-black text-7xl text-white sm:text-8xl md:text-9xl xl:text-[10rem] 2xl:text-[12rem]">
										TB
									</span>
								</div>
							</motion.div>
						</div>
					</motion.div>

					<motion.div
						className="flex flex-col justify-center"
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-50px" }}
						transition={{ duration: 0.5, ease: "easeOut" }}
					>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.1 }}
						>
							<h2 className="mb-4 font-black text-3xl text-gray-900 leading-tight sm:mb-5 sm:text-4xl md:mb-6 md:text-5xl xl:text-6xl 2xl:mb-8 2xl:text-7xl">
								ABOUT{" "}
								<span className="bg-gradient-to-r from-purple-600 via-cyan-600 to-rose-600 bg-clip-text text-transparent">
									ME
								</span>
							</h2>
						</motion.div>

						<motion.div
							className="space-y-3 sm:space-y-4 md:space-y-4 xl:space-y-5 2xl:space-y-6"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							<p className="font-medium text-base text-gray-700 leading-relaxed sm:text-lg xl:text-xl 2xl:text-2xl">
								I'm a{" "}
								<strong className="text-gray-900">
									Backend Engineer & Infrastructure Developer
								</strong>{" "}
								with a passion for building robust, developer-friendly tools.
								Specializing in{" "}
								<strong className="text-gray-900">
									Discord bot development
								</strong>{" "}
								and{" "}
								<strong className="text-gray-900">
									real-time communication platforms
								</strong>
								, I thrive on creating tools that empower developers.
							</p>

							<p className="font-medium text-base text-gray-700 leading-relaxed sm:text-lg xl:text-xl 2xl:text-2xl">
								With over 5 years of experience, I've built everything from{" "}
								<strong className="text-gray-900">
									high-performance Rust-based Discord bots
								</strong>{" "}
								to full-stack communication platforms. My work focuses on
								WebSocket-driven real-time systems, type-safe APIs, and
								developer experience.
							</p>

							<p className="font-medium text-base text-gray-700 leading-relaxed sm:text-lg xl:text-xl 2xl:text-2xl">
								When I'm not crafting Discord frameworks or optimizing WebSocket
								connections, you'll find me exploring new technologies,
								contributing to open source, and building tools that make
								development more enjoyable.
							</p>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
