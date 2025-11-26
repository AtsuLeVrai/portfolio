import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Tom B. - Backend Engineer Portfolio",
		short_name: "Tom B. Portfolio",
		description:
			"Backend Engineer specializing in Discord tooling and real-time systems",
		start_url: "/",
		display: "standalone",
		background_color: "#ffffff",
		theme_color: "#0891b2",
		icons: [
			{
				src: "/icon-192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/icon-512.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
	};
}
