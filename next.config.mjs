import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.resolve.alias["@Components"] = path.join(__dirname, "components");
    config.resolve.alias["@Utils"] = path.join(__dirname, "utils");

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '**',
      },
    ],
    loader: "default",
  },
  output: 'standalone',
};

export default nextConfig;
