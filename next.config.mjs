import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Configuración personalizada de Webpack
    config.resolve.alias["@Components"] = path.join(__dirname, "components");

    // Añadir regla para manejar el módulo `punycode`
    config.module.rules.push({
      test: /punycode/,
      use: 'null-loader'
    });

    // Opciones adicionales de optimización y configuración
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
      };
    }

    return config;
  },
  images: {
    domains: [],
    loader: "default",
  },
  output: 'standalone',
};

export default nextConfig;
