import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  site: 'https://contextpatterns.com',
  integrations: [sitemap()],
  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, { rel: ['noopener'] }],
    ],
  },
});
