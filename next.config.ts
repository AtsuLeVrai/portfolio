import type { NextConfig } from "next";

export default {
	typedRoutes: true,
	turbopack: {
		rules: {
			"*.glsl": {
				loaders: ["raw-loader"],
				as: "*.js",
			},
			"*.vs": {
				loaders: ["raw-loader"],
				as: "*.js",
			},
			"*.fs": {
				loaders: ["raw-loader"],
				as: "*.js",
			},
		},
	},
	experimental: {
		optimizePackageImports: [
			"three",
			"@react-three/fiber",
			"@react-three/drei",
		],
	},
	webpack: (config, { isServer }) => {
		// Configuration pour les shaders GLSL
		config.module.rules.push({
			test: /\.(glsl|vs|fs)$/,
			type: "asset/source",
		});

		// Optimisations pour Three.js
		if (!isServer) {
			config.resolve.fallback = {
				...config.resolve.fallback,
				fs: false,
				path: false,
			};
		}

		return config;
	},
	async headers() {
		return [
			{
				source: "/(.*)",
				headers: [
					{
						key: "X-Content-Type-Options",
						value: "nosniff",
					},
					{
						key: "X-Frame-Options",
						value: "DENY",
					},
					{
						key: "Referrer-Policy",
						value: "strict-origin-when-cross-origin",
					},
				],
			},
		];
	},
} as NextConfig;
