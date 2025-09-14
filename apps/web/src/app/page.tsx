"use client";

import {
	Gamepad2,
	Minus,
	Plus,
	Server,
	TrendingUp,
	X,
	Zap,
} from "lucide-react";
import { motion, useMotionValue, useTransform } from "motion/react";
import { useEffect, useId, useRef, useState } from "react";

export default function Home() {
	const containerRef = useRef(null);
	const scrollY = useMotionValue(0);
	const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

	const frameScale = useTransform(scrollY, [0, 1500], [1, 2.2]);
	const backgroundOpacity = useTransform(scrollY, [0, 1200], [1, 0.2]);
	const rotation = useTransform(scrollY, [0, 1500], [0, -2]);

	const contentY = useTransform(scrollY, [1500, 2800], [0, -800]);
	const contentScale = useTransform(scrollY, [0, 1500], [1, 1 / 2.2]);
	const contentRotation = useTransform(scrollY, [0, 1500], [0, 2]);

	const sophisticatedGridId = useId();

	useEffect(() => {
		const updateScrollY = () => {
			scrollY.set(window.scrollY);
		};

		updateScrollY();

		window.addEventListener("scroll", updateScrollY, { passive: true });

		return () => {
			window.removeEventListener("scroll", updateScrollY);
		};
	}, [scrollY]);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.2,
			},
		},
	} as const;

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.7,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
	} as const;

	const cardVariants = {
		hidden: { opacity: 0, scale: 0.95, y: 20 },
		visible: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
	} as const;

	return (
		<>
			<div className="fixed inset-0 z-0 bg-black" />

			<main className="relative text-white">
				<div className="relative" style={{ height: "280vh" }}>
					<div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
						<motion.section
							ref={containerRef}
							className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-rose-50 via-white to-cyan-50"
							style={{
								scale: frameScale,
								rotate: rotation,
								transformOrigin: "center center",
							}}
						>
							<motion.div
								className="absolute inset-0"
								style={{ opacity: backgroundOpacity }}
							>
								<div className="absolute inset-0 opacity-5">
									<svg
										className="h-full w-full"
										xmlns="http://www.w3.org/2000/svg"
									>
										<title>Sophisticated Grid Pattern</title>
										<defs>
											<pattern
												id={sophisticatedGridId}
												width="80"
												height="80"
												patternUnits="userSpaceOnUse"
											>
												<path
													d="M 80 0 L 0 0 0 80"
													fill="none"
													stroke="rgba(17,24,39,0.4)"
													strokeWidth="1"
												/>
												<circle
													cx="40"
													cy="40"
													r="1.5"
													fill="rgba(17,24,39,0.3)"
												/>
												<rect
													x="35"
													y="35"
													width="10"
													height="10"
													fill="none"
													stroke="rgba(17,24,39,0.2)"
													strokeWidth="0.5"
												/>
											</pattern>
										</defs>
										<rect
											width="100%"
											height="100%"
											fill={`url(#${sophisticatedGridId})`}
										/>
									</svg>
								</div>
							</motion.div>

							<motion.div
								className="relative z-10 mx-6 w-full max-w-6xl overflow-hidden rounded-3xl border-4 border-gray-900 bg-white/95 shadow-[12px_12px_0px_0px_rgba(17,24,39,1)] backdrop-blur-sm"
								variants={cardVariants}
								initial="hidden"
								animate="visible"
							>
								<div className="flex items-center gap-3 border-gray-900 border-b-4 bg-gray-100 px-6 py-4">
									<div className="flex gap-2">
										<motion.div
											className="relative h-4 w-4 cursor-pointer select-none overflow-hidden rounded-full border-2 border-gray-900 bg-rose-300"
											whileHover={{ scale: 1.1 }}
											whileTap={{ scale: 0.9 }}
										>
											<motion.div
												className="absolute inset-0 flex select-none items-center justify-center text-gray-900"
												initial={{ opacity: 0 }}
												whileHover={{ opacity: 1 }}
											>
												<X size={10} strokeWidth={3} />
											</motion.div>
										</motion.div>
										<motion.div
											className="relative h-4 w-4 cursor-pointer select-none overflow-hidden rounded-full border-2 border-gray-900 bg-yellow-300"
											whileHover={{ scale: 1.1 }}
											whileTap={{ scale: 0.9 }}
										>
											<motion.div
												className="absolute inset-0 flex select-none items-center justify-center text-gray-900"
												initial={{ opacity: 0 }}
												whileHover={{ opacity: 1 }}
											>
												<Minus size={10} strokeWidth={3} />
											</motion.div>
										</motion.div>
										<motion.div
											className="relative h-4 w-4 cursor-pointer select-none overflow-hidden rounded-full border-2 border-gray-900 bg-green-300"
											whileHover={{ scale: 1.1 }}
											whileTap={{ scale: 0.9 }}
										>
											<motion.div
												className="absolute inset-0 flex select-none items-center justify-center text-gray-900"
												initial={{ opacity: 0 }}
												whileHover={{ opacity: 1 }}
											>
												<Plus size={10} strokeWidth={3} />
											</motion.div>
										</motion.div>
									</div>
									<div className="rounded-full border-2 border-gray-900 bg-white px-4 py-1 font-mono text-gray-900 text-sm">
										localhost:3001
									</div>
								</div>

								<div className="relative h-[600px] overflow-hidden bg-white/95">
									<motion.div
										className="absolute inset-0"
										style={{
											y: contentY,
											scale: contentScale,
											rotate: contentRotation,
											transformOrigin: "center center",
										}}
									>
										<div className="flex h-full items-center justify-center">
											<div className="grid w-full max-w-4xl gap-12 lg:grid-cols-2 lg:gap-16">
												<motion.div
													className="flex flex-col justify-center space-y-8"
													variants={containerVariants}
													initial="hidden"
													animate="visible"
												>
													<motion.div variants={itemVariants}>
														<h1 className="font-black text-5xl text-gray-900 leading-none tracking-tight md:text-6xl lg:text-7xl">
															HI,
															<br />
															I'M{" "}
															<span className="bg-gradient-to-r from-cyan-600 to-rose-600 bg-clip-text text-transparent">
																TOM
															</span>
															!
														</h1>
													</motion.div>

													<motion.div variants={itemVariants}>
														<p className="max-w-lg font-medium text-gray-700 text-xl leading-relaxed md:text-2xl">
															Backend Engineer crafting scalable systems and
															innovative digital experiences with precision and
															creativity.
														</p>
													</motion.div>

													<motion.div
														variants={itemVariants}
														className="mx-auto grid w-full max-w-md grid-cols-3 gap-2"
													>
														{[
															{
																text: "Trading",
																subtext: "Systems",
																bg: "bg-cyan-200",
																border: "border-cyan-400",
																icon: TrendingUp,
																tooltip: {
																	title: "High-Frequency Trading",
																	description:
																		"Real-time market data processing, algorithmic trading strategies, and microsecond latency optimization.",
																	tech: [
																		"Rust",
																		"WebSockets",
																		"Redis",
																		"PostgreSQL",
																	],
																},
															},
															{
																text: "Game",
																subtext: "Backends",
																bg: "bg-rose-200",
																border: "border-rose-400",
																icon: Gamepad2,
																tooltip: {
																	title: "Multiplayer Architecture",
																	description:
																		"Scalable game servers, player matchmaking, real-time synchronization, and anti-cheat systems.",
																	tech: [
																		"Node.js",
																		"Socket.IO",
																		"MongoDB",
																		"Docker",
																	],
																},
															},
															{
																text: "Scalable",
																subtext: "APIs",
																bg: "bg-gray-200",
																border: "border-gray-400",
																icon: Server,
																tooltip: {
																	title: "Enterprise Solutions",
																	description:
																		"High-throughput APIs, microservices architecture, load balancing, and distributed systems.",
																	tech: [
																		"Go",
																		"Kubernetes",
																		"gRPC",
																		"Apache Kafka",
																	],
																},
															},
														].map((tag) => (
															<div key={tag.text} className="relative">
																<motion.div
																	className={`px-2 py-3 ${tag.bg} ${tag.border} cursor-pointer select-none rounded-2xl border-2 text-center text-gray-900 transition-transform hover:scale-105`}
																	onHoverStart={() => setHoveredSkill(tag.text)}
																	onHoverEnd={() => setHoveredSkill(null)}
																	whileHover={{ y: -2 }}
																>
																	<div className="font-bold text-xs leading-tight">
																		{tag.text}
																	</div>
																	<div className="font-bold text-xs leading-tight">
																		{tag.subtext}
																	</div>
																</motion.div>

																{hoveredSkill === tag.text && (
																	<motion.div
																		className="-translate-x-1/2 absolute bottom-full left-1/2 z-20 mb-3 w-80 transform"
																		initial={{ opacity: 0, y: 10, scale: 0.9 }}
																		animate={{ opacity: 1, y: 0, scale: 1 }}
																		exit={{ opacity: 0, y: 10, scale: 0.9 }}
																		transition={{
																			duration: 0.2,
																			ease: "easeOut",
																		}}
																	>
																		<div className="rounded-2xl border-4 border-gray-900 bg-white p-6 shadow-[8px_8px_0px_0px_rgba(17,24,39,1)]">
																			<div className="mb-3 flex items-center gap-3">
																				<div
																					className={`rounded-full p-2 ${tag.bg} ${tag.border} border-2`}
																				>
																					<tag.icon
																						size={16}
																						className="text-gray-900"
																					/>
																				</div>
																				<h4 className="font-black text-gray-900 text-lg">
																					{tag.tooltip.title}
																				</h4>
																			</div>

																			<p className="mb-4 text-gray-700 text-sm leading-relaxed">
																				{tag.tooltip.description}
																			</p>

																			<div className="flex flex-wrap gap-2">
																				{tag.tooltip.tech.map((tech) => (
																					<span
																						key={tech}
																						className="rounded-md border border-gray-300 bg-gray-100 px-2 py-1 font-medium text-gray-700 text-xs"
																					>
																						{tech}
																					</span>
																				))}
																			</div>

																			<div className="-translate-x-1/2 absolute top-full left-1/2 transform">
																				<div className="h-0 w-0 border-t-[8px] border-t-gray-900 border-r-[8px] border-r-transparent border-l-[8px] border-l-transparent" />
																				<div className="-translate-x-1/2 absolute top-[-7px] left-1/2 h-0 w-0 transform border-t-[6px] border-t-white border-r-[6px] border-r-transparent border-l-[6px] border-l-transparent" />
																			</div>
																		</div>
																	</motion.div>
																)}
															</div>
														))}
													</motion.div>

													<motion.div variants={itemVariants}>
														<motion.button
															className="relative overflow-hidden rounded-full border-4 border-gray-900 bg-cyan-400 px-8 py-4 font-black text-gray-900 text-lg shadow-[6px_6px_0px_0px_rgba(17,24,39,1)]"
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
														>
															VIEW MY WORK
														</motion.button>
													</motion.div>
												</motion.div>

												<motion.div
													className="relative flex items-center justify-center"
													variants={itemVariants}
													initial="hidden"
													animate="visible"
												>
													<div className="relative">
														<div className="-top-4 -left-4 absolute h-96 w-80 rotate-2 rounded-3xl border-4 border-gray-900 bg-rose-200" />

														<motion.div
															className="relative flex h-96 w-80 flex-col items-center justify-center overflow-hidden rounded-3xl border-4 border-gray-900 bg-gradient-to-br from-cyan-50 to-rose-50 p-8 text-center shadow-[8px_8px_0px_0px_rgba(17,24,39,1)]"
															whileHover={{
																rotate: -1,
																transition: { duration: 0.3 },
															}}
														>
															<div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full border-4 border-gray-900 bg-gradient-to-br from-cyan-400 to-rose-400 shadow-lg">
																<span className="font-black text-4xl text-white">
																	BE
																</span>
															</div>

															<h3 className="mb-3 font-black text-2xl text-gray-900">
																BACKEND ENGINEER
															</h3>

															<p className="mb-6 font-medium text-gray-600 leading-tight">
																Building systems that handle millions of
																requests with microsecond precision and
																reliability.
															</p>

															<div className="grid w-full grid-cols-2 gap-4">
																<div className="rounded-2xl border-2 border-gray-300 bg-white/90 p-3 text-center shadow-sm">
																	<div className="font-black text-gray-900 text-xl">
																		15+
																	</div>
																	<div className="font-bold text-gray-600 text-xs">
																		Projects
																	</div>
																</div>
																<div className="rounded-2xl border-2 border-gray-300 bg-white/90 p-3 text-center shadow-sm">
																	<div className="font-black text-gray-900 text-xl">
																		99.9%
																	</div>
																	<div className="font-bold text-gray-600 text-xs">
																		Uptime
																	</div>
																</div>
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
														>
															<Zap />
														</motion.div>
													</div>
												</motion.div>
											</div>
										</div>
									</motion.div>
								</div>

								<motion.div
									className="relative border-gray-900 border-t-4 bg-gradient-to-br from-gray-50 to-gray-100 p-8"
									variants={itemVariants}
									initial="hidden"
									animate="visible"
								>
									<div className="flex items-center justify-between">
										<motion.div
											className="flex-1"
											initial={{ opacity: 0, x: -20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: 0.5 }}
										>
											<p className="font-bold text-gray-700 text-lg italic">
												"Ready to build something amazing together?"
											</p>
										</motion.div>
									</div>

									<motion.div
										className="mt-6 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-rose-400 to-cyan-400"
										initial={{ scaleX: 0 }}
										animate={{ scaleX: 1 }}
										transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
									/>
								</motion.div>
							</motion.div>
						</motion.section>
					</div>
				</div>

				{/* About Me Section */}
				<section className="-mt-20 relative bg-white pt-20 pb-12">
					<div className="mx-auto max-w-6xl px-6">
						<motion.div
							className="mb-16 text-center"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7 }}
							viewport={{ once: true }}
						>
							<h2 className="mb-6 font-black text-5xl text-gray-900">
								ABOUT ME
							</h2>
							<div className="mx-auto h-2 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-rose-400" />
						</motion.div>

						<div className="grid items-center gap-16 lg:grid-cols-2">
							<motion.div
								className="space-y-6"
								initial={{ opacity: 0, x: -50 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.7, delay: 0.2 }}
								viewport={{ once: true }}
							>
								<p className="text-gray-700 text-xl leading-relaxed">
									I'm a passionate backend engineer with over 5 years of
									experience building high-performance systems that scale. My
									journey started with a curiosity about how things work under
									the hood, and it evolved into a love for creating robust,
									efficient solutions.
								</p>
								<p className="text-gray-700 text-xl leading-relaxed">
									I specialize in designing architectures that handle millions
									of requests with microsecond precision. Whether it's
									optimizing database queries, implementing real-time trading
									systems, or building multiplayer game backends, I thrive on
									solving complex technical challenges.
								</p>
								<div className="flex flex-wrap gap-4 pt-4">
									{[
										"Problem Solver",
										"System Architect",
										"Performance Optimizer",
										"Team Player",
									].map((trait) => (
										<span
											key={trait}
											className="rounded-full border-2 border-gray-300 bg-gray-100 px-4 py-2 font-bold text-gray-700 text-sm"
										>
											{trait}
										</span>
									))}
								</div>
							</motion.div>

							<motion.div
								className="relative"
								initial={{ opacity: 0, x: 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.7, delay: 0.4 }}
								viewport={{ once: true }}
							>
								<div className="relative rounded-3xl border-4 border-gray-900 bg-gradient-to-br from-cyan-50 to-rose-50 p-8 shadow-[12px_12px_0px_0px_rgba(17,24,39,1)]">
									<div className="space-y-6">
										<div className="flex items-center justify-between">
											<span className="font-bold text-gray-700">
												Experience
											</span>
											<span className="font-black text-2xl text-gray-900">
												5+ Years
											</span>
										</div>
										<div className="flex items-center justify-between">
											<span className="font-bold text-gray-700">
												Projects Completed
											</span>
											<span className="font-black text-2xl text-gray-900">
												50+
											</span>
										</div>
										<div className="flex items-center justify-between">
											<span className="font-bold text-gray-700">
												Systems Built
											</span>
											<span className="font-black text-2xl text-gray-900">
												15+
											</span>
										</div>
										<div className="flex items-center justify-between">
											<span className="font-bold text-gray-700">
												Uptime Maintained
											</span>
											<span className="font-black text-2xl text-cyan-600">
												99.9%
											</span>
										</div>
									</div>
								</div>
							</motion.div>
						</div>
					</div>
				</section>

				{/* Projects Section */}
				<section className="relative bg-gray-50 py-24">
					<div className="mx-auto max-w-6xl px-6">
						<motion.div
							className="mb-16 text-center"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7 }}
							viewport={{ once: true }}
						>
							<h2 className="mb-6 font-black text-5xl text-gray-900">
								FEATURED PROJECTS
							</h2>
							<div className="mx-auto h-2 w-24 rounded-full bg-gradient-to-r from-rose-400 to-cyan-400" />
						</motion.div>

						<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
							{[
								{
									title: "HyperTrade Engine",
									description:
										"High-frequency trading system processing 1M+ transactions per second with sub-microsecond latency.",
									tech: ["Rust", "Redis", "PostgreSQL"],
									color: "from-cyan-400 to-blue-500",
									icon: "📈",
								},
								{
									title: "GameSync Network",
									description:
										"Real-time multiplayer backend supporting 100k+ concurrent players with anti-cheat integration.",
									tech: ["Node.js", "Socket.IO", "MongoDB"],
									color: "from-rose-400 to-pink-500",
									icon: "🎮",
								},
								{
									title: "CloudScale API",
									description:
										"Microservices architecture handling 10M+ daily requests with auto-scaling capabilities.",
									tech: ["Go", "Kubernetes", "gRPC"],
									color: "from-gray-400 to-slate-500",
									icon: "☁️",
								},
							].map((project, index) => (
								<motion.div
									key={project.title}
									className="group hover:-translate-y-2 relative overflow-hidden rounded-3xl border-4 border-gray-900 bg-white shadow-[8px_8px_0px_0px_rgba(17,24,39,1)] transition-all duration-300 hover:shadow-[12px_12px_0px_0px_rgba(17,24,39,1)]"
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.7, delay: index * 0.2 }}
									viewport={{ once: true }}
								>
									<div className={`h-2 bg-gradient-to-r ${project.color}`} />
									<div className="p-8">
										<div className="mb-4 text-4xl">{project.icon}</div>
										<h3 className="mb-3 font-black text-gray-900 text-xl">
											{project.title}
										</h3>
										<p className="mb-6 text-gray-700 leading-relaxed">
											{project.description}
										</p>
										<div className="flex flex-wrap gap-2">
											{project.tech.map((tech) => (
												<span
													key={tech}
													className="rounded-full border border-gray-300 bg-gray-100 px-3 py-1 font-bold text-gray-700 text-xs"
												>
													{tech}
												</span>
											))}
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* Skills Section */}
				<section className="relative bg-white py-24">
					<div className="mx-auto max-w-6xl px-6">
						<motion.div
							className="mb-16 text-center"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7 }}
							viewport={{ once: true }}
						>
							<h2 className="mb-6 font-black text-5xl text-gray-900">
								TECHNICAL EXPERTISE
							</h2>
							<div className="mx-auto h-2 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-rose-400" />
						</motion.div>

						<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
							{[
								{
									category: "Languages",
									skills: ["Rust", "Go", "Node.js", "Python", "TypeScript"],
									icon: "🚀",
									color: "bg-cyan-100 border-cyan-300",
								},
								{
									category: "Databases",
									skills: [
										"PostgreSQL",
										"Redis",
										"MongoDB",
										"ClickHouse",
										"Elasticsearch",
									],
									icon: "🗄️",
									color: "bg-rose-100 border-rose-300",
								},
								{
									category: "Infrastructure",
									skills: [
										"Kubernetes",
										"Docker",
										"AWS",
										"Terraform",
										"Prometheus",
									],
									icon: "⚡",
									color: "bg-gray-100 border-gray-300",
								},
								{
									category: "Protocols",
									skills: [
										"gRPC",
										"WebSockets",
										"GraphQL",
										"REST",
										"Apache Kafka",
									],
									icon: "🌐",
									color: "bg-amber-100 border-amber-300",
								},
							].map((skillGroup, index) => (
								<motion.div
									key={skillGroup.category}
									className={`rounded-3xl border-4 border-gray-900 ${skillGroup.color} p-6 shadow-[6px_6px_0px_0px_rgba(17,24,39,1)]`}
									initial={{ opacity: 0, scale: 0.8 }}
									whileInView={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.7, delay: index * 0.1 }}
									viewport={{ once: true }}
								>
									<div className="mb-4 text-3xl">{skillGroup.icon}</div>
									<h3 className="mb-4 font-black text-gray-900 text-lg">
										{skillGroup.category}
									</h3>
									<div className="space-y-2">
										{skillGroup.skills.map((skill) => (
											<div
												key={skill}
												className="rounded-full border-2 border-gray-300 bg-white px-3 py-1 font-bold text-gray-700 text-sm"
											>
												{skill}
											</div>
										))}
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* Contact Section */}
				<section className="relative bg-gray-900 py-24">
					<div className="mx-auto max-w-6xl px-6">
						<motion.div
							className="mb-16 text-center"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7 }}
							viewport={{ once: true }}
						>
							<h2 className="mb-6 font-black text-5xl text-white">
								LET'S BUILD SOMETHING AMAZING
							</h2>
							<div className="mx-auto h-2 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-rose-400" />
						</motion.div>

						<motion.div
							className="mx-auto max-w-4xl text-center"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.2 }}
							viewport={{ once: true }}
						>
							<p className="mb-12 text-gray-300 text-xl leading-relaxed">
								Ready to scale your backend infrastructure? Looking for someone
								who can handle the complex stuff while keeping things simple?
								Let's talk.
							</p>

							<div className="mb-12 flex flex-wrap justify-center gap-6">
								{[
									{ label: "Email", value: "tom@example.com", icon: "✉️" },
									{ label: "Location", value: "Remote / EU", icon: "📍" },
									{
										label: "Availability",
										value: "Open to opportunities",
										icon: "💼",
									},
								].map((contact) => (
									<div
										key={contact.label}
										className="flex items-center gap-3 rounded-full border-2 border-gray-700 bg-gray-800 px-6 py-3 text-white"
									>
										<span className="text-xl">{contact.icon}</span>
										<div>
											<div className="font-bold text-sm">{contact.label}</div>
											<div className="text-gray-300 text-sm">
												{contact.value}
											</div>
										</div>
									</div>
								))}
							</div>

							<motion.button
								className="relative overflow-hidden rounded-full border-4 border-white bg-gradient-to-r from-cyan-400 to-rose-400 px-12 py-6 font-black text-white text-xl shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
								whileHover={{
									y: -4,
									boxShadow: "12px 12px 0px 0px rgba(255,255,255,1)",
									transition: { duration: 0.2 },
								}}
								whileTap={{
									y: 0,
									boxShadow: "4px 4px 0px 0px rgba(255,255,255,1)",
									transition: { duration: 0.1 },
								}}
							>
								GET IN TOUCH
							</motion.button>
						</motion.div>
					</div>
				</section>
			</main>
		</>
	);
}
