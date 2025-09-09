"use client";

import { animate, createScope, type Scope, stagger } from "animejs";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ActI() {
	const sectionRef = useRef<HTMLElement>(null);
	const scope = useRef<Scope | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						scope.current = createScope({ root: sectionRef }).add((_self) => {
							// Advanced locomotive-style entrance
							animate(".light-burst", {
								scale: [0, 3, 1.2],
								opacity: [0, 0.8, 0.3],
								duration: 3000,
								ease: "outElastic(1, 0.6)",
							});

							// Sophisticated title reveal with multiple layers
							animate(".hero-title", {
								translateY: [150, 0],
								opacity: [0, 1],
								scale: [0.8, 1.02, 1],
								rotateX: [45, 0],
								duration: 1500,
								ease: "outBack(2)",
							});

							// Staggered subtitle with elastic bounce
							setTimeout(() => {
								animate(".hero-subtitle", {
									translateY: [80, -10, 0],
									opacity: [0, 1],
									scale: [0.9, 1.05, 1],
									duration: 1200,
									ease: "outElastic(1, 0.8)",
								});
							}, 400);

							// Tagline with smooth fade and slight rotation
							setTimeout(() => {
								animate(".hero-description", {
									opacity: [0, 1],
									translateY: [40, 0],
									rotateZ: [-2, 0],
									scale: [0.95, 1],
									duration: 900,
									ease: "outQuart",
								});
							}, 800);

							// Advanced particle system animation
							animate(".floating-particle", {
								translateY: [0, -50],
								opacity: [0.3, 1, 0],
								scale: [0.5, 1, 0.3],
								rotate: [0, 180],
								duration: 4000,
								delay: stagger(150),
								ease: "inOutSine",
								loop: true,
							});

							// Locomotive-style scroll indicator
							animate(".scroll-indicator", {
								translateY: [20, 0],
								opacity: [0, 1],
								scale: [0.8, 1],
								duration: 800,
								ease: "outBack(1.7)",
							});
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

	return (
		<section
			ref={sectionRef}
			className="relative flex min-h-screen items-center justify-center overflow-hidden"
		>
			{/* Enhanced background with gradient layers */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-gradient-radial from-purple-900/30 via-black to-black" />
				<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
			</div>

			{/* Advanced light burst system */}
			<div className="light-burst absolute inset-0 bg-gradient-radial from-[#ffb3d9]/40 via-[#ffd6cc]/20 to-transparent opacity-0" />
			<div className="absolute inset-0 bg-gradient-conic from-[#ff9999]/10 via-transparent to-[#ffb3d9]/10 opacity-30" />

			{/* Professional floating particle system */}
			<div className="absolute inset-0">
				{[...Array(25)].map((_, i) => (
					<motion.div
						key={`floating-particle-${i}`}
						className="floating-particle absolute rounded-full"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							width: `${Math.random() * 6 + 2}px`,
							height: `${Math.random() * 6 + 2}px`,
							background: "linear-gradient(45deg, #ffb3d9, #ffd6cc, #ff9999)",
							opacity: 0.3,
						}}
						animate={{
							y: [0, -100, -200],
							x: [0, Math.random() * 50 - 25],
							opacity: [0.3, 0.8, 0],
							scale: [0.5, 1, 0],
						}}
						transition={{
							duration: 6 + Math.random() * 4,
							repeat: Number.POSITIVE_INFINITY,
							delay: Math.random() * 5,
							ease: "easeInOut",
						}}
					/>
				))}
			</div>

			{/* Animated grid background */}
			<div className="absolute inset-0 opacity-5">
				{[...Array(20)].map((_, i) => (
					<motion.div
						key={`grid-line-${i}`}
						className="absolute h-full w-px bg-gradient-to-b from-transparent via-[#ffb3d9] to-transparent"
						style={{ left: `${i * 5}%` }}
						animate={{
							opacity: [0.1, 0.3, 0.1],
						}}
						transition={{
							duration: 4,
							repeat: Number.POSITIVE_INFINITY,
							delay: i * 0.2,
						}}
					/>
				))}
			</div>

			{/* Main content with enhanced typography */}
			<div className="relative z-10 space-y-12 text-center">
				{/* Main title with advanced effects */}
				<div className="relative">
					<motion.h1 className="hero-title relative bg-gradient-to-r from-[#ffb3d9] via-[#ffd6cc] to-[#ff9999] bg-clip-text font-bold text-8xl text-transparent opacity-0 lg:text-9xl">
						AtsuLeVrai
					</motion.h1>

					{/* Title glow effect */}
					<div className="absolute inset-0 bg-gradient-to-r from-[#ffb3d9] via-[#ffd6cc] to-[#ff9999] bg-clip-text font-bold text-8xl text-transparent opacity-20 blur-lg lg:text-9xl">
						AtsuLeVrai
					</div>
				</div>

				{/* Enhanced subtitle */}
				<motion.p className="hero-subtitle text-2xl text-gray-300 opacity-0 lg:text-3xl">
					<span className="font-light">Backend Engineer</span>
					<span className="mx-4 text-[#ffb3d9]">•</span>
					<span className="font-light">Trading Aspirant</span>
					<span className="mx-4 text-[#ffd6cc]">•</span>
					<span className="font-light">Future Game Maker</span>
				</motion.p>

				{/* Philosophical tagline with enhanced styling */}
				<motion.p className="hero-description mx-auto max-w-2xl text-gray-400 text-xl italic leading-relaxed opacity-0">
					"Talk to yourself but don't listen to yourself"
				</motion.p>

				{/* Professional call-to-action buttons */}
				<motion.div
					className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 2, duration: 1 }}
				>
					<motion.button
						className="transform rounded-full bg-gradient-to-r from-[#ffb3d9] to-[#ffd6cc] px-8 py-4 font-semibold text-black shadow-lg transition-all duration-300 hover:shadow-xl"
						whileHover={{
							scale: 1.05,
							boxShadow: "0 20px 40px rgba(255, 179, 217, 0.4)",
							y: -2,
						}}
						whileTap={{ scale: 0.95 }}
					>
						Explore My Work
					</motion.button>

					<motion.button
						className="rounded-full border-2 border-white/20 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/10"
						whileHover={{
							scale: 1.05,
							borderColor: "rgba(255, 179, 217, 0.6)",
							y: -2,
						}}
						whileTap={{ scale: 0.95 }}
					>
						Get In Touch
					</motion.button>
				</motion.div>
			</div>

			{/* Ambient noise overlay */}
			<div className="absolute inset-0 opacity-[0.015]">
				<div
					className="h-full w-full"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='7' cy='47' r='1'/%3E%3Ccircle cx='27' cy='47' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
					}}
				/>
			</div>
		</section>
	);
}
