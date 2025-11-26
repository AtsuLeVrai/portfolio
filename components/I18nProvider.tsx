"use client";

import "@/lib/i18n";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function I18nProvider({ children }: { children: React.ReactNode }) {
	const { i18n } = useTranslation();
	const [isHydrated, setIsHydrated] = useState(false);

	useEffect(() => {
		// Restore language preference after hydration
		const stored = localStorage.getItem("i18nextLng");
		if (
			stored &&
			(stored === "en" || stored === "fr") &&
			stored !== i18n.language
		) {
			i18n.changeLanguage(stored);
		}
		setIsHydrated(true);
	}, [i18n]);

	// Prevent flash by hiding content until hydrated
	// Remove this if you prefer showing French content immediately
	return (
		<div style={{ visibility: isHydrated ? "visible" : "visible" }}>
			{children}
		</div>
	);
}
