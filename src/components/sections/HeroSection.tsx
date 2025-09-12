import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

const FLOATING_ORBS = Array.from({ length: 8 }, (_, i) => ({
	id: i,
	x: Math.random() * 100,
	y: Math.random() * 100,
	size: Math.random() * 60 + 40,
	delay: Math.random() * 3,
	duration: 8 + Math.random() * 4,
}));

export default function HeroSection() {
	const patternId = useId();
	const gradientId = useId();
	const sectionRef = useRef<HTMLElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setIsVisible(true);
					}
				}
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
		hidden: { opacity: 0, y: 50, scale: 0.9 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: 1.2,
				ease: [0.23, 1, 0.32, 1],
			},
		},
	} as const;

	return (
		<section
			ref={sectionRef}
			className="relative flex min-h-screen items-center justify-center overflow-hidden"
		>
			<div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black" />

			<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />

			<div className="absolute inset-0">
				{FLOATING_ORBS.map((orb) => (
					<motion.div
						key={orb.id}
						className="absolute rounded-full"
						style={{
							left: `${orb.x}%`,
							top: `${orb.y}%`,
							width: `${orb.size}px`,
							height: `${orb.size}px`,
							background:
								"radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.05) 50%, transparent 70%)",
							filter: "blur(1px)",
						}}
						animate={{
							x: [0, 30, -20, 0],
							y: [0, -40, 20, 0],
							scale: [1, 1.1, 0.9, 1],
							opacity: [0.3, 0.6, 0.4, 0.3],
						}}
						transition={{
							duration: orb.duration,
							repeat: Number.POSITIVE_INFINITY,
							delay: orb.delay,
							ease: "easeInOut",
						}}
					/>
				))}
			</div>

			<div className="absolute inset-0 opacity-20">
				<svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
					<title>Grille de fond décorative</title>
					<defs>
						<pattern
							id={patternId}
							width="80"
							height="80"
							patternUnits="userSpaceOnUse"
						>
							<path
								d="M 80 0 L 0 0 0 80"
								fill="none"
								stroke="url(#gridGradient)"
								strokeWidth="1"
							/>
						</pattern>
						<linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stopColor="rgba(99, 102, 241, 0.3)" />
							<stop offset="100%" stopColor="rgba(139, 92, 246, 0.1)" />
						</linearGradient>
					</defs>
					<rect width="100%" height="100%" fill="url(#grid)" />
				</svg>
			</div>

			<motion.div
				className="absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-3xl"
				animate={{
					scale: [1, 1.2, 1],
					opacity: [0.3, 0.6, 0.3],
					x: [0, 50, 0],
					y: [0, -30, 0],
				}}
				transition={{
					duration: 8,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
				}}
			/>

			<motion.div
				className="absolute right-1/3 bottom-1/3 h-40 w-40 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl"
				animate={{
					scale: [1, 1.3, 1],
					opacity: [0.4, 0.7, 0.4],
					x: [0, -40, 0],
					y: [0, 20, 0],
				}}
				transition={{
					duration: 10,
					repeat: Number.POSITIVE_INFINITY,
					delay: 2,
					ease: "easeInOut",
				}}
			/>

			<motion.div
				className="relative z-10 space-y-12 text-center"
				variants={containerVariants}
				initial="hidden"
				animate={isVisible ? "visible" : "hidden"}
			>
				<motion.div variants={itemVariants}>
					<h1 className="relative bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text font-bold text-7xl text-transparent lg:text-8xl">
						AtsuLeVrai
						<motion.div
							className="-inset-4 -z-10 absolute bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-xl"
							animate={{
								opacity: [0.5, 0.8, 0.5],
							}}
							transition={{
								duration: 3,
								repeat: Number.POSITIVE_INFINITY,
								ease: "easeInOut",
							}}
						/>
					</h1>
				</motion.div>

				<motion.p
					className="bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent text-xl lg:text-2xl"
					variants={itemVariants}
				>
					<span className="font-medium">Backend Engineer</span>
					<span className="mx-4 text-indigo-400">•</span>
					<span className="font-medium">Trading Aspirant</span>
					<span className="mx-4 text-purple-400">•</span>
					<span className="font-medium">Future Game Maker</span>
				</motion.p>

				<motion.p
					className="mx-auto max-w-xl font-medium text-gray-400 text-lg leading-relaxed"
					variants={itemVariants}
				>
					"Talk to yourself but don't listen to yourself"
				</motion.p>

				<motion.div
					className="flex flex-col items-center justify-center gap-6 sm:flex-row"
					variants={itemVariants}
				>
					<motion.button
						className="group relative overflow-hidden rounded-2xl border border-indigo-500/30 bg-black/50 backdrop-blur-xl transition-all duration-500 hover:border-indigo-400/50"
						whileHover={{
							scale: 1.02,
							transition: { type: "spring", stiffness: 1000, damping: 100 },
						}}
						whileTap={{ scale: 0.98 }}
					>
						<div className="relative px-8 py-4">
							<div className="flex items-center gap-3">
								<motion.div
									className="relative z-10"
									animate={{
										x: [0, 4, 0],
									}}
									transition={{
										duration: 1.5,
										repeat: Number.POSITIVE_INFINITY,
										repeatType: "reverse",
									}}
								>
									<ArrowRight className="h-5 w-5 text-indigo-400 transition-colors duration-300 group-hover:text-white" />
								</motion.div>
								<span className="font-semibold text-white transition-colors duration-300">
									View My Work
								</span>
							</div>

							<motion.div
								className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 via-purple-900/30 to-pink-900/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
								layoutId="primaryButtonBg"
							/>

							<motion.div className="-top-1 absolute left-0 h-px w-0 bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-500 group-hover:w-full" />
							<motion.div className="-bottom-1 absolute right-0 h-px w-0 bg-gradient-to-l from-purple-400 to-pink-400 transition-all duration-500 group-hover:w-full" />
						</div>
					</motion.button>

					<motion.button
						className="group relative overflow-hidden rounded-2xl border border-gray-700/50 bg-black/50 backdrop-blur-xl transition-all duration-500 hover:border-indigo-500/30"
						whileHover={{
							scale: 1.02,
							transition: { type: "spring", stiffness: 1000, damping: 100 },
						}}
						whileTap={{ scale: 0.98 }}
					>
						<div className="relative px-8 py-4">
							<div className="flex items-center gap-3">
								<Mail className="h-5 w-5 text-gray-400 transition-colors duration-300 group-hover:text-indigo-400" />
								<span className="font-semibold text-white transition-colors duration-300">
									Contact Me
								</span>
							</div>

							<motion.div
								className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
								layoutId="secondaryButtonBg"
							/>

							<motion.div className="-top-1 absolute left-0 h-px w-0 bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-500 group-hover:w-full" />
							<motion.div className="-bottom-1 absolute right-0 h-px w-0 bg-gradient-to-l from-purple-400 to-pink-400 transition-all duration-500 group-hover:w-full" />
						</div>
					</motion.button>
				</motion.div>
			</motion.div>
		</section>
	);
}
