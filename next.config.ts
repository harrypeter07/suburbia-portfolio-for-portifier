import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		domains: [
			"api.microlink.io", // Microlink Image Preview
			"images.unsplash.com", // Unsplash images for project previews
		],
	},
};

export default nextConfig;
