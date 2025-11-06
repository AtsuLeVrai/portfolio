import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	env: {
		RESEND_API_KEY: process.env.RESEND_API_KEY,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "placehold.co",
			},
		],
	},
};

export default nextConfig;
