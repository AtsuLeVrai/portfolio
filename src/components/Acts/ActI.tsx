"use client";

import { animate, createScope, type Scope } from "animejs";
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
							// Light burst effect
							animate(".light-burst", {
								scale: [0, 1.5, 1],
								opacity: [0, 1, 0.8],
								duration: 2000,
								ease: "out(3)",
							});

							// Text reveal sequence with delays
							animate(".hero-title", {
								translateY: [50, 0],
								opacity: [0, 1],
								duration: 1000,
								ease: "out(3)",
							});

							setTimeout(() => {
								animate(".hero-subtitle", {
									translateY: [30, 0],
									opacity: [0, 1],
									duration: 800,
									ease: "out(3)",
								});
							}, 500);

							setTimeout(() => {
								animate(".hero-description", {
									opacity: [0, 1],
									duration: 600,
									ease: "out(3)",
								});
							}, 800);
						});
					}
				});
			},
			{ threshold: 0.5 },
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
			{/* Background gradient */}
			<div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-black to-black" />

			{/* Light burst effect */}
			<div className="light-burst absolute inset-0 bg-gradient-radial from-[#ffb3d9]/30 via-transparent to-transparent opacity-0" />

			{/* Animated particles */}
			<div className="absolute inset-0">
				{[...Array(20)].map((_, i) => (
					<motion.div
						key={`particle-${i}`}
						className="absolute h-1 w-1 rounded-full bg-[#ffb3d9]"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
						}}
						animate={{
							opacity: [0, 1, 0],
							scale: [0, 1, 0],
						}}
						transition={{
							duration: 3,
							repeat: Number.POSITIVE_INFINITY,
							delay: Math.random() * 2,
						}}
					/>
				))}
			</div>

			{/* Main content */}
			<div className="relative z-10 space-y-8 text-center">
				<motion.h1 className="hero-title bg-gradient-to-r from-[#ffb3d9] via-[#ffd6cc] to-[#ff9999] bg-clip-text font-bold text-8xl text-transparent opacity-0">
					AtsuLeVrai
				</motion.h1>

				<motion.p className="hero-subtitle text-2xl text-gray-300 opacity-0">
					Backend Engineer. Trading Aspirant. Future Game Maker.
				</motion.p>

				<motion.p className="hero-description mx-auto max-w-2xl text-gray-500 text-xl italic opacity-0">
					"Talk to yourself but don't listen to yourself"
				</motion.p>
			</div>
		</section>
	);
}
