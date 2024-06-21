import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.resolve.alias["@Components"] = path.join(dirname, "components");
    config.resolve.alias["@Utils"] = path.join(dirname, "utils");

    return config;
  },
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: '10.100.50.21',
        port: '3000',
        pathname: '**',
      },
    ],
    loader: "default",
  },
};

export default nextConfig;