import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "@/locales/en/translation.json";
import translationFR from "@/locales/fr/translation.json";

const resources = {
	en: { translation: translationEN },
	fr: { translation: translationFR },
};

i18n.use(initReactI18next).init({
	resources,
	lng: "fr", // Always start with French for SSR consistency
	fallbackLng: "fr",
	interpolation: {
		escapeValue: false,
	},
	react: {
		useSuspense: false, // Prevent hydration issues
	},
});

export default i18n;
