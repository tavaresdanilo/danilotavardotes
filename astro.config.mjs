// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  image: {
    domains: ["githubusercontent.com"],
    remotePatterns: [{ protocol: "https" }]
  }
});