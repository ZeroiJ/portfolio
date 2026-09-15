import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

// Wire wrangler bindings (D1) into `next dev` for local development.
initOpenNextCloudflareForDev();

const nextConfig: NextConfig = {};

export default nextConfig;