"use client";

import { ChevronDown, Zap } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { HERO_STATS, SOCIAL_LINKS } from "@/data/constants";

function StatCard({ value, label }: { value: string; label: string }) {
	return (
		<div className="rounded-2xl border-2 border-gray-300 bg-white/90 p-3 text-center shadow-sm transition-all sm:p-4">
			<div className="font-black text-gray-900 text-xl sm:text-2xl">
				{value}
			</div>
			<div className="font-bold text-gray-600 text-xs sm:text-sm">{label}</div>
		</div>
	);
}

function SocialLinks() {
	return (
		<div className="flex gap-4">
			{SOCIAL_LINKS.map((social, index) => {
				const Icon = social.icon;
				return (
					<motion.a
						key={social.label}
						href={social.href}
						target="_blank"
						rel="noopener noreferrer"
						className={`flex h-14 w-14 items-center justify-center rounded-xl border-3 border-gray-900 bg-white text-gray-900 shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] transition-all md:border-4 ${social.color}`}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
						whileHover={{
							y: -4,
							boxShadow: "6px 6px 0px 0px rgba(17,24,39,1)",
							transition: { duration: 0.2 },
						}}
						whileTap={{
							y: 0,
							boxShadow: "2px 2px 0px 0px rgba(17,24,39,1)",
							transition: { duration: 0.1 },
						}}
						aria-label={social.label}
					>
						<Icon size={24} />
					</motion.a>
				);
			})}
		</div>
	);
}

function FloatingShapes() {
	return (
		<>
			{/* Circle 1 */}
			<motion.div
				className="absolute top-20 left-10 h-24 w-24 rounded-full bg-cyan-300 opacity-30 blur-sm"
				animate={{
					y: [0, -30, 0],
					x: [0, 20, 0],
					rotate: [0, 180, 360],
				}}
				transition={{
					duration: 15,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
				}}
				style={{ zIndex: -1 }}
			/>

			{/* Square 1 */}
			<motion.div
				className="absolute top-40 right-20 h-32 w-32 rotate-45 bg-rose-300 opacity-25 blur-sm"
				animate={{
					y: [0, 40, 0],
					x: [0, -30, 0],
					rotate: [45, 135, 45],
				}}
				transition={{
					duration: 20,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
				}}
				style={{ zIndex: -1 }}
			/>

			{/* Circle 2 */}
			<motion.div
				className="absolute bottom-32 left-1/4 h-20 w-20 rounded-full bg-cyan-400 opacity-35 blur-sm"
				animate={{
					y: [0, 25, 0],
					x: [0, -15, 0],
					scale: [1, 1.2, 1],
				}}
				transition={{
					duration: 12,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
				}}
				style={{ zIndex: -1 }}
			/>

			{/* Triangle (using clip-path) */}
			<motion.div
				className="absolute right-1/4 bottom-40 h-28 w-28 bg-rose-400 opacity-30 blur-sm"
				style={{
					clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
					zIndex: -1,
				}}
				animate={{
					y: [0, -35, 0],
					x: [0, 25, 0],
					rotate: [0, 120, 240, 360],
				}}
				transition={{
					duration: 18,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
				}}
			/>
		</>
	);
}

function ScrollIndicator() {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setIsVisible(false);
			} else {
				setIsVisible(true);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleClick = () => {
		document.getElementById("about")?.scrollIntoView({
			behavior: "smooth",
		});
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.button
					onClick={handleClick}
					className="-translate-x-1/2 absolute bottom-8 left-1/2 cursor-pointer"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
					aria-label="Scroll to about section"
				>
					<motion.div
						animate={{
							y: [0, 10, 0],
						}}
						transition={{
							duration: 2,
							repeat: Number.POSITIVE_INFINITY,
							ease: "easeInOut",
						}}
					>
						<ChevronDown
							className="h-8 w-8 text-gray-900 sm:h-10 sm:w-10"
							strokeWidth={3}
						/>
					</motion.div>
				</motion.button>
			)}
		</AnimatePresence>
	);
}

export function Hero() {
	const { t } = useTranslation();

	return (
		<section
			id="hero"
			className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 via-white to-cyan-50 py-20 sm:py-24 md:py-28"
		>
			<FloatingShapes />
			<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:max-w-[1400px] 2xl:max-w-[1600px]">
				<div className="grid items-center gap-12 sm:gap-16 md:gap-20 lg:grid-cols-2 lg:gap-24 xl:gap-28 2xl:gap-32">
					<motion.div
						className="flex flex-col justify-center space-y-6 md:space-y-8 xl:space-y-10"
						variants={{
							hidden: { opacity: 0 },
							visible: {
								opacity: 1,
								transition: {
									staggerChildren: 0.15,
									delayChildren: 0.2,
								},
							},
						}}
						initial="hidden"
						animate="visible"
					>
						<motion.div
							variants={{
								hidden: { opacity: 0, y: 30 },
								visible: {
									opacity: 1,
									y: 0,
									transition: {
										duration: 0.7,
										ease: [0.25, 0.46, 0.45, 0.94],
									},
								},
							}}
						>
							<h1 className="font-black text-4xl text-gray-900 leading-none tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
								{t("hero.greeting").toUpperCase()},
								<br />
								I'M{" "}
								<span className="bg-gradient-to-r from-purple-600 via-cyan-600 to-rose-600 bg-clip-text text-transparent">
									{t("hero.name")}
								</span>
								!
							</h1>
						</motion.div>

						<motion.div
							variants={{
								hidden: { opacity: 0, y: 30 },
								visible: {
									opacity: 1,
									y: 0,
									transition: {
										duration: 0.7,
										ease: [0.25, 0.46, 0.45, 0.94],
									},
								},
							}}
						>
							<p className="max-w-2xl font-medium text-gray-700 text-lg leading-relaxed sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl">
								{t("hero.role")}
							</p>
						</motion.div>
						<SocialLinks />
					</motion.div>

					{/* Profile Card */}
					<motion.div
						className="relative flex items-center justify-center"
						variants={{
							hidden: { opacity: 0, y: 30 },
							visible: {
								opacity: 1,
								y: 0,
								transition: {
									duration: 0.7,
									ease: [0.25, 0.46, 0.45, 0.94],
								},
							},
						}}
						initial="hidden"
						animate="visible"
					>
						<div className="relative">
							<div className="-top-4 -left-4 absolute h-[28rem] w-96 rotate-2 rounded-3xl border-4 border-gray-900 bg-rose-200 sm:h-[32rem] sm:w-[26rem]" />

							<div className="relative flex h-[28rem] w-96 flex-col items-center justify-center overflow-hidden rounded-3xl border-4 border-gray-900 bg-gradient-to-br from-cyan-50 to-rose-50 p-8 text-center shadow-[8px_8px_0px_0px_rgba(17,24,39,1)] sm:h-[32rem] sm:w-[26rem] sm:p-10">
								<div className="mb-8 flex h-36 w-36 items-center justify-center rounded-full border-4 border-gray-900 bg-gradient-to-br from-purple-400 via-cyan-400 to-rose-400 shadow-lg sm:h-40 sm:w-40">
									<span className="font-black text-5xl text-white sm:text-6xl">
										BE
									</span>
								</div>

								<h3 className="mb-4 font-black text-2xl text-gray-900 sm:text-3xl">
									{t("hero.role").toUpperCase()}
								</h3>

								<p className="mb-8 font-medium text-base text-gray-600 leading-relaxed sm:text-lg">
									{t("hero.description")}
								</p>

								<div className="grid w-full grid-cols-2 gap-4 sm:gap-5">
									<StatCard
										value={HERO_STATS.projects}
										label={t("hero.stats.projects")}
									/>
									<StatCard
										value={HERO_STATS.experience}
										label={t("hero.stats.experience")}
									/>
								</div>
							</div>

							<motion.div
								className="-top-2 -right-2 absolute flex h-14 w-14 items-center justify-center rounded-full border-4 border-gray-900 bg-gradient-to-br from-yellow-400 to-orange-500 text-xl shadow-lg sm:h-16 sm:w-16"
								animate={{
									rotate: [0, 10, -10, 0],
									scale: [1, 1.1, 1],
								}}
								transition={{
									duration: 3,
									repeat: Number.POSITIVE_INFINITY,
									ease: "easeInOut",
								}}
								style={{ willChange: "transform" }}
							>
								<Zap className="h-7 w-7 text-white sm:h-8 sm:w-8" />
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>
			<ScrollIndicator />
		</section>
	);
}
