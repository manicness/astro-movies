import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  vite: {
    define: {
      'process.env.TMDB_API_KEY': JSON.stringify(process.env.TMDB_API_KEY)
    }
  },
  adapter: netlify()
});