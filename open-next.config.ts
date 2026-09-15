import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Static portfolio — no ISR/on-demand revalidation needed,
// so we keep the default (in-memory) incremental cache.
export default defineCloudflareConfig();