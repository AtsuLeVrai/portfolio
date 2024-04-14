import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				"code-red": "#e44844",
				"code-blue": "#49a3e4",
				"code-yellow": "#e7b835",
				"code-green": "#87c575",
			},
		},
	},
	plugins: [],
};
export default config;
