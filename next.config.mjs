/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com"
            }
        ]
    },
    env: {
        TEST: "test"
    }
};

export default nextConfig;