"use client";

import { animate, createScope, stagger, type Scope } from "animejs";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ActIV() {
	const sectionRef = useRef<HTMLElement>(null);
	const scope = useRef<Scope | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						scope.current = createScope({ root: sectionRef }).add((_self) => {
							// Energy burst effect first
							animate(".energy-burst", {
								scale: [0, 2, 1],
								opacity: [0, 0.8, 0],
								duration: 1500,
								ease: "out(3)",
							});

							// Section title with dramatic entrance
							setTimeout(() => {
								animate(".section-title", {
									opacity: [0, 1],
									scale: [0.8, 1],
									duration: 800,
									ease: "outBack(1.7)",
								});
							}, 200);

							// Project cards with 3D entrance
							setTimeout(() => {
								animate(".project-card", {
									scale: [0.5, 1],
									opacity: [0, 1],
									rotateY: [-90, 0],
									duration: 1000,
									delay: stagger(200),
									ease: "outBack(1.7)",
								});
							}, 800);
						});
					}
				});
			},
			{ threshold: 0.3 },
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			observer.disconnect();
			scope.current?.revert();
		};
	}, []);

	const projects = [
		{
			title: "Visual Portfolio Experience",
			description:
				"An immersive cinematic portfolio inspired by Beat Saber's legendary maps, combining advanced animations and narrative-driven design.",
			technologies: [
				"React",
				"Anime.js",
				"Framer Motion",
				"TypeScript",
				"Next.js",
			],
			color: "#ffb3d9",
			status: "Featured",
			metrics: { performance: "95%", engagement: "+200%" },
		},
		{
			title: "Trading Algorithm Engine",
			description:
				"High-frequency trading system with real-time market data processing and risk management algorithms.",
			technologies: ["Rust", "PostgreSQL", "Redis", "WebSockets", "Docker"],
			color: "#ffd6cc",
			status: "In Progress",
			metrics: { latency: "<1ms", accuracy: "94%" },
		},
		{
			title: "Multiplayer Game Backend",
			description:
				"Scalable backend infrastructure for real-time multiplayer gaming with custom networking protocols.",
			technologies: ["Node.js", "Socket.io", "MongoDB", "AWS", "Kubernetes"],
			color: "#ff9999",
			status: "Planned",
			metrics: { players: "1000+", uptime: "99.9%" },
		},
	];

	return (
		<section
			ref={sectionRef}
			className="relative flex min-h-screen items-center justify-center overflow-hidden py-20"
		>
			{/* Dynamic background */}
			<div className="absolute inset-0">
				<div className="energy-burst absolute inset-0 bg-gradient-radial from-[#ff9999]/20 via-[#ffb3d9]/10 to-transparent opacity-0" />

				{/* Animated grid */}
				<div className="absolute inset-0 opacity-10">
					{[...Array(20)].map((_, i) => (
						<motion.div
							key={`grid-line-${i}`}
							className="absolute border-[#ffb3d9]/30 border-l"
							style={{
								left: `${i * 5}%`,
								height: "100%",
								width: "1px",
							}}
							animate={{
								opacity: [0.1, 0.5, 0.1],
							}}
							transition={{
								duration: 2,
								repeat: Number.POSITIVE_INFINITY,
								delay: i * 0.1,
							}}
						/>
					))}
				</div>

				{/* Energy particles */}
				{[...Array(15)].map((_, i) => (
					<motion.div
						key={`energy-particle-${i}`}
						className="absolute h-2 w-2 rounded-full bg-gradient-to-r from-[#ffb3d9] to-[#ff9999]"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
						}}
						animate={{
							x: [0, Math.random() * 200 - 100],
							y: [0, Math.random() * 200 - 100],
							opacity: [0, 1, 0],
							scale: [0, 1, 0],
						}}
						transition={{
							duration: 4,
							repeat: Number.POSITIVE_INFINITY,
							delay: Math.random() * 2,
						}}
					/>
				))}
			</div>

			<div className="relative z-10 mx-auto max-w-7xl px-8">
				<motion.h2 className="section-title mb-16 bg-gradient-to-r from-[#ff9999] to-[#ffb3d9] bg-clip-text text-center font-bold text-6xl text-transparent opacity-0">
					Mastery Showcase
				</motion.h2>

				<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
					{projects.map((project, _index) => (
						<motion.div
							key={project.title}
							className="project-card group relative rounded-2xl border border-white/10 bg-black/40 p-8 opacity-0 backdrop-blur-xl transition-all duration-500 hover:border-white/30"
							whileHover={{
								y: -20,
								scale: 1.02,
							}}
							style={{
								background: `linear-gradient(135deg, ${project.color}05, transparent)`,
								boxShadow: `0 20px 40px ${project.color}20`,
							}}
						>
							{/* Status badge */}
							<div
								className="absolute top-4 right-4 rounded-full px-3 py-1 font-semibold text-black text-xs"
								style={{ backgroundColor: project.color }}
							>
								{project.status}
							</div>

							{/* Project content */}
							<div className="relative z-10">
								<h3
									className="mb-4 font-bold text-2xl transition-transform duration-300 group-hover:scale-105"
									style={{ color: project.color }}
								>
									{project.title}
								</h3>

								<p className="mb-6 text-gray-300 leading-relaxed">
									{project.description}
								</p>

								{/* Metrics */}
								<div className="mb-6 grid grid-cols-2 gap-4">
									{Object.entries(project.metrics).map(([key, value]) => (
										<div
											key={key}
											className="rounded-lg bg-white/5 p-3 text-center"
										>
											<div
												className="font-bold text-2xl"
												style={{ color: project.color }}
											>
												{value}
											</div>
											<div className="text-gray-400 text-xs capitalize">
												{key}
											</div>
										</div>
									))}
								</div>

								{/* Technologies */}
								<div className="flex flex-wrap gap-2">
									{project.technologies.map((tech) => (
										<motion.span
											key={tech}
											className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-white text-xs"
											whileHover={{
												scale: 1.1,
												backgroundColor: `${project.color}20`,
											}}
										>
											{tech}
										</motion.span>
									))}
								</div>

								{/* Hover effect overlay */}
								<div
									className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
									style={{
										background: `linear-gradient(135deg, ${project.color}15, transparent)`,
									}}
								/>
							</div>

							{/* Animated border on hover */}
							<div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
								<div
									className="absolute inset-0 rounded-2xl"
									style={{
										background: `linear-gradient(90deg, ${project.color}, transparent, ${project.color})`,
										padding: "2px",
									}}
								>
									<div className="h-full w-full rounded-2xl bg-black/40 backdrop-blur-xl" />
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Call to action */}
				<motion.div
					className="mt-16 text-center"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.5 }}
					viewport={{ once: true }}
				>
					<p className="mb-8 text-gray-300 text-xl">
						Each project represents a breakthrough moment in my development
						journey.
					</p>
					<motion.button
						className="rounded-full bg-gradient-to-r from-[#ffb3d9] to-[#ff9999] px-8 py-4 font-semibold text-black text-lg shadow-lg"
						whileHover={{
							scale: 1.05,
							boxShadow: "0 20px 40px rgba(255, 179, 217, 0.3)",
						}}
						whileTap={{ scale: 0.95 }}
					>
						Explore All Projects
					</motion.button>
				</motion.div>
			</div>
		</section>
	);
}
