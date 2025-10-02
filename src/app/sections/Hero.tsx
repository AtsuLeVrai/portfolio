"use client";

import { motion } from "motion/react";
import { memo, useId, useRef } from "react";
import { ProfileCard } from "@/components/ProfileCard";
import { SkillTags } from "@/components/SkillTags";
import { WindowControls } from "@/components/WindowControls";
import { ANIMATION_VARIANTS, MOTION_CONFIG } from "@/constants";
import { useScrollEffects } from "@/hooks/useScrollEffects";

const BrowserHeader = memo(() => (
	<div className="flex items-center gap-3 border-gray-900 border-b-4 bg-gray-100 px-6 py-4">
		<WindowControls />
		<div className="rounded-full border-2 border-gray-900 bg-white px-4 py-1 font-mono text-gray-900 text-sm">
			localhost:3000
		</div>
	</div>
));

BrowserHeader.displayName = "BrowserHeader";

const HeroContent = memo(() => (
	<motion.div
		className="flex flex-col justify-center space-y-4 md:space-y-6 xl:space-y-8"
		variants={ANIMATION_VARIANTS.container}
		initial="hidden"
		animate="visible"
	>
		<motion.div variants={ANIMATION_VARIANTS.item}>
			<h1 className="font-black text-3xl text-gray-900 leading-none tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
				HI,
				<br />
				I'M{" "}
				<span className="bg-gradient-to-r from-cyan-600 to-rose-600 bg-clip-text text-transparent">
					TOM
				</span>
				!
			</h1>
		</motion.div>

		<motion.div variants={ANIMATION_VARIANTS.item}>
			<p className="max-w-lg font-medium text-base text-gray-700 leading-relaxed sm:text-lg md:text-xl lg:text-2xl xl:text-2xl">
				Backend Engineer crafting scalable systems and innovative digital
				experiences with precision and creativity.
			</p>
		</motion.div>

		<motion.div variants={ANIMATION_VARIANTS.item}>
			<SkillTags />
		</motion.div>

		<motion.div variants={ANIMATION_VARIANTS.item}>
			<motion.button
				className="relative overflow-hidden rounded-full border-3 border-gray-900 bg-cyan-400 px-6 py-3 font-black text-base text-gray-900 shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] sm:px-8 sm:py-4 sm:text-lg md:border-4"
				whileHover={MOTION_CONFIG.buttonHover}
				whileTap={MOTION_CONFIG.buttonTap}
				onClick={() => {
					document.getElementById("projects")?.scrollIntoView({
						behavior: "smooth",
					});
				}}
				style={{ willChange: "transform" }}
			>
				VIEW MY WORK
			</motion.button>
		</motion.div>
	</motion.div>
));

HeroContent.displayName = "HeroContent";

const HeroFooter = memo(() => (
	<motion.div
		className="relative border-gray-900 border-t-4 bg-gradient-to-br from-gray-50 to-gray-100 p-8"
		variants={ANIMATION_VARIANTS.item}
		initial="hidden"
		animate="visible"
	>
		<div className="flex items-center justify-between">
			<motion.div
				className="flex-1"
				initial={{ opacity: 0, x: -20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.5 }}
			>
				<p className="font-bold text-gray-700 text-lg italic">
					"Ready to build something amazing together?"
				</p>
			</motion.div>
		</div>

		<motion.div
			className="mt-6 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-rose-400 to-cyan-400"
			initial={{ scaleX: 0 }}
			animate={{ scaleX: 1 }}
			transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
			style={{ willChange: "transform" }}
		/>
	</motion.div>
));

HeroFooter.displayName = "HeroFooter";

export const Hero = memo(() => {
	const containerRef = useRef<HTMLDivElement>(null);
	const { frameScale, rotation, contentY, contentScale, contentRotation } =
		useScrollEffects();

	return (
		<section id={useId()} className="relative">
			<div className="fixed inset-0 z-0 bg-black" />

			<div className="relative text-white">
				<div className="relative" style={{ height: "280vh" }}>
					<div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
						<motion.div
							ref={containerRef}
							className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-rose-50 via-white to-cyan-50"
							style={{
								scale: frameScale,
								rotate: rotation,
								transformOrigin: "center center",
								willChange: "transform",
							}}
						>
							<motion.div
								className="relative z-10 mx-4 w-full max-w-6xl overflow-hidden rounded-2xl border-3 border-gray-900 bg-white/95 shadow-[8px_8px_0px_0px_rgba(17,24,39,1)] backdrop-blur-sm sm:mx-6 md:rounded-3xl md:border-4 md:shadow-[12px_12px_0px_0px_rgba(17,24,39,1)] xl:max-w-7xl 2xl:max-w-[1600px]"
								variants={ANIMATION_VARIANTS.card}
								initial="hidden"
								animate="visible"
							>
								<BrowserHeader />

								<div className="relative h-[500px] overflow-hidden bg-white/95 sm:h-[550px] md:h-[600px] lg:h-[650px] xl:h-[700px] 2xl:h-[800px]">
									<motion.div
										className="absolute inset-0"
										style={{
											y: contentY,
											scale: contentScale,
											rotate: contentRotation,
											transformOrigin: "center center",
											willChange: "transform",
										}}
									>
										<div className="flex h-full items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
											<div className="grid w-full max-w-5xl gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16 2xl:max-w-6xl">
												<HeroContent />
												<ProfileCard />
											</div>
										</div>
									</motion.div>
								</div>

								<HeroFooter />
							</motion.div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
});

Hero.displayName = "Hero";
