import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Static portfolio — no ISR/on-demand revalidation needed,
// so we keep the default (in-memory) incremental cache.
//
// buildCommand: the Cloudflare build runs `npm run build`, which invokes this
// CLI. Without this, the CLI's "Building Next.js app" step would re-run
// `npm run build` again → infinite recursion (the recurring banner loop seen
// in Cloudflare deploy logs). Point the inner step directly at `next build`.
export default {
  ...defineCloudflareConfig(),
  buildCommand: "next build",
};