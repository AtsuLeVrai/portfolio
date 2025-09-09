"use client";

import { animate, createScope, stagger, type Scope } from "animejs";
import { motion } from "framer-motion";
import { useEffect, useRef, useId } from "react";

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
							// Section title first
							animate(".section-title", {
								opacity: [0, 1],
								translateY: [50, 0],
								duration: 800,
								ease: "out(3)",
							});

							// Organic path drawing animation
							if (pathRef.current) {
								const pathLength = pathRef.current.getTotalLength();
								pathRef.current.style.strokeDasharray = pathLength.toString();
								pathRef.current.style.strokeDashoffset = pathLength.toString();

								animate(pathRef.current, {
									strokeDashoffset: [pathLength, 0],
									duration: 3000,
									ease: "inOut(2)",
								});
							}

							// Tech stack animation with delay
							setTimeout(() => {
								animate(".tech-item", {
									scale: [0, 1],
									opacity: [0, 1],
									duration: 600,
									delay: stagger(100),
									ease: "outElastic(1, 0.8)",
								});
							}, 1000);
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

	const technologies = [
		{ name: "TypeScript", level: 95, color: "#3178c6" },
		{ name: "Node.js", level: 90, color: "#339933" },
		{ name: "React", level: 88, color: "#61dafb" },
		{ name: "Rust", level: 75, color: "#000000" },
		{ name: "PostgreSQL", level: 85, color: "#336791" },
		{ name: "Docker", level: 80, color: "#2496ed" },
		{ name: "AWS", level: 78, color: "#ff9900" },
		{ name: "Next.js", level: 92, color: "#000000" },
	];

	return (
		<section
			ref={sectionRef}
			className="relative flex min-h-screen items-center justify-center py-20"
		>
			{/* Organic background */}
			<div className="absolute inset-0 overflow-hidden">
				<svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 800" aria-hidden="true">
					<title>Organic Growth Path</title>
					<defs>
						<linearGradient
							id={gradientId}
							x1="0%"
							y1="0%"
							x2="100%"
							y2="100%"
						>
							<stop offset="0%" stopColor="#ffb3d9" stopOpacity="0.3" />
							<stop offset="50%" stopColor="#ffd6cc" stopOpacity="0.2" />
							<stop offset="100%" stopColor="#ff9999" stopOpacity="0.1" />
						</linearGradient>
					</defs>
					<path
						ref={pathRef}
						d="M0,400 Q200,200 400,350 T800,300 Q1000,250 1200,400"
						stroke={`url(#${gradientId})`}
						strokeWidth="3"
						fill="none"
						strokeDasharray="2000"
						strokeDashoffset="2000"
					/>
				</svg>
			</div>

			{/* Floating organic shapes */}
			<div className="absolute inset-0">
				{[...Array(6)].map((_, i) => (
					<motion.div
						key={`organic-shape-${i}`}
						className="absolute"
						style={{
							left: `${20 + i * 15}%`,
							top: `${30 + Math.sin(i * 2) * 20}%`,
							width: `${60 + i * 10}px`,
							height: `${60 + i * 10}px`,
						}}
						animate={{
							rotate: [0, 360],
							scale: [1, 1.2, 1],
						}}
						transition={{
							duration: 10 + i * 2,
							repeat: Number.POSITIVE_INFINITY,
							ease: "linear",
						}}
					>
						<div
							className="h-full w-full rounded-full bg-gradient-to-br opacity-10"
							style={{
								background: `linear-gradient(${45 + i * 60}deg, #ffb3d9, #ffd6cc)`,
							}}
						/>
					</motion.div>
				))}
			</div>

			<div className="relative z-10 mx-auto max-w-6xl px-8">
				<motion.h2 className="section-title mb-16 bg-gradient-to-r from-[#f5e6d3] to-[#fff8e1] bg-clip-text text-center font-bold text-5xl text-transparent opacity-0">
					Growth & Evolution
				</motion.h2>

				<div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
					{/* Left side - Journey narrative */}
					<div className="space-y-8">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-6 backdrop-blur-sm"
						>
							<h3 className="mb-4 font-semibold text-2xl text-[#ffb3d9]">
								The Beginning
							</h3>
							<p className="text-gray-300 leading-relaxed">
								Started with simple Scratch programs in elementary school,
								fascinated by the logic of making things move and interact.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							viewport={{ once: true }}
							className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-6 backdrop-blur-sm"
						>
							<h3 className="mb-4 font-semibold text-2xl text-[#ffd6cc]">
								The Exploration
							</h3>
							<p className="text-gray-300 leading-relaxed">
								Dove deep into web technologies, backend systems, and eventually
								discovered the intersection of technology and finance.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							viewport={{ once: true }}
							className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-6 backdrop-blur-sm"
						>
							<h3 className="mb-4 font-semibold text-2xl text-[#ff9999]">
								The Mastery
							</h3>
							<p className="text-gray-300 leading-relaxed">
								Now building scalable systems, trading algorithms, and dreaming
								of the next frontier in gaming technology.
							</p>
						</motion.div>
					</div>

					{/* Right side - Tech stack with levels */}
					<div className="space-y-6">
						<h3 className="mb-8 text-center font-semibold text-3xl text-white">
							Technical Arsenal
						</h3>
						<div className="grid grid-cols-2 gap-4">
							{technologies.map((tech, index) => (
								<motion.div
									key={tech.name}
									className="tech-item relative rounded-xl border border-white/10 bg-white/5 p-4 opacity-0 backdrop-blur-sm"
									whileHover={{ scale: 1.05 }}
								>
									<div className="mb-2 flex items-center justify-between">
										<span className="font-semibold text-white">
											{tech.name}
										</span>
										<span className="text-gray-400 text-sm">{tech.level}%</span>
									</div>
									<div className="h-2 w-full rounded-full bg-gray-800">
										<motion.div
											className="h-2 rounded-full"
											style={{ backgroundColor: tech.color }}
											initial={{ width: 0 }}
											whileInView={{ width: `${tech.level}%` }}
											transition={{ duration: 1, delay: index * 0.1 }}
											viewport={{ once: true }}
										/>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}