import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FocusCards } from "../ui/focus-cards";

export default function ProjectsSection() {
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

	const projects = [
		{
			title: "Trading Engine",
			src: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
		},
		{
			title: "Distributed Systems",
			src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=3125&auto=format&fit=crop&ixlib=rb-4.0.3",
		},
		{
			title: "API Gateway",
			src: "https://images.unsplash.com/photo-1562813733-b31f71025d54?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3",
		},
		{
			title: "Game Backend",
			src: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3",
		},
		{
			title: "Real-time Analytics",
			src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3",
		},
		{
			title: "Cloud Architecture",
			src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3",
		},
	];

	return (
		<section ref={sectionRef} className="relative min-h-screen bg-black py-20">
			<div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />

			<motion.div
				className="relative z-10 mx-auto max-w-7xl px-8"
				variants={containerVariants}
				initial="hidden"
				animate={isVisible ? "visible" : "hidden"}
			>
				<div className="mb-16 text-center">
					<motion.h2
						className="mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text font-bold text-6xl text-transparent lg:text-7xl"
						variants={itemVariants}
					>
						Projects
					</motion.h2>

					<motion.p
						className="mx-auto max-w-3xl text-gray-400 text-xl leading-relaxed lg:text-2xl"
						variants={itemVariants}
					>
						A collection of systems and applications that showcase technical
						expertise and innovative solutions to complex problems.
					</motion.p>
				</div>

				<motion.div variants={itemVariants}>
					<FocusCards cards={projects} />
				</motion.div>

				<motion.div
					className="mt-16 grid gap-6 md:grid-cols-3"
					variants={itemVariants}
				>
					<div className="rounded-2xl border border-gray-800 bg-gray-900/30 p-6 backdrop-blur-sm">
						<div className="mb-4 font-bold text-3xl text-indigo-400">15+</div>
						<div className="font-semibold text-lg text-white">
							Projects Completed
						</div>
						<div className="text-gray-400 text-sm">
							Production-ready systems
						</div>
					</div>

					<div className="rounded-2xl border border-gray-800 bg-gray-900/30 p-6 backdrop-blur-sm">
						<div className="mb-4 font-bold text-3xl text-purple-400">99.9%</div>
						<div className="font-semibold text-lg text-white">Uptime</div>
						<div className="text-gray-400 text-sm">System reliability</div>
					</div>

					<div className="rounded-2xl border border-gray-800 bg-gray-900/30 p-6 backdrop-blur-sm">
						<div className="mb-4 font-bold text-3xl text-pink-400">&lt;1ms</div>
						<div className="font-semibold text-lg text-white">Latency</div>
						<div className="text-gray-400 text-sm">Average response time</div>
					</div>
				</motion.div>

				<motion.div className="mt-12 text-center" variants={itemVariants}>
					<motion.button
						className="rounded-xl border border-gray-600 bg-gray-900/50 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-gray-500 hover:bg-gray-800/50"
						whileHover={{ scale: 1.02, y: -2 }}
						whileTap={{ scale: 0.98 }}
					>
						View All Projects
					</motion.button>
				</motion.div>
			</motion.div>
		</section>
	);
}
