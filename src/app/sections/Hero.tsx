"use client";

import { motion } from "motion/react";
import { memo, useId } from "react";
import { ProfileCard } from "@/components/ProfileCard";
import { SkillTags } from "@/components/SkillTags";
import { ANIMATION_VARIANTS, MOTION_CONFIG } from "@/constants";

const HeroContent = memo(() => (
	<motion.div
		className="flex flex-col justify-center space-y-6 md:space-y-8 xl:space-y-10"
		variants={ANIMATION_VARIANTS.container}
		initial="hidden"
		animate="visible"
	>
		<motion.div variants={ANIMATION_VARIANTS.item}>
			<h1 className="font-black text-4xl text-gray-900 leading-none tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
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
			<p className="max-w-2xl font-medium text-gray-700 text-lg leading-relaxed sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl">
				Backend Engineer crafting scalable systems and innovative digital
				experiences with precision and creativity.
			</p>
		</motion.div>

		<motion.div variants={ANIMATION_VARIANTS.item}>
			<SkillTags />
		</motion.div>

		<motion.div variants={ANIMATION_VARIANTS.item}>
			<motion.button
				className="relative overflow-hidden rounded-full border-3 border-gray-900 bg-cyan-400 px-8 py-4 font-black text-gray-900 text-lg shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] sm:px-10 sm:py-5 sm:text-xl md:border-4 xl:px-12 xl:py-6 xl:text-2xl"
				whileHover={MOTION_CONFIG.buttonHover}
				whileTap={MOTION_CONFIG.buttonTap}
				onClick={() => {
					document.getElementById("about")?.scrollIntoView({
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

export const Hero = memo(() => (
	<section
		id={useId()}
		className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-rose-50 via-white to-cyan-50 py-20 sm:py-24 md:py-28"
	>
		<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:max-w-[1400px] 2xl:max-w-[1600px]">
			<div className="grid items-center gap-12 sm:gap-16 md:gap-20 lg:grid-cols-2 lg:gap-24 xl:gap-28 2xl:gap-32">
				<HeroContent />
				<ProfileCard />
			</div>
		</div>
	</section>
));

Hero.displayName = "Hero";
