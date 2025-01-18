/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
    domains: ["i.postimg.cc"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        pathname: "/**", // This matches all paths under the domain
      },
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/**", // This matches all paths under the domain
      },
    ],
  },
};

export default nextConfig;
