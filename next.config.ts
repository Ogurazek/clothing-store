import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337", // Asegúrate de usar el puerto correcto
      },
    ],
  },
};

module.exports = nextConfig;

export default nextConfig;
