"use client";

import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<div className="h-12 w-12 rounded-xl border-3 border-gray-900 bg-white md:h-14 md:w-14 md:border-4" />
		);
	}

	return (
		<motion.button
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			className="flex h-12 w-12 items-center justify-center rounded-xl border-3 border-gray-900 bg-white text-gray-900 shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] transition-all hover:bg-cyan-400 dark:border-gray-100 dark:bg-gray-900 dark:text-white dark:shadow-[4px_4px_0px_0px_rgba(243,244,246,1)] dark:hover:bg-cyan-600 md:h-14 md:w-14 md:border-4"
			whileHover={{ y: -4, boxShadow: "6px 6px 0px 0px rgba(17,24,39,1)" }}
			whileTap={{ y: 0, boxShadow: "2px 2px 0px 0px rgba(17,24,39,1)" }}
			aria-label="Toggle theme"
		>
			{theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
		</motion.button>
	);
}
