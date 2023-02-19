import { defineCollection, z } from 'astro:content';

export const collections = {
    posts: defineCollection({
        schema: z.object({
            draft: z.boolean(),
            title: z.string(),
            // author: z.string().default('Anonymous'),
            tags: z.array(z.string()),
            // An optional frontmatter property. Very common!
            // footnote: z.string().optional(),
            // Convert a standard date-string into a `Date` object
            // date: z.string().transform(str => new Date(str)),
            date: z.date(),
            // Advanced: Validate that the string is also an email
            // authorContact: z.string().email(),
            // Advanced: Validate that the string is also a URL
            // canonicalURL: z.string().url(),
        })
    }),

    publications: defineCollection({
        schema: z.object({
            title: z.string(),
            authors: z.array(z.string()),
            tags: z.array(z.string()),
            date: z.date(),
            publication: z.string(),
            draft: z.boolean(),
        })
    }),
};
