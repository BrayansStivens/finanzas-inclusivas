// next.config.mjs
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.resolve.alias["@Components"] = path.join(__dirname, "components");

    config.module.rules.push({
      test: /punycode/,
      use: 'null-loader'
    });

    return config;
  },
  images: {
    domains: [],
    loader: "default",
  },
  output: 'standalone',
};

export default nextConfig;
