import type { NextConfig } from "next";
import {
  initOpenNextCloudflareForDev,
  withCloudflare,
} from "@opennextjs/cloudflare";

initOpenNextCloudflareForDev();

const nextConfig: NextConfig = {};

export default withCloudflare(nextConfig);