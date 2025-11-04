"use client";

import { Zap } from "lucide-react";
import { motion } from "motion/react";

function StatCard({ value, label }: { value: string; label: string }) {
	return (
		<div className="rounded-2xl border-2 border-gray-300 bg-white/90 p-3 text-center shadow-sm">
			<div className="font-black text-gray-900 text-xl">{value}</div>
			<div className="font-bold text-gray-600 text-xs">{label}</div>
		</div>
	);
}

export function Hero() {
	return (
		<section
			id="hero"
			className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-rose-50 via-white to-cyan-50 py-20 sm:py-24 md:py-28"
		>
			<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:max-w-[1400px] 2xl:max-w-[1600px]">
				<div className="grid items-center gap-12 sm:gap-16 md:gap-20 lg:grid-cols-2 lg:gap-24 xl:gap-28 2xl:gap-32">
					<motion.div
						className="flex flex-col justify-center space-y-6 md:space-y-8 xl:space-y-10"
						variants={{
							hidden: { opacity: 0 },
							visible: {
								opacity: 1,
								transition: {
									staggerChildren: 0.15,
									delayChildren: 0.2,
								},
							},
						}}
						initial="hidden"
						animate="visible"
					>
						<motion.div
							variants={{
								hidden: { opacity: 0, y: 30 },
								visible: {
									opacity: 1,
									y: 0,
									transition: {
										duration: 0.7,
										ease: [0.25, 0.46, 0.45, 0.94],
									},
								},
							}}
						>
							<h1 className="font-black text-4xl text-gray-900 leading-none tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
								HI,
								<br />
								I'M{" "}
								<span className="bg-gradient-to-r from-cyan-600 to-rose-600 bg-clip-text text-transparent">
									TOM
								</span>
								!
							</h1>
						</motion.div>

						<motion.div
							variants={{
								hidden: { opacity: 0, y: 30 },
								visible: {
									opacity: 1,
									y: 0,
									transition: {
										duration: 0.7,
										ease: [0.25, 0.46, 0.45, 0.94],
									},
								},
							}}
						>
							<p className="max-w-2xl font-medium text-gray-700 text-lg leading-relaxed sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl">
								Backend Engineer crafting scalable systems and innovative
								digital experiences with precision and creativity.
							</p>
						</motion.div>

						<motion.div
							variants={{
								hidden: { opacity: 0, y: 30 },
								visible: {
									opacity: 1,
									y: 0,
									transition: {
										duration: 0.7,
										ease: [0.25, 0.46, 0.45, 0.94],
									},
								},
							}}
						>
							<motion.button
								className="relative overflow-hidden rounded-full border-3 border-gray-900 bg-cyan-400 px-8 py-4 font-black text-gray-900 text-lg shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] sm:px-10 sm:py-5 sm:text-xl md:border-4 xl:px-12 xl:py-6 xl:text-2xl"
								whileHover={{
									y: -3,
									boxShadow: "8px 8px 0px 0px rgba(17,24,39,1)",
									transition: { duration: 0.2 },
								}}
								whileTap={{
									y: 0,
									boxShadow: "3px 3px 0px 0px rgba(17,24,39,1)",
									transition: { duration: 0.1 },
								}}
								onClick={() => {
									document.getElementById("about")?.scrollIntoView({
										behavior: "smooth",
									});
								}}
								style={{ willChange: "transform" }}
							>
								VIEW MY WORK
							</motion.button>
						</motion.div>
					</motion.div>

					{/* Profile Card */}
					<motion.div
						className="relative flex items-center justify-center"
						variants={{
							hidden: { opacity: 0, y: 30 },
							visible: {
								opacity: 1,
								y: 0,
								transition: {
									duration: 0.7,
									ease: [0.25, 0.46, 0.45, 0.94],
								},
							},
						}}
						initial="hidden"
						animate="visible"
					>
						<div className="relative">
							<div className="-top-4 -left-4 absolute h-96 w-80 rotate-2 rounded-3xl border-4 border-gray-900 bg-rose-200" />

							<motion.div
								className="relative flex h-96 w-80 flex-col items-center justify-center overflow-hidden rounded-3xl border-4 border-gray-900 bg-gradient-to-br from-cyan-50 to-rose-50 p-8 text-center shadow-[8px_8px_0px_0px_rgba(17,24,39,1)]"
								whileHover={{ rotate: -1, transition: { duration: 0.3 } }}
								style={{ willChange: "transform" }}
							>
								<div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full border-4 border-gray-900 bg-gradient-to-br from-cyan-400 to-rose-400 shadow-lg">
									<span className="font-black text-4xl text-white">BE</span>
								</div>

								<h3 className="mb-3 font-black text-2xl text-gray-900">
									BACKEND ENGINEER
								</h3>

								<p className="mb-6 font-medium text-gray-600 leading-tight">
									Building systems that handle millions of requests with
									microsecond precision and reliability.
								</p>

								<div className="grid w-full grid-cols-2 gap-4">
									<StatCard value="15+" label="Projects" />
									<StatCard value="99.9%" label="Uptime" />
								</div>
							</motion.div>

							<motion.div
								className="-top-2 -right-2 absolute flex h-12 w-12 items-center justify-center rounded-full border-4 border-gray-900 bg-cyan-400 text-xl shadow-lg"
								animate={{
									rotate: [0, 10, -10, 0],
									scale: [1, 1.1, 1],
								}}
								transition={{
									duration: 3,
									repeat: Number.POSITIVE_INFINITY,
									ease: "easeInOut",
								}}
								style={{ willChange: "transform" }}
							>
								<Zap />
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
