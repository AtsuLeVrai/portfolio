import { Zap } from "lucide-react";
import { motion } from "motion/react";
import { memo } from "react";
import { ANIMATION_VARIANTS } from "@/constants";

const StatCard = memo(({ value, label }: { value: string; label: string }) => (
	<div className="rounded-2xl border-2 border-gray-300 bg-white/90 p-3 text-center shadow-sm">
		<div className="font-black text-gray-900 text-xl">{value}</div>
		<div className="font-bold text-gray-600 text-xs">{label}</div>
	</div>
));

StatCard.displayName = "StatCard";

export const ProfileCard = memo(() => (
	<motion.div
		className="relative flex items-center justify-center"
		variants={ANIMATION_VARIANTS.item}
		initial="hidden"
		animate="visible"
	>
		<div className="relative">
			<div className="-top-4 -left-4 absolute h-96 w-80 rotate-2 rounded-3xl border-4 border-gray-900 bg-rose-200" />

			<motion.div
				className="relative flex h-96 w-80 flex-col items-center justify-center overflow-hidden rounded-3xl border-4 border-gray-900 bg-gradient-to-br from-cyan-50 to-rose-50 p-8 text-center shadow-[8px_8px_0px_0px_rgba(17,24,39,1)]"
				whileHover={{ rotate: -1, transition: { duration: 0.3 } }}
				style={{ willChange: "transform" }}
			>
				<div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full border-4 border-gray-900 bg-gradient-to-br from-cyan-400 to-rose-400 shadow-lg">
					<span className="font-black text-4xl text-white">BE</span>
				</div>

				<h3 className="mb-3 font-black text-2xl text-gray-900">
					BACKEND ENGINEER
				</h3>

				<p className="mb-6 font-medium text-gray-600 leading-tight">
					Building systems that handle millions of requests with microsecond
					precision and reliability.
				</p>

				<div className="grid w-full grid-cols-2 gap-4">
					<StatCard value="15+" label="Projects" />
					<StatCard value="99.9%" label="Uptime" />
				</div>
			</motion.div>

			<motion.div
				className="-top-2 -right-2 absolute flex h-12 w-12 items-center justify-center rounded-full border-4 border-gray-900 bg-cyan-400 text-xl shadow-lg"
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
				<Zap />
			</motion.div>
		</div>
	</motion.div>
));

ProfileCard.displayName = "ProfileCard";
