"use client";

import { motion } from "motion/react";
import { memo, useRef } from "react";
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
		className="flex flex-col justify-center space-y-8"
		variants={ANIMATION_VARIANTS.container}
		initial="hidden"
		animate="visible"
	>
		<motion.div variants={ANIMATION_VARIANTS.item}>
			<h1 className="font-black text-5xl text-gray-900 leading-none tracking-tight md:text-6xl lg:text-7xl">
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
			<p className="max-w-lg font-medium text-gray-700 text-xl leading-relaxed md:text-2xl">
				Backend Engineer crafting scalable systems and innovative digital
				experiences with precision and creativity.
			</p>
		</motion.div>

		<motion.div variants={ANIMATION_VARIANTS.item}>
			<SkillTags />
		</motion.div>

		<motion.div variants={ANIMATION_VARIANTS.item}>
			<motion.button
				className="relative overflow-hidden rounded-full border-4 border-gray-900 bg-cyan-400 px-8 py-4 font-black text-gray-900 text-lg shadow-[6px_6px_0px_0px_rgba(17,24,39,1)]"
				whileHover={MOTION_CONFIG.buttonHover}
				whileTap={MOTION_CONFIG.buttonTap}
				style={{ willChange: "transform" }}
			>
				VIEW MY WORK
			</motion.button>
		</motion.div>
	</motion.div>
));

HeroContent.displayName = "HeroContent";

const Footer = memo(() => (
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

Footer.displayName = "Footer";

export default function HomePage() {
	const containerRef = useRef<HTMLDivElement>(null);
	const { frameScale, rotation, contentY, contentScale, contentRotation } =
		useScrollEffects();

	return (
		<>
			<div className="fixed inset-0 z-0 bg-black" />

			<main className="relative text-white">
				<div className="relative" style={{ height: "280vh" }}>
					<div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
						<motion.section
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
								className="relative z-10 mx-6 w-full max-w-6xl overflow-hidden rounded-3xl border-4 border-gray-900 bg-white/95 shadow-[12px_12px_0px_0px_rgba(17,24,39,1)] backdrop-blur-sm"
								variants={ANIMATION_VARIANTS.card}
								initial="hidden"
								animate="visible"
							>
								<BrowserHeader />

								<div className="relative h-[600px] overflow-hidden bg-white/95">
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
										<div className="flex h-full items-center justify-center">
											<div className="grid w-full max-w-4xl gap-12 lg:grid-cols-2 lg:gap-16">
												<HeroContent />
												<ProfileCard />
											</div>
										</div>
									</motion.div>
								</div>

								<Footer />
							</motion.div>
						</motion.section>
					</div>
				</div>
			</main>
		</>
	);
}
