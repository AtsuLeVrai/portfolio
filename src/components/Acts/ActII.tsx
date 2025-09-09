"use client";

import { animate, createScope, type Scope, stagger } from "animejs";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ActII() {
	const sectionRef = useRef<HTMLElement>(null);
	const scope = useRef<Scope | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						scope.current = createScope({ root: sectionRef }).add((_self) => {
							// Professional glass morphing entrance
							animate(".glass-panel", {
								translateY: [150, -20, 0],
								opacity: [0, 0.7, 1],
								scale: [0.7, 1.05, 1],
								rotateX: [30, -5, 0],
								duration: 1800,
								delay: stagger(300),
								ease: "outElastic(1, 0.7)",
							});

							// Advanced section title with multiple layers
							animate(".section-title", {
								translateY: [100, 0],
								opacity: [0, 1],
								scale: [0.8, 1.02, 1],
								rotateZ: [5, 0],
								duration: 1400,
								ease: "outBack(1.5)",
							});

							// Locomotive-style description reveal
							setTimeout(() => {
								animate(".section-description", {
									opacity: [0, 1],
									translateY: [60, 0],
									scale: [0.95, 1],
									duration: 1000,
									ease: "outQuart",
								});
							}, 600);

							// Professional glass card animations
							animate(".glass-card", {
								translateY: [120, 0],
								opacity: [0, 1],
								scale: [0.85, 1],
								rotateX: [25, 0],
								duration: 1200,
								delay: stagger(200),
								ease: "outBack(1.2)",
							});

							// Advanced floating glass elements
							animate(".floating-glass", {
								translateY: [0, -30, 0],
								rotateZ: [0, 180, 360],
								scale: [1, 1.1, 1],
								opacity: [0.3, 0.6, 0.3],
								duration: 8000,
								delay: stagger(400),
								ease: "inOutSine",
								loop: true,
							});
						});
					}
				});
			},
			{ threshold: 0.2 },
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			observer.disconnect();
			scope.current?.revert();
		};
	}, []);

	const skills = [
		{
			title: "Backend Architecture",
			description: "Scalable microservices and distributed systems design",
			color: "#ffb3d9",
			icon: "🏗️",
			gradient: "from-pink-400/20 to-purple-600/20",
		},
		{
			title: "Trading Systems",
			description: "High-frequency algorithms and financial data processing",
			color: "#ffd6cc",
			icon: "📈",
			gradient: "from-orange-400/20 to-red-500/20",
		},
		{
			title: "Game Infrastructure",
			description:
				"Real-time multiplayer backends and game server architecture",
			color: "#ff9999",
			icon: "🎮",
			gradient: "from-red-400/20 to-pink-500/20",
		},
	];

	return (
		<section
			ref={sectionRef}
			className="relative flex min-h-screen items-center justify-center py-20"
		>
			{/* Advanced background system */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/50 to-black" />
				<div className="absolute inset-0 bg-gradient-radial from-transparent via-blue-900/10 to-transparent" />
			</div>

			{/* Professional floating glass system */}
			<div className="absolute inset-0 overflow-hidden">
				{[...Array(12)].map((_, i) => (
					<motion.div
						key={`floating-glass-${i}`}
						className="floating-glass absolute rounded-3xl border border-white/10 backdrop-blur-xl"
						style={{
							left: `${5 + i * 8}%`,
							top: `${10 + Math.sin(i) * 40}%`,
							width: `${80 + i * 15}px`,
							height: `${80 + i * 15}px`,
							background: `linear-gradient(135deg, 
								rgba(255, 255, 255, ${0.05 + i * 0.01}), 
								rgba(255, 179, 217, ${0.03 + i * 0.005})
							)`,
						}}
						animate={{
							y: [0, -50, 0],
							rotate: [0, 360],
							scale: [1, 1.2, 1],
						}}
						transition={{
							duration: 12 + i * 2,
							repeat: Number.POSITIVE_INFINITY,
							ease: "linear",
							delay: i * 0.5,
						}}
					/>
				))}
			</div>

			{/* Animated glass panels background */}
			<div className="absolute inset-0">
				{[...Array(6)].map((_, i) => (
					<motion.div
						key={`glass-panel-${i}`}
						className="glass-panel absolute rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm"
						style={{
							left: `${i * 16}%`,
							top: `${20 + i * 10}%`,
							width: "200px",
							height: "300px",
							transform: `rotate(${i * 15}deg)`,
						}}
						animate={{
							rotateY: [0, 180, 360],
							scale: [1, 1.1, 1],
							opacity: [0.1, 0.3, 0.1],
						}}
						transition={{
							duration: 20 + i * 3,
							repeat: Number.POSITIVE_INFINITY,
							ease: "linear",
						}}
					/>
				))}
			</div>

			<div className="relative z-10 mx-auto max-w-7xl px-8 text-center">
				{/* Enhanced section title */}
				<div className="relative mb-12">
					<motion.h2 className="section-title bg-gradient-to-r from-[#ffd6cc] via-[#f5e6d3] to-[#ffb3d9] bg-clip-text font-bold text-6xl text-transparent opacity-0 lg:text-7xl">
						Awakening
					</motion.h2>

					{/* Title glow effect */}
					<div className="absolute inset-0 bg-gradient-to-r from-[#ffd6cc] via-[#f5e6d3] to-[#ffb3d9] bg-clip-text font-bold text-6xl text-transparent opacity-20 blur-lg lg:text-7xl">
						Awakening
					</div>

					{/* Animated underline */}
					<motion.div
						className="mx-auto mt-6 h-1 bg-gradient-to-r from-transparent via-[#ffd6cc] to-transparent"
						initial={{ width: 0 }}
						whileInView={{ width: "200px" }}
						transition={{ delay: 1.5, duration: 1 }}
						viewport={{ once: true }}
					/>
				</div>

				{/* Enhanced description */}
				<motion.div className="section-description mb-20 opacity-0">
					<p className="mx-auto max-w-4xl text-gray-300 text-xl leading-relaxed lg:text-2xl">
						From{" "}
						<span className="font-semibold text-[#ffb3d9]">
							childhood Scratch experiments
						</span>{" "}
						to{" "}
						<span className="font-semibold text-[#ffd6cc]">
							enterprise-grade systems
						</span>{" "}
						— a journey through perfectionism, self-doubt, and breakthrough
						moments that shaped a developer's philosophy.
					</p>

					<motion.div
						className="mt-8 flex justify-center"
						initial={{ opacity: 0, scale: 0 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ delay: 2, duration: 0.8 }}
						viewport={{ once: true }}
					>
						<div className="flex space-x-2">
							{[...Array(3)].map((_, i) => (
								<motion.div
									key={`dot-${i}`}
									className="h-2 w-2 rounded-full bg-[#ffd6cc]"
									animate={{
										scale: [1, 1.5, 1],
										opacity: [0.5, 1, 0.5],
									}}
									transition={{
										duration: 1.5,
										repeat: Number.POSITIVE_INFINITY,
										delay: i * 0.3,
									}}
								/>
							))}
						</div>
					</motion.div>
				</motion.div>

				{/* Professional skill cards */}
				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					{skills.map((skill, index) => (
						<motion.div
							key={skill.title}
							className="glass-card group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 opacity-0 backdrop-blur-xl transition-all duration-500"
							whileHover={{
								y: -15,
								scale: 1.05,
								rotateY: 5,
							}}
							style={{
								boxShadow: `0 25px 50px ${skill.color}20`,
							}}
						>
							{/* Advanced glow effects */}
							<div
								className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
								style={{
									background: `linear-gradient(135deg, ${skill.color}15, transparent)`,
								}}
							/>

							{/* Animated border on hover */}
							<motion.div
								className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
								style={{
									background: `linear-gradient(45deg, ${skill.color}, transparent, ${skill.color})`,
									padding: "2px",
								}}
								whileHover={{
									background: `linear-gradient(45deg, ${skill.color}, ${skill.color}80, ${skill.color})`,
								}}
							>
								<div className="h-full w-full rounded-3xl bg-black/40 backdrop-blur-xl" />
							</motion.div>

							<div className="relative z-10">
								{/* Enhanced icon with animation */}
								<motion.div
									className="mb-6 text-5xl"
									whileHover={{
										scale: 1.2,
										rotate: 10,
									}}
									transition={{ type: "spring", stiffness: 300 }}
								>
									{skill.icon}
								</motion.div>

								{/* Professional title */}
								<h3
									className="mb-4 font-bold text-2xl transition-all duration-300 group-hover:scale-110"
									style={{ color: skill.color }}
								>
									{skill.title}
								</h3>

								{/* Enhanced description */}
								<p className="text-gray-400 text-lg leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
									{skill.description}
								</p>

								{/* Professional progress indicator */}
								<motion.div
									className="mt-6 h-1 overflow-hidden rounded-full bg-gray-700"
									initial={{ width: 0 }}
									whileInView={{ width: "100%" }}
									transition={{ delay: index * 0.3, duration: 1 }}
									viewport={{ once: true }}
								>
									<motion.div
										className="h-full rounded-full"
										style={{ backgroundColor: skill.color }}
										initial={{ width: 0 }}
										whileInView={{ width: "85%" }}
										transition={{ delay: index * 0.3 + 0.5, duration: 1.5 }}
										viewport={{ once: true }}
									/>
								</motion.div>
							</div>

							{/* Hover particle effects */}
							<div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
								{[...Array(8)].map((_, i) => (
									<motion.div
										key={`particle-${i}`}
										className="absolute h-1 w-1 rounded-full"
										style={{
											backgroundColor: skill.color,
											left: `${Math.random() * 100}%`,
											top: `${Math.random() * 100}%`,
										}}
										animate={{
											y: [0, -30],
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

				{/* Professional call-to-action */}
				<motion.div
					className="mt-16"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.5, duration: 1 }}
					viewport={{ once: true }}
				>
					<motion.button
						className="group relative overflow-hidden rounded-full border border-[#ffd6cc]/30 bg-gradient-to-r from-[#ffd6cc]/20 to-[#ffb3d9]/20 px-8 py-4 font-semibold text-white backdrop-blur-xl"
						whileHover={{
							scale: 1.05,
							boxShadow: "0 20px 40px rgba(255, 214, 204, 0.3)",
						}}
						whileTap={{ scale: 0.95 }}
					>
						<span className="relative z-10">Explore My Journey</span>

						{/* Animated background on hover */}
						<motion.div
							className="absolute inset-0 bg-gradient-to-r from-[#ffd6cc]/30 to-[#ffb3d9]/30"
							initial={{ x: "-100%" }}
							whileHover={{ x: 0 }}
							transition={{ duration: 0.3 }}
						/>
					</motion.button>
				</motion.div>
			</div>

			{/* Professional ambient overlay */}
			<div className="absolute inset-0 opacity-[0.02]">
				<div
					className="h-full w-full"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m25 25h50v50h-50zm10 10h30v30h-30z' fill='%23ffffff' fill-opacity='0.3'/%3E%3C/svg%3E")`,
					}}
				/>
			</div>
		</section>
	);
}
