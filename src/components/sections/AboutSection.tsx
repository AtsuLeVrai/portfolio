import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BackgroundBeams } from "../ui/background-beams";

export default function AboutSection() {
	const sectionRef = useRef<HTMLElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(true);
					}
				});
			},
			{ threshold: 0.2 },
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	} as const;

	const itemVariants = {
		hidden: { opacity: 0, y: 40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.23, 1, 0.32, 1],
			},
		},
	} as const;

	return (
		<section
			ref={sectionRef}
			className="relative flex min-h-screen items-center justify-center bg-black py-20"
		>
			<div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-black to-black" />

			<BackgroundBeams className="opacity-40" />

			<motion.div
				className="relative z-10 mx-auto max-w-4xl px-8 text-center"
				variants={containerVariants}
				initial="hidden"
				animate={isVisible ? "visible" : "hidden"}
			>
				<motion.h2
					className="mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text font-bold text-6xl text-transparent lg:text-7xl"
					variants={itemVariants}
				>
					About
				</motion.h2>

				<motion.p
					className="mb-12 text-gray-300 text-xl leading-relaxed lg:text-2xl"
					variants={itemVariants}
				>
					Building scalable systems and crafting digital experiences with
					precision and innovation.
				</motion.p>

				<motion.div
					className="mx-auto max-w-3xl space-y-8 text-left"
					variants={itemVariants}
				>
					<div className="grid gap-8 md:grid-cols-2">
						<motion.div
							className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm"
							whileHover={{ scale: 1.02, y: -5 }}
							transition={{ type: "spring", stiffness: 300, damping: 30 }}
						>
							<h3 className="mb-4 font-semibold text-white text-xl">
								Backend Engineering
							</h3>
							<p className="text-gray-400 leading-relaxed">
								Architecting robust, scalable systems that handle millions of
								requests with microsecond latency. Specialized in distributed
								systems, microservices, and high-performance APIs.
							</p>
						</motion.div>

						<motion.div
							className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm"
							whileHover={{ scale: 1.02, y: -5 }}
							transition={{ type: "spring", stiffness: 300, damping: 30 }}
						>
							<h3 className="mb-4 font-semibold text-white text-xl">
								Trading Systems
							</h3>
							<p className="text-gray-400 leading-relaxed">
								Developing algorithmic trading platforms with real-time market
								data processing, risk management, and automated execution
								strategies for optimal performance.
							</p>
						</motion.div>

						<motion.div
							className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm"
							whileHover={{ scale: 1.02, y: -5 }}
							transition={{ type: "spring", stiffness: 300, damping: 30 }}
						>
							<h3 className="mb-4 font-semibold text-white text-xl">
								Game Development
							</h3>
							<p className="text-gray-400 leading-relaxed">
								Creating multiplayer game backends with custom networking
								protocols, real-time synchronization, and infrastructure that
								scales to thousands of concurrent players.
							</p>
						</motion.div>

						<motion.div
							className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm"
							whileHover={{ scale: 1.02, y: -5 }}
							transition={{ type: "spring", stiffness: 300, damping: 30 }}
						>
							<h3 className="mb-4 font-semibold text-white text-xl">
								Innovation
							</h3>
							<p className="text-gray-400 leading-relaxed">
								Constantly exploring cutting-edge technologies and methodologies
								to push the boundaries of what's possible in software
								development and system architecture.
							</p>
						</motion.div>
					</div>

					<motion.div
						className="mt-12 rounded-2xl border border-gray-800 bg-gray-900/30 p-8 text-center backdrop-blur-sm"
						variants={itemVariants}
					>
						<p className="text-gray-300 text-lg italic leading-relaxed">
							"Talk to yourself but don't listen to yourself"
						</p>
						<p className="mt-4 text-gray-500 text-sm">
							A philosophy that drives continuous improvement and
							self-reflection in every project.
						</p>
					</motion.div>
				</motion.div>
			</motion.div>
		</section>
	);
}
