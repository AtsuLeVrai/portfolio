import { motion } from "motion/react";
import { memo } from "react";
import { WINDOW_CONTROLS } from "@/constants";
import { cn } from "@/lib/utils";

const WindowControl = memo(
	({ color, icon: Icon }: (typeof WINDOW_CONTROLS)[0]) => (
		<motion.div
			className={cn(
				"relative h-4 w-4 cursor-pointer select-none overflow-hidden rounded-full border-2 border-gray-900",
				{
					"bg-rose-300": color === "rose",
					"bg-yellow-300": color === "yellow",
					"bg-green-300": color === "green",
				},
			)}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
		>
			<motion.div
				className="absolute inset-0 flex select-none items-center justify-center text-gray-900"
				initial={{ opacity: 0 }}
				whileHover={{ opacity: 1 }}
			>
				<Icon size={10} strokeWidth={3} />
			</motion.div>
		</motion.div>
	),
);

WindowControl.displayName = "WindowControl";

export const WindowControls = memo(() => (
	<div className="flex gap-2">
		{WINDOW_CONTROLS.map((control) => (
			<WindowControl key={control.type} {...control} />
		))}
	</div>
));

WindowControls.displayName = "WindowControls";
