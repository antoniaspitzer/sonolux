import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Erlaubt Next.js, lokale private IPs / Localhost für Bilder zu nutzen
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
    // Falls Next.js in der Entwicklungsumgebung die IP-Sperre strikt erzwingt:
    unoptimized: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;