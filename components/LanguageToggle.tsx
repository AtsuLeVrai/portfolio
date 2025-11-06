"use client";

import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export function LanguageToggle() {
	const { i18n } = useTranslation();

	const toggleLanguage = () => {
		const newLang = i18n.language === "en" ? "fr" : "en";
		i18n.changeLanguage(newLang);
	};

	const currentLang = i18n.language === "en" ? "EN" : "FR";
	const nextLang = i18n.language === "en" ? "FR" : "EN";

	return (
		<motion.button
			onClick={toggleLanguage}
			className="group relative flex items-center gap-2 overflow-hidden rounded-full border-2 border-gray-900 bg-white px-3 py-2 font-black text-gray-900 text-xs shadow-[2px_2px_0px_0px_rgba(17,24,39,1)] transition-all sm:px-4 sm:text-sm"
			whileHover={{
				scale: 1.05,
				boxShadow: "4px 4px 0px 0px rgba(17,24,39,1)",
			}}
			whileTap={{ scale: 0.95, boxShadow: "1px 1px 0px 0px rgba(17,24,39,1)" }}
			aria-label="Toggle language"
		>
			<span className="relative z-10">{currentLang}</span>
			<span className="text-gray-400">/</span>
			<span className="relative z-10 text-cyan-600 transition-colors group-hover:text-rose-600">
				{nextLang}
			</span>
			<motion.div
				className="absolute inset-0 bg-gradient-to-r from-cyan-100 to-rose-100 opacity-0 transition-opacity group-hover:opacity-100"
				initial={false}
			/>
		</motion.button>
	);
}
