import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure Turbopack root explicitly to silence workspace root inference warnings
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
