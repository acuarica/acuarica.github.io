import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/guides/integrations-guide/mdx/
import mdx from '@astrojs/mdx';

// https://docs.astro.build/en/guides/integrations-guide/tailwind/
import tailwind from '@astrojs/tailwind';

// https://docs.astro.build/en/guides/integrations-guide/sitemap/
// See `site` field below
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    // https://docs.astro.build/en/reference/configuration-reference/#site
    site: 'https://acuarica.github.io',

    // https://docs.astro.build/en/reference/configuration-reference/#base
    base: '/dev',

    // https://docs.astro.build/en/reference/configuration-reference/#integrations
    integrations: [
        mdx(),
        tailwind(),
        sitemap()
    ],
});
