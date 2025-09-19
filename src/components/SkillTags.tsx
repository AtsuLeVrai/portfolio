import { AnimatePresence, motion } from "motion/react";
import { memo, useCallback, useState } from "react";
import { SKILL_TAGS, type SkillTagProps } from "@/constants";
import { cn } from "@/lib/utils";

const SkillTooltip = memo(({ skill }: { skill: SkillTagProps }) => (
	<motion.div
		className="-translate-x-1/2 absolute bottom-full left-1/2 z-20 mb-3 w-80 transform"
		initial={{ opacity: 0, y: 10, scale: 0.9 }}
		animate={{ opacity: 1, y: 0, scale: 1 }}
		exit={{ opacity: 0, y: 10, scale: 0.9 }}
		transition={{ duration: 0.2, ease: "easeOut" }}
	>
		<div className="rounded-2xl border-4 border-gray-900 bg-white p-6 shadow-[8px_8px_0px_0px_rgba(17,24,39,1)]">
			<div className="mb-3 flex items-center gap-3">
				<div
					className={cn("rounded-full border-2 p-2", skill.bg, skill.border)}
				>
					<skill.icon size={16} className="text-gray-900" />
				</div>
				<h4 className="font-black text-gray-900 text-lg">
					{skill.tooltip.title}
				</h4>
			</div>

			<p className="mb-4 text-gray-700 text-sm leading-relaxed">
				{skill.tooltip.description}
			</p>

			<div className="flex flex-wrap gap-2">
				{skill.tooltip.tech.map((tech) => (
					<span
						key={tech}
						className="rounded-md border border-gray-300 bg-gray-100 px-2 py-1 font-medium text-gray-700 text-xs"
					>
						{tech}
					</span>
				))}
			</div>

			<div className="-translate-x-1/2 absolute top-full left-1/2 transform">
				<div className="h-0 w-0 border-t-[8px] border-t-gray-900 border-r-[8px] border-r-transparent border-l-[8px] border-l-transparent" />
				<div className="-translate-x-1/2 absolute top-[-7px] left-1/2 h-0 w-0 transform border-t-[6px] border-t-white border-r-[6px] border-r-transparent border-l-[6px] border-l-transparent" />
			</div>
		</div>
	</motion.div>
));

SkillTooltip.displayName = "SkillTooltip";

const SkillTag = memo(
	({
		skill,
		onHover,
	}: {
		skill: SkillTagProps;
		onHover: (skill: string | null) => void;
	}) => {
		const handleHoverStart = useCallback(
			() => onHover(skill.text),
			[onHover, skill.text],
		);
		const handleHoverEnd = useCallback(() => onHover(null), [onHover]);

		return (
			<motion.div
				className={cn(
					"cursor-pointer select-none rounded-2xl border-2 px-2 py-3 text-center text-gray-900 transition-transform hover:scale-105",
					skill.bg,
					skill.border,
				)}
				onHoverStart={handleHoverStart}
				onHoverEnd={handleHoverEnd}
				whileHover={{ y: -2 }}
			>
				<div className="font-bold text-xs leading-tight">{skill.text}</div>
				<div className="font-bold text-xs leading-tight">{skill.subtext}</div>
			</motion.div>
		);
	},
);

SkillTag.displayName = "SkillTag";

export const SkillTags = memo(() => {
	const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

	return (
		<div className="mx-auto grid w-full max-w-md grid-cols-3 gap-2">
			{SKILL_TAGS.map((skill) => (
				<div key={skill.text} className="relative">
					<SkillTag skill={skill} onHover={setHoveredSkill} />
					<AnimatePresence>
						{hoveredSkill === skill.text && <SkillTooltip skill={skill} />}
					</AnimatePresence>
				</div>
			))}
		</div>
	);
});

SkillTags.displayName = "SkillTags";
