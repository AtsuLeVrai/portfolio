import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	env: {
		RESEND_API_KEY: "re_basf2nog_NKGffX8UncBSLH9ZyNJ3YxWq",
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
