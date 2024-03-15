import type { Config } from "tailwindcss";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

const config: Config = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: { "background-black": "#141414" },
		},
	},
	plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
	const allColors = flattenColorPalette(theme("colors"));
	const newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
	);

	addBase({ ":root": newVars });
}

export default config;
