import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function SkillsSection() {
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
				staggerChildren: 0.1,
				delayChildren: 0.3,
			},
		},
	} as const;

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: [0.23, 1, 0.32, 1],
			},
		},
	} as const;

	const skills = [
		{ name: "TypeScript", level: 95, category: "Languages" },
		{ name: "Rust", level: 88, category: "Languages" },
		{ name: "Node.js", level: 92, category: "Runtime" },
		{ name: "PostgreSQL", level: 90, category: "Databases" },
		{ name: "Redis", level: 85, category: "Databases" },
		{ name: "Docker", level: 88, category: "DevOps" },
		{ name: "Kubernetes", level: 82, category: "DevOps" },
		{ name: "AWS", level: 86, category: "Cloud" },
		{ name: "React", level: 90, category: "Frontend" },
		{ name: "Next.js", level: 88, category: "Frameworks" },
		{ name: "GraphQL", level: 85, category: "APIs" },
		{ name: "WebSockets", level: 92, category: "Real-time" },
	];

	const categories = Array.from(new Set(skills.map((skill) => skill.category)));

	return (
		<section ref={sectionRef} className="relative min-h-screen bg-black py-20">
			<div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />

			<div className="absolute inset-0 opacity-5">
				<div className="h-full w-full bg-[length:20px_20px] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)]" />
			</div>

			<motion.div
				className="relative z-10 mx-auto max-w-6xl px-8"
				variants={containerVariants}
				initial="hidden"
				animate={isVisible ? "visible" : "hidden"}
			>
				<div className="mb-16 text-center">
					<motion.h2
						className="mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text font-bold text-6xl text-transparent lg:text-7xl"
						variants={itemVariants}
					>
						Skills
					</motion.h2>

					<motion.p
						className="mx-auto max-w-3xl text-gray-400 text-xl leading-relaxed lg:text-2xl"
						variants={itemVariants}
					>
						Technical expertise across the full development stack, from
						low-level systems programming to modern web architectures.
					</motion.p>
				</div>

				<div className="space-y-12">
					{categories.map((category, categoryIndex) => (
						<motion.div
							key={category}
							className="space-y-6"
							variants={itemVariants}
							custom={categoryIndex}
						>
							<h3 className="font-semibold text-2xl text-white">{category}</h3>

							<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
								{skills
									.filter((skill) => skill.category === category)
									.map((skill, index) => (
										<motion.div
											key={skill.name}
											className="group rounded-xl border border-gray-800 bg-gray-900/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gray-700 hover:bg-gray-800/50"
											whileHover={{ scale: 1.02, y: -2 }}
											transition={{
												type: "spring",
												stiffness: 300,
												damping: 30,
											}}
										>
											<div className="mb-3 flex items-center justify-between">
												<h4 className="font-medium text-lg text-white">
													{skill.name}
												</h4>
												<span className="text-gray-400 text-sm">
													{skill.level}%
												</span>
											</div>

											<div className="relative h-2 overflow-hidden rounded-full bg-gray-800">
												<motion.div
													className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
													initial={{ width: 0 }}
													animate={
														isVisible
															? { width: `${skill.level}%` }
															: { width: 0 }
													}
													transition={{
														delay: categoryIndex * 0.2 + index * 0.1 + 0.5,
														duration: 1,
														ease: "easeOut",
													}}
												/>
											</div>

											<div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
												<div className="h-full w-full rounded-xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5" />
											</div>
										</motion.div>
									))}
							</div>
						</motion.div>
					))}
				</div>

				<motion.div
					className="mt-16 grid gap-6 md:grid-cols-3"
					variants={itemVariants}
				>
					<div className="rounded-2xl border border-gray-800 bg-gray-900/30 p-6 text-center backdrop-blur-sm">
						<div className="mb-4 font-bold text-3xl text-indigo-400">5+</div>
						<div className="font-semibold text-lg text-white">
							Years Experience
						</div>
						<div className="text-gray-400 text-sm">
							Professional development
						</div>
					</div>

					<div className="rounded-2xl border border-gray-800 bg-gray-900/30 p-6 text-center backdrop-blur-sm">
						<div className="mb-4 font-bold text-3xl text-purple-400">20+</div>
						<div className="font-semibold text-lg text-white">Technologies</div>
						<div className="text-gray-400 text-sm">
							Actively used in projects
						</div>
					</div>

					<div className="rounded-2xl border border-gray-800 bg-gray-900/30 p-6 text-center backdrop-blur-sm">
						<div className="mb-4 font-bold text-3xl text-pink-400">∞</div>
						<div className="font-semibold text-lg text-white">Learning</div>
						<div className="text-gray-400 text-sm">Continuous improvement</div>
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
}
