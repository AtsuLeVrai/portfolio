"use client";

import { animate, createScope, stagger, type Scope } from "animejs";
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
							// Section title first
							animate(".section-title", {
								opacity: [0, 1],
								translateY: [50, 0],
								duration: 800,
								ease: "out(3)",
							});

							// Glass cards with stagger
							setTimeout(() => {
								animate(".glass-card", {
									translateY: [100, 0],
									opacity: [0, 1],
									scale: [0.8, 1],
									duration: 1000,
									delay: stagger(200),
									ease: "out(3)",
								});
							}, 200);

							// Description last
							setTimeout(() => {
								animate(".section-description", {
									opacity: [0, 1],
									duration: 600,
									ease: "out(3)",
								});
							}, 600);
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

	const skills = [
		{
			title: "Backend Development",
			description: "Scalable APIs and infrastructure design",
			color: "#ffb3d9",
			icon: "🚀",
		},
		{
			title: "Trading Technology",
			description: "Financial tools and trading systems",
			color: "#ffd6cc",
			icon: "📈",
		},
		{
			title: "Game Development",
			description: "Backend services for multiplayer experiences",
			color: "#ff9999",
			icon: "🎮",
		},
	];

	return (
		<section
			ref={sectionRef}
			className="relative flex min-h-screen items-center justify-center py-20"
		>
			{/* Background */}
			<div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />

			{/* Floating glass elements */}
			<div className="absolute inset-0 overflow-hidden">
				{[...Array(8)].map((_, i) => (
					<motion.div
						key={`glass-element-${i}`}
						className="absolute h-32 w-32 rounded-full border border-white/10 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm"
						style={{
							left: `${10 + i * 12}%`,
							top: `${20 + Math.sin(i) * 30}%`,
						}}
						animate={{
							y: [0, -20, 0],
							rotate: [0, 180, 360],
						}}
						transition={{
							duration: 8 + i,
							repeat: Number.POSITIVE_INFINITY,
							ease: "linear",
						}}
					/>
				))}
			</div>

			<div className="relative z-10 mx-auto max-w-6xl px-8 text-center">
				<motion.h2 className="section-title mb-8 bg-gradient-to-r from-[#ffd6cc] to-[#f5e6d3] bg-clip-text font-bold text-5xl text-transparent opacity-0">
					Awakening
				</motion.h2>

				<motion.p className="section-description mx-auto mb-16 max-w-3xl text-gray-300 text-xl leading-relaxed opacity-0">
					From <strong>CM2 Scratch experiments</strong> to{" "}
					<strong>backend mastery</strong> — a narrative of perfectionism,
					self-doubt, and finally breaking through to create something
					extraordinary.
				</motion.p>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					{skills.map((skill, _index) => (
						<motion.div
							key={skill.title}
							className="glass-card group relative rounded-2xl border border-white/10 bg-white/5 p-8 opacity-0 backdrop-blur-lg transition-all duration-500 hover:bg-white/10"
							whileHover={{
								scale: 1.05,
								y: -10,
							}}
							style={{
								boxShadow: `0 8px 32px ${skill.color}20`,
							}}
						>
							{/* Glow effect on hover */}
							<div
								className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
								style={{
									background: `linear-gradient(135deg, ${skill.color}10, transparent)`,
								}}
							/>

							<div className="relative z-10">
								<div className="mb-4 text-4xl">{skill.icon}</div>
								<h3
									className="mb-3 font-semibold text-xl"
									style={{ color: skill.color }}
								>
									{skill.title}
								</h3>
								<p className="text-gray-400 leading-relaxed">
									{skill.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
