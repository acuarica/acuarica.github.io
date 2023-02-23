import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';
import { toc } from 'mdast-util-toc'
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/guides/integrations-guide/mdx/
import mdx from '@astrojs/mdx';

// https://docs.astro.build/en/guides/integrations-guide/tailwind/
import tailwind from '@astrojs/tailwind';

// https://docs.astro.build/en/guides/integrations-guide/sitemap/
// See `site` field below
import sitemap from '@astrojs/sitemap';

// https://github.com/alextim/astro-lib/tree/main/packages/astro-robots-txt#installation
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
    // https://docs.astro.build/en/reference/configuration-reference/#site
    site: 'https://acuarica.github.io',

    // https://docs.astro.build/en/reference/configuration-reference/#base
    // base: '/dev',

    markdown: {
        remarkPlugins: [
            remarkToc,
            remarkReadingTime,
            remarkPreviewParagraph,
        ],
        rehypePlugins: [
            rehypeHeadingIds,
            // https://github.com/rehypejs/rehype-autolink-headings#api
            rehypeAutolinkHeadings,
        ]
    },

    // https://docs.astro.build/en/reference/configuration-reference/#integrations
    integrations: [
        mdx(),
        tailwind(),

        // https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
        sitemap({
            // https://docs.astro.build/en/guides/integrations-guide/sitemap/#changefreq-lastmod-and-priority
            // > Note that changefreq and priority are ignored by Google.
            changefreq: 'weekly',
            // priority: 0.7,
            lastmod: new Date(),
        }),

        // Allow all bots to scan and index your site.
        // Full syntax: https://developers.google.com/search/docs/advanced/robots/create-robots-txt
        robotsTxt(),
    ],

});

function remarkToc() {
    return function (tree, { data }) {
        data.astro.frontmatter.toc = toc(tree);
    };
}

// https://docs.astro.build/en/guides/markdown-content/#example-calculate-reading-time
// https://docs.astro.build/en/guides/content-collections/#modifying-frontmatter-with-remark
function remarkReadingTime() {
    return function (tree, { data }) {
        const textOnPage = toString(tree);
        const readingTime = getReadingTime(textOnPage);
        // readingTime.text will give us minutes read as a friendly string, i.e. "3 min read"
        data.astro.frontmatter.minutesRead = readingTime.text;
    };
}

function remarkPreviewParagraph() {
    return function (tree, { data }) {
        const textOnPage = toString(tree);
        data.astro.frontmatter.previewParagraph = textOnPage.substring(0, 250);
    };
}
