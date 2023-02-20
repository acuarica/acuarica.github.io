import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    integrations: [
        // https://docs.astro.build/en/guides/integrations-guide/mdx/
        mdx(),

        // https://docs.astro.build/en/guides/integrations-guide/tailwind/
        tailwind(),

        // https://docs.astro.build/en/guides/integrations-guide/sitemap/
        // See `site` field below
        sitemap(),
    ],

    site: 'https://acuarica.github.io',
});
