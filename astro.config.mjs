import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  output: 'static',
  adapter: vercel(),
  site: 'https://your-site.vercel.app',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
