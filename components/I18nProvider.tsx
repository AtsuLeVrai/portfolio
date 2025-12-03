"use client";

import "@/lib/i18n";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export function I18nProvider({ children }: { children: React.ReactNode }) {
	const { i18n } = useTranslation();

	useEffect(() => {
		const stored = localStorage.getItem("i18nextLng");
		if (
			stored &&
			(stored === "en" || stored === "fr") &&
			stored !== i18n.language
		) {
			i18n.changeLanguage(stored);
		}
	}, [i18n]);

	return <>{children}</>;
}
