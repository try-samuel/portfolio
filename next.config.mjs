/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "ghchart.rshah.org",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        port: "",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
