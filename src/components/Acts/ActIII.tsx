"use client";

import { animate, createScope, type Scope, stagger } from "animejs";
import { motion } from "framer-motion";
import { useEffect, useId, useRef } from "react";

export default function ActIII() {
	const sectionRef = useRef<HTMLElement>(null);
	const pathRef = useRef<SVGPathElement>(null);
	const scope = useRef<Scope | null>(null);
	const gradientId = useId();

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						scope.current = createScope({ root: sectionRef }).add((_self) => {
							// Professional title reveal with morphing
							animate(".section-title", {
								opacity: [0, 1],
								translateY: [100, 0],
								scale: [0.7, 1.05, 1],
								rotateX: [30, 0],
								duration: 1600,
								ease: "outBack(1.5)",
							});

							// Advanced organic path drawing
							if (pathRef.current) {
								const pathLength = pathRef.current.getTotalLength();
								pathRef.current.style.strokeDasharray = pathLength.toString();
								pathRef.current.style.strokeDashoffset = pathLength.toString();

								animate(pathRef.current, {
									strokeDashoffset: [pathLength, 0],
									duration: 4000,
									ease: "inOutExpo",
								});
							}

							// Locomotive-style journey cards entrance
							animate(".journey-card", {
								translateY: [150, -20, 0],
								opacity: [0, 1],
								scale: [0.8, 1.02, 1],
								rotateY: [15, 0],
								duration: 1400,
								delay: stagger(300),
								ease: "outBack(1.3)",
							});

							// Professional tech stack animation
							setTimeout(() => {
								animate(".tech-item", {
									scale: [0, 1.1, 1],
									opacity: [0, 1],
									rotateZ: [-10, 5, 0],
									duration: 800,
									delay: stagger(100),
									ease: "outElastic(1, 0.6)",
								});
							}, 1200);

							// Advanced floating organic shapes
							animate(".organic-shape", {
								translateY: [0, -40, 0],
								rotateZ: [0, 360],
								scale: [1, 1.3, 1],
								opacity: [0.1, 0.4, 0.1],
								duration: 12000,
								delay: stagger(800),
								ease: "inOutSine",
								loop: true,
							});

							// Particle system activation
							animate(".growth-particle", {
								translateY: [0, -150],
								opacity: [0, 1, 0],
								scale: [0.3, 1, 0.3],
								rotateZ: [0, 180],
								duration: 6000,
								delay: stagger(200),
								ease: "inOutQuart",
								loop: true,
							});
						});
					}
				});
			},
			{ threshold: 0.25 },
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			observer.disconnect();
			scope.current?.revert();
		};
	}, []);

	const journeySteps = [
		{
			phase: "The Beginning",
			title: "Childhood Curiosity",
			description:
				"Started with Scratch programming in elementary school, building simple games and animations that sparked a lifelong passion for creating digital experiences.",
			year: "2010",
			color: "#ffb3d9",
			icon: "🌱",
			achievements: [
				"First Scratch game",
				"Basic logic concepts",
				"Creative problem solving",
			],
		},
		{
			phase: "The Exploration",
			title: "Web Technologies Deep Dive",
			description:
				"Discovered the vast world of web development, diving into HTML, CSS, JavaScript, and eventually backend technologies that opened new possibilities.",
			year: "2018",
			color: "#ffd6cc",
			icon: "🔍",
			achievements: [
				"Full-stack development",
				"Database design",
				"API architecture",
			],
		},
		{
			phase: "The Mastery",
			title: "Enterprise Solutions",
			description:
				"Now architecting scalable systems, building trading algorithms, and designing infrastructure for the next generation of digital experiences.",
			year: "2024",
			color: "#ff9999",
			icon: "🚀",
			achievements: [
				"Microservices architecture",
				"High-frequency trading",
				"Cloud infrastructure",
			],
		},
	];

	const technologies = [
		{ name: "TypeScript", level: 95, color: "#3178c6", category: "Language" },
		{ name: "Node.js", level: 92, color: "#339933", category: "Runtime" },
		{ name: "React", level: 88, color: "#61dafb", category: "Frontend" },
		{ name: "Rust", level: 78, color: "#000000", category: "Language" },
		{ name: "PostgreSQL", level: 85, color: "#336791", category: "Database" },
		{ name: "Docker", level: 82, color: "#2496ed", category: "DevOps" },
		{ name: "AWS", level: 80, color: "#ff9900", category: "Cloud" },
		{ name: "Next.js", level: 90, color: "#000000", category: "Framework" },
	];

	return (
		<section
			ref={sectionRef}
			className="relative flex min-h-screen items-center justify-center py-20"
		>
			{/* Advanced organic background system */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black" />
				<div className="absolute inset-0 bg-gradient-radial from-transparent via-emerald-900/10 to-transparent" />
			</div>

			{/* Professional SVG path system */}
			<div className="absolute inset-0 overflow-hidden">
				<svg
					className="absolute inset-0 h-full w-full"
					viewBox="0 0 1200 800"
					aria-hidden="true"
				>
					<title>Growth Evolution Path</title>
					<defs>
						<linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stopColor="#ffb3d9" stopOpacity="0.6" />
							<stop offset="50%" stopColor="#ffd6cc" stopOpacity="0.4" />
							<stop offset="100%" stopColor="#ff9999" stopOpacity="0.6" />
						</linearGradient>

						{/* Advanced filter effects */}
						<filter id="glow">
							<feGaussianBlur stdDeviation="3" result="coloredBlur" />
							<feMerge>
								<feMergeNode in="coloredBlur" />
								<feMergeNode in="SourceGraphic" />
							</feMerge>
						</filter>
					</defs>

					{/* Main growth path */}
					<path
						ref={pathRef}
						d="M0,600 Q300,100 600,400 Q900,700 1200,200"
						stroke={`url(#${gradientId})`}
						strokeWidth="4"
						fill="none"
						filter="url(#glow)"
						strokeDasharray="2000"
						strokeDashoffset="2000"
					/>

					{/* Additional decorative paths */}
					<path
						d="M0,500 Q400,200 800,600 Q1000,300 1200,500"
						stroke="#ffd6cc"
						strokeWidth="2"
						fill="none"
						opacity="0.3"
						strokeDasharray="10,5"
					/>
				</svg>
			</div>

			{/* Advanced floating organic shapes */}
			<div className="absolute inset-0">
				{[...Array(8)].map((_, i) => (
					<motion.div
						key={`organic-shape-${i}`}
						className="organic-shape absolute"
						style={{
							left: `${15 + i * 12}%`,
							top: `${20 + Math.sin(i * 2.5) * 25}%`,
							width: `${100 + i * 20}px`,
							height: `${100 + i * 20}px`,
						}}
						animate={{
							rotate: [0, 360],
							scale: [1, 1.3, 1],
							opacity: [0.1, 0.4, 0.1],
						}}
						transition={{
							duration: 15 + i * 3,
							repeat: Number.POSITIVE_INFINITY,
							ease: "linear",
						}}
					>
						<div
							className="h-full w-full rounded-full"
							style={{
								background: `conic-gradient(from ${i * 45}deg, #ffb3d9, #ffd6cc, #ff9999, #ffb3d9)`,
								opacity: 0.1,
								filter: "blur(2px)",
							}}
						/>
					</motion.div>
				))}
			</div>

			{/* Professional particle system */}
			<div className="absolute inset-0">
				{[...Array(30)].map((_, i) => (
					<motion.div
						key={`growth-particle-${i}`}
						className="growth-particle absolute rounded-full"
						style={{
							left: `${Math.random() * 100}%`,
							top: "90%",
							width: `${Math.random() * 4 + 2}px`,
							height: `${Math.random() * 4 + 2}px`,
							background: "linear-gradient(45deg, #ffb3d9, #ffd6cc, #ff9999)",
							opacity: 0,
						}}
						animate={{
							y: [0, -200 - Math.random() * 100],
							x: [0, (Math.random() - 0.5) * 100],
							opacity: [0, 0.8, 0],
							scale: [0.3, 1, 0.3],
						}}
						transition={{
							duration: 8 + Math.random() * 4,
							repeat: Number.POSITIVE_INFINITY,
							delay: Math.random() * 6,
							ease: "easeOut",
						}}
					/>
				))}
			</div>

			<div className="relative z-10 mx-auto max-w-7xl px-8">
				{/* Enhanced section title */}
				<div className="mb-20 text-center">
					<motion.h2 className="section-title relative mb-6 bg-gradient-to-r from-[#f5e6d3] via-[#fff8e1] to-[#ffb3d9] bg-clip-text font-bold text-6xl text-transparent opacity-0 lg:text-8xl">
						Growth & Evolution
					</motion.h2>

					{/* Professional subtitle */}
					<motion.p
						className="mx-auto max-w-3xl text-gray-400 text-xl leading-relaxed"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 1, duration: 1 }}
						viewport={{ once: true }}
					>
						A journey through curiosity, exploration, and mastery — each phase
						building upon the last, creating a foundation for innovation and
						breakthrough thinking.
					</motion.p>
				</div>

				<div className="grid grid-cols-1 items-start gap-20 lg:grid-cols-2">
					{/* Left side - Professional journey timeline */}
					<div className="space-y-12">
						<motion.h3
							className="mb-12 text-center font-bold text-4xl text-white"
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.5, duration: 0.8 }}
							viewport={{ once: true }}
						>
							The Journey
						</motion.h3>

						{journeySteps.map((step, index) => (
							<motion.div
								key={step.phase}
								className="journey-card group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 opacity-0 backdrop-blur-xl"
								whileHover={{
									y: -10,
									scale: 1.02,
									rotateY: 2,
								}}
								style={{
									boxShadow: `0 25px 50px ${step.color}15`,
								}}
							>
								{/* Advanced background effects */}
								<div
									className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
									style={{
										background: `linear-gradient(135deg, ${step.color}10, transparent)`,
									}}
								/>

								{/* Year badge */}
								<motion.div
									className="absolute top-6 right-6 rounded-full px-4 py-2 font-bold text-black text-sm"
									style={{ backgroundColor: step.color }}
									whileHover={{ scale: 1.1, rotate: 5 }}
								>
									{step.year}
								</motion.div>

								<div className="relative z-10">
									{/* Enhanced icon */}
									<motion.div
										className="mb-6 text-6xl"
										whileHover={{ scale: 1.2, rotate: 15 }}
										transition={{ type: "spring", stiffness: 300 }}
									>
										{step.icon}
									</motion.div>

									{/* Phase and title */}
									<div className="mb-6">
										<h4
											className="mb-2 font-semibold text-sm uppercase tracking-wide"
											style={{ color: step.color }}
										>
											{step.phase}
										</h4>
										<h5 className="font-bold text-2xl text-white transition-transform duration-300 group-hover:scale-105">
											{step.title}
										</h5>
									</div>

									{/* Enhanced description */}
									<p className="mb-6 text-gray-300 text-lg leading-relaxed transition-colors duration-300 group-hover:text-white">
										{step.description}
									</p>

									{/* Achievements list */}
									<div className="space-y-2">
										<h6 className="font-semibold text-gray-400 text-sm uppercase tracking-wide">
											Key Achievements
										</h6>
										<div className="flex flex-wrap gap-2">
											{step.achievements.map((achievement, i) => (
												<motion.span
													key={achievement}
													className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-white text-xs"
													whileHover={{
														scale: 1.05,
														backgroundColor: `${step.color}20`,
													}}
													initial={{ opacity: 0, scale: 0 }}
													whileInView={{ opacity: 1, scale: 1 }}
													transition={{
														delay: index * 0.2 + i * 0.1,
														duration: 0.5,
													}}
													viewport={{ once: true }}
												>
													{achievement}
												</motion.span>
											))}
										</div>
									</div>
								</div>

								{/* Hover particle effects */}
								<div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
									{[...Array(6)].map((_, i) => (
										<motion.div
											key={`card-particle-${i}`}
											className="absolute h-1 w-1 rounded-full"
											style={{
												backgroundColor: step.color,
												left: `${Math.random() * 100}%`,
												top: `${Math.random() * 100}%`,
											}}
											animate={{
												y: [0, -20],
												opacity: [0, 1, 0],
												scale: [0, 1, 0],
											}}
											transition={{
												duration: 2,
												repeat: Number.POSITIVE_INFINITY,
												delay: Math.random() * 2,
											}}
										/>
									))}
								</div>
							</motion.div>
						))}
					</div>

					{/* Right side - Advanced tech stack visualization */}
					<div className="space-y-8">
						<motion.h3
							className="mb-12 text-center font-bold text-4xl text-white"
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.5, duration: 0.8 }}
							viewport={{ once: true }}
						>
							Technical Arsenal
						</motion.h3>

						<div className="grid grid-cols-1 gap-6">
							{technologies.map((tech, index) => (
								<motion.div
									key={tech.name}
									className="tech-item group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 opacity-0 backdrop-blur-sm"
									whileHover={{
										scale: 1.03,
										x: 10,
									}}
									style={{
										boxShadow: `0 10px 30px ${tech.color}15`,
									}}
								>
									{/* Category badge */}
									<div className="absolute top-4 right-4 rounded bg-gray-800 px-2 py-1 font-semibold text-gray-400 text-xs">
										{tech.category}
									</div>

									{/* Tech info */}
									<div className="mb-4 flex items-center justify-between">
										<h4 className="font-bold text-white text-xl transition-transform duration-300 group-hover:scale-110">
											{tech.name}
										</h4>
										<span
											className="font-semibold text-sm"
											style={{ color: tech.color }}
										>
											{tech.level}%
										</span>
									</div>

									{/* Advanced progress bar */}
									<div className="relative">
										<div className="h-3 overflow-hidden rounded-full bg-gray-800">
											<motion.div
												className="relative h-full rounded-full"
												style={{ backgroundColor: tech.color }}
												initial={{ width: 0 }}
												whileInView={{ width: `${tech.level}%` }}
												transition={{
													delay: index * 0.1 + 1.5,
													duration: 1.5,
													ease: "easeOut",
												}}
												viewport={{ once: true }}
											>
												{/* Animated glow effect */}
												<motion.div
													className="absolute inset-0 opacity-50"
													style={{
														backgroundColor: tech.color,
														filter: "blur(4px)",
													}}
													animate={{ opacity: [0.3, 0.7, 0.3] }}
													transition={{
														duration: 2,
														repeat: Number.POSITIVE_INFINITY,
													}}
												/>
											</motion.div>
										</div>

										{/* Skill level indicator */}
										<motion.div
											className="-top-8 absolute right-0 rounded bg-black/80 px-2 py-1 font-bold text-xs"
											style={{ color: tech.color }}
											initial={{ opacity: 0, scale: 0 }}
											whileInView={{ opacity: 1, scale: 1 }}
											transition={{ delay: index * 0.1 + 2, duration: 0.5 }}
											viewport={{ once: true }}
										>
											{tech.level > 90
												? "Expert"
												: tech.level > 80
													? "Advanced"
													: "Proficient"}
										</motion.div>
									</div>

									{/* Hover glow effect */}
									<div
										className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
										style={{
											background: `linear-gradient(135deg, ${tech.color}08, transparent)`,
										}}
									/>
								</motion.div>
							))}
						</div>

						{/* Professional summary */}
						<motion.div
							className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-6 backdrop-blur-sm"
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 2.5, duration: 1 }}
							viewport={{ once: true }}
						>
							<h4 className="mb-4 font-semibold text-[#ffb3d9] text-xl">
								Continuous Evolution
							</h4>
							<p className="text-gray-300 leading-relaxed">
								This technical foundation represents years of dedicated
								learning, real-world application, and continuous adaptation to
								emerging technologies. Each skill has been refined through
								hands-on projects and professional challenges.
							</p>
						</motion.div>
					</div>
				</div>
			</div>

			{/* Professional ambient overlay */}
			<div className="absolute inset-0 opacity-[0.015]">
				<div
					className="h-full w-full"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M20 20h40v40H20z M30 30h20v20H30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
					}}
				/>
			</div>
		</section>
	);
}
