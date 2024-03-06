"use client";
import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";
import { cn } from "@/shared";

export const TextGenerateEffect = ({
	words,
	className,
}: {
	readonly className?: string;
	readonly words: string;
}) => {
	const [scope, animate] = useAnimate();
	const wordsArray = words.split(" ");
	useEffect(() => {
		void animate(
			"span",
			{ opacity: 1 },
			{
				duration: 2,
				delay: stagger(0.2),
			},
		);
	}, [scope.current]);

	const renderWords = () => <motion.div ref={scope}>
		{wordsArray.map((word, idx) => <motion.span
			key={word + idx}
			className='dark:text-zinc-400 text-black opacity-0'
		>
			{word}{" "}
		</motion.span>)}
	</motion.div>;
	return (
		<div className={cn("font-bold", className)}>
			<div className='mt-4'>
				<div className='dark:text-zinc-400 text-black text-1xl leading-snug tracking-wide'>
					{renderWords()}
				</div>
			</div>
		</div>
	);
};
